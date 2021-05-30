import React from 'react';
import styles from './styles/HelplineBanner.module.css';

import { HiOutlineMail } from 'react-icons/hi';
import { RiPhoneLine } from 'react-icons/ri';

function HelplineBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left_inner}>
          <p className={styles.helpline_header}>Looking for help?</p>
          <div className={styles.border_short}></div>
          <p className={styles.helpline_content}>
            We are available by phone Monday to Sunday from 9 AM to 8 PM. <br />
            Please feel free to call us if you have any queries.
          </p>
        </div>

        <div className={styles.right_inner}>
          <div className={styles.icon_common_style}>
            <div className={styles.icon_common_icon}>
              <HiOutlineMail color={'white'} size={42} />
            </div>
            <div>
              <p className={styles.icon_common_h1}>Email Us</p>
              <p className={styles.icon_common_h2}>support@lenskart.com</p>
            </div>
          </div>

          <div className={styles.icon_common_style}>
            <div>
              <RiPhoneLine color={'white'} size={42} />
            </div>
            <div>
              <p className={styles.icon_common_h1}>Call Us</p>
              <p className={styles.icon_common_h2}>99998 99998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelplineBanner;
