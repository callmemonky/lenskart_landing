import React from 'react';
import styles from './styles/Terms.module.css';

function Terms() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.upper_inner}>
          <p className={styles.terms_header}>
            Terms & Conditions of the Contest
          </p>
          <div className={styles.border_short}></div>
        </div>
        <div className={styles.lower_inner}>
          <p className={styles.terms_content}>
            1. 20 Lucky winners everyday will be selected at random. <br />
            2. Winners will be informed within 24 hours of order placed via SMS
            on registered phone number and/or email on the registered email ID.{' '}
            <br />
            3. Complimentary Amazon Fire TV Stick CODE will be sent to the
            winners on order completion. (Order Completion duration: When the
            order is delivered and return period of 14 days is over) <br />
            4. The coupon code is redeemable on amazon.in. To claim, follow the
            steps send on email to order complementary Amazon Fire TV Stick.
            <br />
            5. The purchase needs to be made from the Mirzapur inspired
            Sunglasses Collection only.
            <br />
            6. The offer is subject to change without any prior notice and at
            the sole discretion of Lenskart and Amazon. <br />
            7. Offer valid from 16th November 2018 till 23rd November 2018.
            Codes needs to be used before 31st December 2018. <br />
            8. In case of failure on coupon code redemption, please follow{' '}
            <span className={styles.tnC_underline}>Amazon's T&C.</span> <br />
            9. For after sale service of Amazon Fire TV Stick, please follow{' '}
            <span className={styles.tnC_underline}>Amazon's T&C.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
