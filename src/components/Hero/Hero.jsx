import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <div className={styles.hero}>
        <Image
            src="https://www.smallcitybigpersonality.co.uk/pubd/images/upd/16fa431d273-AdobeStock-178373384.700.jpeg"
            width={1250}
            height={466}
        />
        <span></span>
        <div className={styles.cta}>
            <h2>Nutrición medica</h2>
            <p>Porque todos merecemos un cambio</p>
            <button onClick={() => document.getElementById('contact').scrollIntoView()}>CONTACTAR</button>
        </div>
    </div>
  )
}
