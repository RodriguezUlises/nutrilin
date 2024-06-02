import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
        <span></span>
        <button onClick={() => document.getElementById('services').scrollIntoView()}>SERVICIOS</button>
        <h1>NUTRIOLOGA JOSELIN</h1>
        <button onClick={() => document.getElementById('about').scrollIntoView()}>SOBRE MI</button>
        <button onClick={() => document.getElementById('contact').scrollIntoView()}>CONTACTOS</button>
    </div>
  )
}
