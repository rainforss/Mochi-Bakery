import React from "react";
import Link from "next/link";
import { BagFill } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import useSWR from "swr";
import axios from "axios";

const ShoppingCart = () => {
  const { data, error } = useSWR("https://api.chec.io/v1/carts");
  if (error) return error.message;
  if (!data) return "Loading";
  console.log(data);
  return (
    <Link href="/cart">
      <div className="fixed-cart">
        <BagFill />
        <Badge></Badge>
      </div>
    </Link>
  );
};

export default ShoppingCart;
