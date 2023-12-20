import React from 'react';
import carrito from '../images/carrito.png'

const CartWidget = () => {
    const cantidadCompra = 1
    const cartStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flexEnd',
        textDecoration: 'none',
        listStyle: 'none',
        underlineText: 'none',
        color: '#13101C',
    }
    const cartimgStyle = {
        width: '15%',
        height: '30%',
        cursor: 'pointer',
    }
    return (
        <div>
            <a style={cartStyle} href=""><p><img style={cartimgStyle} src={carrito} alt="" />({cantidadCompra})</p></a>
        </div>
    );
};

export default CartWidget;