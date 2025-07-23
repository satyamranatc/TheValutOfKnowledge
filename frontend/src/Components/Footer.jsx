import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Dhyanywaad Aap Aaye</h2>
      <p>&copy; {new Date().getFullYear()} TheVaultOfKnowledge | Sabka Gyaan Yahi Hai</p>
    </footer>
  )
}
