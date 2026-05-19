'use client'

import { useEffect, useState } from 'react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu-toggle-bar" data-open={open} />
      </button>
      <div
        id="mobile-menu"
        className="mobile-menu"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false)
        }}
      >
        <div className="mobile-menu-panel">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a
            href="#contact"
            className="button button--primary"
            onClick={() => setOpen(false)}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </>
  )
}
