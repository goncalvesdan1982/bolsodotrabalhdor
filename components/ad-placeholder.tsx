interface AdPlaceholderProps {
  className?: string
  slot?: string
}

export function AdPlaceholder({ className = '', slot = 'horizontal' }: AdPlaceholderProps) {
  return (
    <div 
      className={`ad-placeholder flex items-center justify-center ${className}`}
      data-ad-slot={slot}
      aria-hidden="true"
    >
      {/* Google AdSense will be inserted here */}
    </div>
  )
}
