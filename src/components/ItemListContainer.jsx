import React from 'react';

const ItemListContainer = ({greetings}) => {
    const colorGreetings = {
        color: '#13101C',
    }
    return (
        <div>
            <p style={colorGreetings} >{greetings}</p>
        </div>
    );
};

export default ItemListContainer;