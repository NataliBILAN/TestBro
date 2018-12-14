import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Footer/Footer.module.css';

const Links = ({ allLinks }) => (
    <div className={styles.links}>
        <h3 className={styles.title}>Полезные ссылки</h3>
        <ul className={styles.list}>
            {allLinks.map(link => (
                <li key={link.id}>
                    <a href="#" className={styles.list_link}>{link.name}</a></li>
            ))}
        </ul>
    </div>
);
export default Links;