import React from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'Sales Forecasting Dashboard',
    desc: 'End-to-end forecasting dashboard combining ML models and interactive visualizations to project sales trends.',
    tags: ['Python', 'Pandas', 'ML', 'Dashboard'],
  },
  {
    title: 'Travel India Web Project',
    desc: 'Responsive site showcasing travel destinations and trip planning tools built with modern front-end techniques.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Student Analyzer System',
    desc: 'ML-based prediction system to analyze student performance and provide actionable insights.',
    tags: ['Python', 'ML', 'Data Analysis'],
  },
]

function ProjectCard({ p }) {
  return (
    <article className={styles.card}>
      <h3>{p.title}</h3>
      <p className={styles.desc}>{p.desc}</p>
      <div className={styles.tags}>{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className={styles.actions}>
        <a href="#projects" className={styles.link}>Case study</a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </div>
  )
}
