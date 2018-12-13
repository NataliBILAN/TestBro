import React from 'react';

const ClientsCounter = ({ clients }) => (
    <div>
        <p>{clients}</p>
        <span>Пользователя</span>
    </div>
);
export default ClientsCounter;