import React, { Component } from 'react';
import styles from './Footer/Footer.module.css';
export default class Subscribe extends Component {
    state = {
        email: '',
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.reset();
    };
    render() {
        const { email } = this.state;
        return (
            <div>
                <h3 className={styles.title}>Подписаться на рассылку</h3>

                <form>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Ваш Е-mail"
                        onChange={this.handleInputChange}
                        className={styles.input}
                    />
                    <input type="submit" title=" " value=" " className={styles.button} />
                </form>
            </div>
        )
    }
}