import React from 'react';
import styles from './Footer/Footer.module.css';

const ClientsCounter = ({ clients }) => (
    <div className={styles.counter}>
        <p className={styles.amount}>{clients}</p>
        <span className={styles.desc}>Пользователя</span>
    </div>
);
export default ClientsCounter;