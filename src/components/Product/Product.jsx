import React from 'react';
import Image from 'next/image';
import styles from './Product.module.css';

export const Product = () => {
  return (
    <div className={styles.product}>
        <div className={styles.left}>
          <h2>COMIENZA HOY TU CAMBIO</h2>
          <p>
            Brinda asesoramiento nutricional. Ya
            sea que tenga un problema de salud
            relacionado con la dieta, como la 
            diabetes, esté interesado en perder
            peso o simplemente desee comenzar a
            comer de manera más saludable. Puede 
            aprender como nutrir su cuerpo para 
            que pueda alcanzar sus objetivos de 
            estilo de vida.
          </p>
        </div>
        <div className={styles.right}>
          <Image
              src="https://jimvsechno.cz/wp-content/uploads/2020/02/imgs_02.jpg"
              width={690}
              height={420}
          />
        </div>
    </div>
  )
}
