import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Footer/Footer.module.css';

const Blog = ({ blogArticles }) => (
    <div className={styles.blog}>
        <h3 className={styles.title}>Блог</h3>
        <ul className={styles.list} >
            {blogArticles.map(article => (
                <li key={article.id} className={styles.list_item}><a href="#" className={styles.article}> {article.body}</a>
                    <p className={styles.article_date}>{article.date}</p></li>
            ))}
        </ul>
    </div>
);
export default Blog;