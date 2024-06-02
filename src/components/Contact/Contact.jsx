import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.contact} id='contact'>
        <div className={styles.container}>
            <h3>CONTACTOS</h3>
            <div>
                Dirección del consultorio:
                <em>Calle cualquiera 123, Mexicali</em>
            </div>
            <div>
                Teléfonos:
                <em>+52 (686) 123 4567</em>
            </div>
            <div>
                Email:
                <em>joss@nutria.mx</em>
            </div>
        </div>
    </div>
  )
}
