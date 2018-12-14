import React from 'react';
import styles from './Footer/Footer.module.css';

const UserCounter = ({ users }) => (
    <div className={styles.counter}>
        <p className={styles.amount}>{users}</p>
        <span className={styles.desc}>Пользователя</span>
    </div>
);
export default UserCounter;