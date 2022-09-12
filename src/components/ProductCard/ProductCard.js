import React from 'react';
import parfume from '../../assets/img/image-product-desktop.jpg';
import styles from './ProductCard.module.scss';

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
        <p>
          $149.99 <span>$169.99</span>
        </p>
        <button>Add to Cart</button>
      </section>
    </main>
  );
}

export default ProductCard;
