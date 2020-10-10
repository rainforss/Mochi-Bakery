import React from 'react';
import Link from 'next/link'
import {BagFill} from 'react-bootstrap-icons'
import { Badge } from 'react-bootstrap';

const ShoppingCart = ({cart}) => {
    return (
        <Link href="/cart"><div className="fixed-cart">
        <BagFill/><div></div>
    </div></Link>
        
    );
};

export default ShoppingCart;