import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Footer/Footer.module.css';

const Links = ({ allLinks }) => (
    <div className={styles.links}>
        <h3>Полезные ссылки</h3>
        <ul>
            {allLinks.map(link => (
                <li key={link.id}>{link.name}</li>
            ))}
        </ul>
    </div>
);
export default Links;