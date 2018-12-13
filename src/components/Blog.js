import React from 'react';
// import { Link } from 'react-router-dom';

const Blog = ({ blogArticles }) => (
    <div>
        <h3>Блог</h3>
        <ul>
            {blogArticles.map(article => (
                <li key={article.id}><p>{article.body}</p>
                    <p>{article.date}</p></li>
            ))}
        </ul>
    </div>
);
export default Blog;