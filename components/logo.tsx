export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mountain/A shape */}
      <path
        d="M24 8L6 40H18L24 28L30 40H42L24 8Z"
        fill="#2E5FAC"
      />
      {/* Cyan circle (head) */}
      <circle
        cx="24"
        cy="12"
        r="5"
        fill="#4AB8D8"
      />
      {/* White diagonal bar (motion) */}
      <path
        d="M32 18L38 12"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="h-10 w-10" />
      <span className="font-serif text-xl font-bold tracking-tight text-foreground">
        AI AFLAT
      </span>
    </div>
  )
}
