import React, { Component } from 'react';
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
                <h3>Подписаться на рассылку</h3>

                <form>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Ваш Е-mail"
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}