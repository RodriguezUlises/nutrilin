import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.about} id='about'>
        <h2>HOLA Y BIENVENIDA</h2>
        <p className={styles.iam}>
            Yo soy Joselin Rodriguez, una nutriologa 
            apasionada. Amo ayudar a mis pacientes a 
            lograr sus objectivos.<br />
            Soy egresada de la UABC 
            Cd. 12345678
        </p>
        <div className={styles.mision}>
            <h3>MISION Y VISION</h3>
            <p>
                <b>Mision</b> <br />
                Hacer llegar a mis pacientes a su objetivo,
                ayudandolos con un plan alimenticio
                personalizado de su agrado.
            </p>
            <p>
                <b>Vision</b> <br />
                Fomentar estilos de vida saludables a 
                través de la nutrición, el ejercicio, la 
                prevención y atención de enfermedades
                relacionadas con la alimentación.
            </p>
        </div>
    </div>
  )
}
