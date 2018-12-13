import React, { Component } from "react";
import logoImg from "../../image/TestBro.png";
import Logo from '../Logo';
import Slogan from '../Slogan';
import Contacts from '../Contacts';
import Links from '../Links';
// import allLinks from '../backend/links.json';
import links from '../../backend/links.json';
import blogArticles from '../../backend/blog.json';
import Blog from '../Blog';
import UserCounter from '../UserCounter';
import ClientsCounter from '../ClientsCounter';
import Subscribe from '../Subscribe';
import styles from './Footer.module.css';

export default class Footer extends Component {
  state = {};

  render() {
    const bgColor = {
      backgroundColor: '#343947',
    }
    return (
      <div style={bgColor} className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.contact_wrap}>
            <Logo image={logoImg} className={styles.logo} />
            <Slogan />
            <Contacts />
          </div>
          <Links allLinks={links} />
          <Blog blogArticles={blogArticles} />
          <div className={styles.subscribe_wrap}>
            <UserCounter users="7653" />
            <ClientsCounter clients="1340" />
            <Subscribe />
          </div>
        </div>
      </div>);
  }
}
