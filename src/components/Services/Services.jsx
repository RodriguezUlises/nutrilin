import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

export const Services = () => {
  return (
    <div className={styles.product} id='services'>
        <div className={styles.left}>
          <h2>NUESTROS SERVICIOS</h2>
          <ul>
            <li>
                Especialistas en Control de peso
            </li>
            <li>
                Especialistas en Trastornos Digestivos
            </li>
            <li>
                Especialistas en Trastornos Alimenticios
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Image
              src="https://miro.medium.com/v2/resize:fit:4800/format:webp/0*uRx6_x-N2ASZ6Kcd"
              width={555}
              height={375}
          />
        </div>
    </div>
  )
}
