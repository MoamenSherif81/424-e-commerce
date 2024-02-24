import React from "react";
import IncrementBtn from "./components/IncrementBtn";
import DecrementBtn from "./components/DecrementBtn";
import RemoveBtn from "./components/RemoveBtn";

export default function CartItem({ product }) {
  return (
    <tr className="cart-product">
      <td>
        <div className="d-flex gap-3 align-items-center">
          <img className="cart-product-img" src={product.thumbnail} alt="" />
          <h5>{product.title}</h5>
        </div>
      </td>

      <td>
        <div className="cart-product-amount">
          <IncrementBtn id={product.id}/>
          <span className="quantity">{product.quantity}</span>
          <DecrementBtn id={product.id}/>
        </div>
      </td>

      <td>
        <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-end">
          <span className="fw-bolder fs-4">${product.price}</span>
          <RemoveBtn id={product.id}/>
        </div>
      </td>
    </tr>
  );
}
