import React from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../../atoms/cartAtom";

export default function AddToCartBtn({ product }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function addToCart() {
    setCartData([...cartData, { ...product, quantity: 1 }]);
  }

  return (
    <Button onClick={addToCart} variant="primary" className="w-100">
      Add to cart
    </Button>
  );
}
