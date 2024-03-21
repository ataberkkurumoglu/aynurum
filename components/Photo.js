import React from 'react';
import styles from '../styles/Layout.module.css';

const Photo = ({ src, alt }) => (
  <div className={styles.photo}>
    <img src={src} alt={alt} />
  </div>
);


export default Photo;
