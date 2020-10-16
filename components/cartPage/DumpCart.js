import React from "react";
import { TrashFill } from "react-bootstrap-icons";
const DumpCart = ({ emptyCart, shown }) => {
  return (
    <div
      className={"empty-cart" + (shown ? "" : " d-none")}
      onClick={emptyCart}
    >
      <div style={{ fontSize: "1.2rem" }}>
        <TrashFill style={{ fontSize: "2rem" }} className="position-relative" />
      </div>
    </div>
  );
};

export default DumpCart;
