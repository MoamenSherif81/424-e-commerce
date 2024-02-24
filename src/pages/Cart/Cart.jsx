import { Fragment } from "react";
import "./Cart.css";
import CartList from "../../components/Cart/CartList/CartList";
import CartFooter from "../../components/Cart/CartFooter/CartFooter";
import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../atoms/cartAtom";

export default function Cart() {
  const [cartData] = useRecoilState($cartAtom);

  let content;
  if (!cartData)
    content = <h2 className="fw-bold text-center my-3">An Error Occured</h2>;
  else if (!cartData.length)
    content = <h2 className="fw-bold text-center my-3">Cart is empty</h2>;
  else {
    content = (
      <Fragment>
        <CartHeader />
        <CartList />
        <CartFooter />
      </Fragment>
    );
  }

  return <div className="cart-cont container mt-5">{content}</div>;
}
