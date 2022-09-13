import React from 'react';
import parfume from '../../assets/img/image-product-desktop.jpg';
import parfumeMobile from '../../assets/img/image-product-mobile.jpg';
import { ReactComponent as Cart } from '../../assets/svg/icon-cart.svg';
import styles from './ProductCard.module.scss';

function ProductCard() {
  return (
    <main>
      <picture>
        <source media="(min-width: 645px)" srcSet={parfume} />
        <img src={parfumeMobile} alt="parfume" />
      </picture>

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

        {/* <div className={styles.button}>
          <Cart />
          <span>Add to Cart</span>
        </div> */}
        <button className={styles.button}>
          <Cart />
          Add to Cart
        </button>
      </section>
    </main>
  );
}

export default ProductCard;
