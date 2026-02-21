import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© {new Date().getFullYear()} Ayush Kapoor</div>
        <div className={styles.links}>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
