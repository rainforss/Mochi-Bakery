import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const CartItemList = ({cartItems}) => {
    return (
        <Container className="cart-item-list">
            <h2 className="shop-cart-heading">Your shopping cart</h2>
            <ListGroup variant="flush">
                
            </ListGroup>
        </Container>
    );
};

export default CartItemList;