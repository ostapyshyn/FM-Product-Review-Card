import React from 'react';
import parfume from '../../assets/img/image-product-desktop.jpg';
import styles from './ProductCard.module.scss';

import { ReactComponent as Cart } from '../../assets/svg/icon-cart.svg';

function ProductCard() {
  return (
    <main>
      <div className={styles.parfumeImage}>
        <img src={parfume} alt="parfume" />
      </div>

      <section>
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.info}>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </p>

        <div className={styles.prices}>
          <p className={styles.price}>$149.99</p>
          <span>$169.99</span>
        </div>

        <div className={styles.button}>
          <Cart />
          <span>Add to Cart</span>
        </div>
      </section>
    </main>
  );
}

export default ProductCard;
