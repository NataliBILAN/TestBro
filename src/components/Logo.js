import React from "react";
// import { Link } from 'react-router-dom';
import styles from './Footer/Footer.module.css';

const Logo = ({ image }) => (
  <div className={styles.logo_wrap}>
    <a href="#" className={styles.logo_link}><img src={image} alt="TestBro logo" className={styles.logo_img} /></a>

  </div>
);
export default Logo;
