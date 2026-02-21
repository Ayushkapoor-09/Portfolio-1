import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${form.name}`)
    const body = encodeURIComponent(form.msg + '\n\n' + form.email)
    window.location.href = `mailto:ayush@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        <textarea name="msg" placeholder="Message" value={form.msg} onChange={handleChange} required />
        <div className={styles.row}>
          <button type="submit" className={styles.send}>Send</button>
          <a className={styles.link} href="mailto:ayush@example.com">Or email directly</a>
        </div>
      </form>
    </div>
  )
}
