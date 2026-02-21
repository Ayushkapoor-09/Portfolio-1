import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme') || 'dark',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#home">
          <div className={styles.logo} />
          <div className={styles.title}>
            <div className={styles.name}>Ayush Kapoor</div>
            <div className={styles.role}>Economics student • Aspiring Data Analyst</div>
          </div>
        </a>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.controls}>
          <button
            aria-label="Toggle theme"
            className={styles.themeBtn}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={styles.burger}
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
