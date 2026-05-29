import { motion } from 'framer-motion'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  className?: string
}

const fontSizeMap = {
  sm: '1.6rem',
  md: '2rem',
  lg: 'clamp(3.5rem, 9vw, 7rem)',
}

export function WexflixLogo({ size = 'md', animated = false, className = '' }: Props) {
  const letters = 'WEXFLIX'.split('')

  if (!animated) {
    return (
      <div className={`flex items-center ${className}`}>
        <span
          className="text-glow"
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: fontSizeMap[size],
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: 'var(--primary)',
          }}
        >
          W<span style={{ color: 'var(--foreground)' }}>EX</span>FLIX
        </span>
      </div>
    )
  }

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <div
        style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: fontSizeMap[size],
          display: 'flex',
          lineHeight: 1,
        }}
      >
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: -60, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.08 * i, type: 'spring', stiffness: 220, damping: 16 }}
            style={{
              display: 'inline-block',
              color: i === 0 || i === letters.length - 1 ? 'var(--primary)' : 'var(--foreground)',
            }}
            className={i === 0 || i === letters.length - 1 ? 'text-glow' : ''}
          >
            {ch}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ x: '-120%', opacity: 0 }}
        animate={{ x: '220%', opacity: [0, 0.8, 0] }}
        transition={{ delay: 0.9, duration: 0.9, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4"
        style={{ background: 'linear-gradient(to right, transparent, rgba(229,41,58,0.6), transparent)', mixBlendMode: 'screen' }}
      />
    </div>
  )
}
