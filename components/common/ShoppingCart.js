import React from "react";
import Link from "next/link";
import { BagFill } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";

const ShoppingCart = ({ cart }) => {
  return (
    <>
      <Link href="/cart">
        <div className="fixed-cart">
          <div style={{ fontSize: "1.2rem" }}>
            <BagFill
              style={{ fontSize: "2rem" }}
              className="position-relative"
            />
            <Badge
              pill
              className={
                "position-absolute" +
                (cart ? (cart.total_items !== 0 ? "" : " d-none") : " d-none")
              }
              style={{ top: 5, right: 5 }}
              variant="danger"
            >
              {cart ? cart.total_items : ""}
            </Badge>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShoppingCart;
