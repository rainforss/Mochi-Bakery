import React from "react";
import Link from "next/link";
import { BagFill } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import Cookies from "js-cookie";
import useSWR from "swr";
import useCart from "../../hooks/useCart";

const ShoppingCart = () => {
  const currentCartId = Cookies.get("commercejs_cart_id");
  console.log(currentCartId);
  let cart = useCart(currentCartId);
  console.log(cart);

  return (
    <Link href="/cart">
      <div className="fixed-cart">
        <BagFill />
        <Badge variant="danger">{cart.total_items}</Badge>
      </div>
    </Link>
  );
};

export default ShoppingCart;
