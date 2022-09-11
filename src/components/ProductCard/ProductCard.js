import React from 'react';

import styles from './ProductCard.module.scss';

function ProductCard() {
  return (
    <main>
      <h2>PERFUME</h2>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
        for the House of CHANEL.
      </p>
      <p>
        $149.99 <span>$169.99</span>
      </p>
      <button>Add to Cart</button>
    </main>
  );
}

export default ProductCard;
