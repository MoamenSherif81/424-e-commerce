import React from "react";
import { $cartAtom } from "../../../../atoms/cartAtom";
import { useRecoilState } from "recoil";

export default function DecrementBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function decreaseQuantity() {
    let obj = cartData.find((product) => product.id === id);
    if(obj.quantity === 1) return;
    const newObj = { ...obj, quantity: obj.quantity - 1 };
    const newCartData = [...cartData];
    newCartData.splice(newCartData.indexOf(obj), 1, newObj);
    setCartData(newCartData);
  }
  
  return (
    <span
      className="change-amount change-amount-dec"
      onClick={decreaseQuantity}
    >
      -
    </span>
  );
}
