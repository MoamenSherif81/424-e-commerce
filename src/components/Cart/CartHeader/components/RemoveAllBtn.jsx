import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";

export default function RemoveAllBtn() {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function removeAllProducts(){
    setCartData([]);
  }

  return <span className="remove-all-products" onClick={removeAllProducts}>Remove All</span>;
}
