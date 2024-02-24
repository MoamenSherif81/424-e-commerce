import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";

export default function RemoveBtn({id}) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function removeProduct() {
    setCartData(cartData.filter(product => product.id !== id));
  }

  return <span className="remove-product" onClick={removeProduct}> Remove </span>;
}
