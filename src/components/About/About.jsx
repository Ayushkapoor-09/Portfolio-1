import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <p>
        I'm an Economics student with a strong interest in data analysis and
        machine learning. I enjoy extracting insights from data and building
        reproducible dashboards and models. My toolset includes Python,
        Pandas, NumPy and React for building interactive frontends for data
        products.
      </p>
      <p>
        I'm actively learning more advanced ML techniques, model deployment,
        and cloud services to bring production-ready data solutions to life.
      </p>
    </div>
  )
}
