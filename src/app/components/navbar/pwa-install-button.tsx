'use client'

import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

interface PWAInstallButtonProps {
  onClose: () => void
}

export default function PWAInstallButton({ onClose }: PWAInstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)

  useEffect(() => {
    // Set client-side flag to prevent hydration mismatch
    setIsClient(true)

    // Detect iOS devices
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    setIsIOS(isIOSDevice)

    // Check if app is already installed using multiple methods
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const isIOSStandalone = 'standalone' in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true
    const isInWebAppiOS = window.matchMedia('(display-mode: standalone)').matches &&
      /iPad|iPhone|iPod/.test(navigator.userAgent)

    if (isStandalone || isIOSStandalone || isInWebAppiOS) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event (mainly for Android Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    // Handle iOS devices differently
    if (isIOS) {
      setShowIOSInstructions(!showIOSInstructions)
      return
    }

    // Handle Android/Desktop with beforeinstallprompt
    if (!deferredPrompt) {
      return
    }

    setIsLoading(true)

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        onClose() // Close mobile menu after successful install
      }
    } catch (error) {
      // Silent error handling for production
    } finally {
      setIsLoading(false)
      setDeferredPrompt(null)
    }
  }

  // Don't render anything on server side to prevent hydration mismatch
  if (!isClient) {
    return null
  }

  // Don't show if already installed
  if (isInstalled) {
    return null
  }

  // For local testing - show button even without install prompt on localhost
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

  // Show button if:
  // 1. We have a deferred prompt (Android Chrome)
  // 2. We're on iOS (manual instructions)
  // 3. We're on localhost (testing)
  const shouldShowButton = deferredPrompt || isIOS || isLocalhost

  if (!shouldShowButton) {
    return null
  }

  return (
    <div className="w-full">
      <button
        onClick={handleInstallClick}
        disabled={isLoading}
        className="group relative w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-500 ease-out overflow-hidden border backdrop-blur-sm text-gray-300 hover:text-white hover:bg-white/10 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        <span className="relative z-10 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-white transition-all duration-300" />
          <Download size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          {isLoading ? 'Installing...' : 'Install App'}
        </span>
      </button>

      {/* iOS Installation Instructions */}
      {showIOSInstructions && isIOS && (
        <div className="mt-3 p-4 rounded-xl bg-blue-500/10 border border-blue-400/20 text-sm text-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-300 text-xs">ℹ</span>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-blue-200">Install on iOS:</p>
              <ol className="space-y-1 text-blue-100/90">
                <li>1. Tap the Share button <span className="inline-block w-4 h-4 mx-1">📤</span></li>
                <li>2. Scroll down and tap &quot;Add to Home Screen&quot;</li>
                <li>3. Tap &quot;Add&quot; to install the app</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
