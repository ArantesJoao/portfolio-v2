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

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Show helpful message for localhost testing
      alert('PWA Install: No install prompt available. Try accessing the site via HTTPS or check browser developer tools for PWA requirements.')
      return
    }

    setIsLoading(true)

    try {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
        onClose() // Close mobile menu after successful install
      } else {
        console.log('User dismissed the install prompt')
      }
    } catch (error) {
      console.error('Install prompt error:', error)
    } finally {
      setIsLoading(false)
      setDeferredPrompt(null)
    }
  }

  // Don't show if already installed
  if (isInstalled) {
    return null
  }

  // For local testing - show button even without install prompt on localhost
  const isLocalhost = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

  // Don't show if no install prompt available (unless localhost for testing)
  if (!deferredPrompt && !isLocalhost) {
    return null
  }

  return (
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
  )
}
