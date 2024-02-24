import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../atoms/cartAtom";
import CartItem from "../CartItem/CartItem";

export default function CartList() {
  const [cartData] = useRecoilState($cartAtom);

  return (
    <table className="cart w-100">
      <tbody>
        {cartData.map((product) => {
          return <CartItem product={product} />;
        })}
      </tbody>
    </table>
  );
}
