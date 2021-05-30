import React from 'react';
import styles from './styles/AdBanner.module.css';
import Button from '../components/Button';

function AdBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left_inner}>
          <p className={styles.header_h1}>
            Shop the Mirzapur Collection & 20 Lucky Winners per day to win
          </p>
          <p className={styles.header_h2}>Amazon Fire TV Stick</p>

          <Button
            text={'View Collection'}
            backColor='white'
            textColor='black'
            size={'md'}
          />
        </div>
      </div>
    </div>
  );
}

export default AdBanner;
