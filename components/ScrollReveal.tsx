'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const hiddenClasses: Record<Direction, string> = {
  up: 'opacity-0 translate-y-12',
  down: 'opacity-0 -translate-y-12',
  left: 'opacity-0 translate-x-12',
  right: 'opacity-0 -translate-x-12',
  none: 'opacity-0',
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClasses[direction]
      } ${className}`}
    >
      {children}
    </div>
  )
}
