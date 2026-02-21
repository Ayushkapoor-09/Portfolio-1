import React from 'react'
import styles from './Skills.module.css'

const SKILLS = [
  'Python',
  'Pandas',
  'NumPy',
  'Machine Learning',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
]

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.grid}>
        {SKILLS.map((s) => (
          <span key={s} className={styles.badge}>{s}</span>
        ))}
      </div>
    </div>
  )
}
