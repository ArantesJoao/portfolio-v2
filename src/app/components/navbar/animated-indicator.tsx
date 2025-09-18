interface AnimatedIndicatorProps {
  left: number
  width: number
}

const AnimatedIndicator = ({ left, width }: AnimatedIndicatorProps) => {
  return (
    <>
      {/* Main animated background indicator */}
      <div
        className="absolute h-full bg-gradient-to-r from-purple-500/25 via-purple-400/30 to-purple-500/25 rounded-full transition-all duration-700 ease-out shadow-lg shadow-purple-500/20"
        style={{
          left: `${left}px`,
          width: `${width}px`,
          transform: 'translateY(0)',
        }}
      />

      {/* Animated glow effect */}
      <div
        className="absolute h-full bg-gradient-to-r from-purple-500/10 via-purple-400/15 to-purple-500/10 rounded-full transition-all duration-700 ease-out blur-sm"
        style={{
          left: `${left - 4}px`,
          width: `${width + 8}px`,
          transform: 'translateY(0)',
        }}
      />
    </>
  )
}

export default AnimatedIndicator
