import React from 'react'
import styles from './Certifications.module.css'

const CERTS = [
  'AWS Generative AI Certification',
  'AI/ML Certification',
  'Personality Development Certification',
]

export default function Certifications() {
  return (
    <div className={styles.certs}>
      <h2>Certifications</h2>
      <ul>
        {CERTS.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
