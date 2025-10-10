// src/app/components/ContactForm/ContactForm.tsx
'use client'

import { useState } from 'react'
import styles from './ContactForm.module.scss'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simular envío (aquí conectarías con tu backend/API)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status después de 3 segundos
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <button 
        type="submit" 
        className={styles.button}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Submit'}
      </button>

      {status === 'success' && (
        <p className={styles.success}>Message sent successfully!</p>
      )}
    </form>
  )
}