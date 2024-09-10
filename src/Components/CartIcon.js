import React from "react";
import { useSelector } from "react-redux";

function CartIcon() {
  const cartItems = useSelector((state) => state.cart.cartProduct);
  return (
    <div>
      <span className="material-symbols-outlined">shopping_bag</span>
      <span>{cartItems.length}</span>
    </div>
  );
}

export default CartIcon;
