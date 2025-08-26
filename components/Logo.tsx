// Verified: Path to logo matches /public/images/Noerr-logo.png
import Image from 'next/image'
import React from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  variant?: 'light' | 'dark'
}

export default function Logo({ 
  className = '', 
  width = 150, 
  height = 60, 
  variant = 'light' 
}: LogoProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className={`relative ${
        variant === 'light' 
          ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]' 
          : 'drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]'
      }`}>
        <Image
          src="/images/Noerr-logo.png"
          alt="Noerr Motor Freight"
          width={width}
          height={height}
          className={`object-contain transition-all duration-300 ${
            variant === 'light' ? 'brightness-100' : 'brightness-95'
          }`}
          priority
        />
      </div>
    </div>
  )
}
