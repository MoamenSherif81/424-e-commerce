import { atom } from "recoil";

export const $cartAtom = atom({
  key: "cart-data",
  default: []
});
