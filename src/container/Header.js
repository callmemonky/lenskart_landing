import React from 'react';
import styles from './styles/Header.module.css';

import Button from '../components/Button';
import Mirzapur from '../assets/images/mirzapur-title.png';

import sunglasses2 from '../assets/images/sunglasses2.png';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left_inner}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{ borderRight: 'solid 1px white', marginRight: '20px' }}
            >
              <img src={Mirzapur} style={{ width: '230px' }} />
            </div>
            <div>
              <p
                style={{
                  textTransform: 'uppercase',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                Mirzapur inspired sunglasses
              </p>
              <img src={sunglasses2} style={{ width: '210px' }} />
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <p className={styles.inner_header_h1}>
              Shop the collection today and 20 Lucky Winners per day to win
            </p>
            <p className={styles.inner_header_h2}>Amazon Fire TV Stick</p>
          </div>
          <Button
            text={'View Collection'}
            backColor='#FF3705'
            textColor='white'
            size={'lg'}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
