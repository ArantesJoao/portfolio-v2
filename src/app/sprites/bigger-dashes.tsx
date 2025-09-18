const BiggerDashes = () => (
  <svg
    className="absolute w-[232px] h-[232px] lg:w-[362px] lg:h-[362px] spin-slower opacity-full"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="https://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="glowWeak2" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 0" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle
      cx="253"
      cy="253"
      r="250"
      stroke="#9f7aea"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-dash-short"
      filter="url(#glowWeak2)"
    />
  </svg>
)

export default BiggerDashes;