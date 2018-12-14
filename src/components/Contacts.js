import React from 'react';
import styles from './Footer/Footer.module.css';
const Contacts = () => (
    <div className={styles.contacts}>
        <a href="mailto:support@testbro.com" className={styles.contacts_mail}>support@testbro.com</a>
        <p className={styles.contacts_detail}>+38 044 455 01 01</p>
        <p className={styles.contacts_detail}>+38 096 455 01 01</p>
        <p className={styles.contacts_detail}>+38 050 455 01 01</p>
    </div>
)
export default Contacts;