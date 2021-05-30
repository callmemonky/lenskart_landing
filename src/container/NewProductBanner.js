import React from 'react';
import styles from './styles/NewProductBanner.module.css';
import Button from '../components/Button';
import Avatar from '../components/Avatar';

import munna from '../assets/images/munna.jpeg';
import cop from '../assets/images/cop.jpg';
import tripathi from '../assets/images/tripathi.jpg';

import sunglasses1 from '../assets/images/sunglasses.png';
import sunglasses2 from '../assets/images/sunglasses2.png';
import sunglasses3 from '../assets/images/sunglasses3.png';

const products = [
  {
    id: 1,
    content: (
      <>
        The iron-fisted{' '}
        <span style={{ color: '#ff3705' }}>Akhandanand Tripathi</span> is a
        millionaire carpet exporter and the mafia done of Mirzapur
      </>
    ),
    name: 'Vincent Chase',
    feature: 'Golden Green Full Rim',
    imageSrc: tripathi,
    sunImage: sunglasses1,
  },
  {
    id: 2,
    content: (
      <>
        Akhandanand's son,{' '}
        <span style={{ color: '#ff3705' }}>Munna Tripathi</span> is power hungry
        and will not stop at anything to inherit his father's legacy
      </>
    ),
    name: 'Vincent Chase',
    feature: 'Black Grey Full Rim',
    imageSrc: munna,
    sunImage: sunglasses2,
  },
  {
    id: 3,
    content: (
      <>
        An honest cop, <span style={{ color: '#ff3705' }}>Maurya Saab</span> who
        goes an extra mile to eliminate the bad and the over-powering crime in
        the city
      </>
    ),
    name: 'Vincent Chase',
    feature: 'Golden Brown Full Rim',
    imageSrc: cop,
    sunImage: sunglasses3,
  },
];

function NewProductBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header_inner}>
          <p className={styles.header_inner_h1}>BOLD, DARING & STURDY</p>
          <p className={styles.header_inner_h2}>
            These Pilots are perfect for that Grunge Look
          </p>
          <div className={styles.border_short}></div>
        </div>

        <div className={styles.products_inner}>
          {products.map((p) => (
            <>
              <div className={styles.product_item}>
                <Avatar size={'md'} src={p.imageSrc} />

                <p className={styles.product_catchPhrase}>{p.content}</p>
                <img
                  src={p.sunImage}
                  alt=''
                  style={{ width: '250px', marginTop: '40px' }}
                />

                <p style={{ color: 'white' }}>{p.name}</p>
                <p style={{ color: 'white' }}>{p.feature}</p>

                <Button
                  text={'Buy Now'}
                  backColor='white'
                  textColor='black'
                  size={'sm'}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProductBanner;
