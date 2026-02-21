import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.hi}>Hi, I'm Ayush Kapoor</h1>
        <p className={styles.lead}>
          Economics student and aspiring Data Analyst & ML enthusiast. I build
          data-driven projects and dashboards using Python, Pandas, NumPy and
          React.
        </p>

        <div className={styles.cta}>
          <a className={styles.primary} href="#projects">View Projects</a>
          <a className={styles.ghost} href="#contact">Get in touch</a>
        </div>
      </div>
      <div className={styles.visual} aria-hidden>
        <div className={styles.card} />
      </div>
    </div>
  )
}
