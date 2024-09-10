import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Actions/CartAction";
import "../Components/cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartProduct);
  console.log("#### CartProduct", cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <h5>your cart is empty</h5>
        ) : (
          <div className="cart-grid">
            {cartItems.map((items, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <img
                    style={{ height: "300px", width: "300px" }}
                    src={items.image}
                    className="card-img-top  p-5 "
                    alt="title"
                  />
                </div>
                <div className="cart-item-details">
                  <div className="card-title">
                    <h5>{items.id}</h5>
                  </div>
                  <div>
                    <h5 className="card-title title">{items.title}</h5>
                  </div>
                  <div className="card-title">
                    {" "}
                    <h6>Price: $ {items.price}</h6>
                  </div>
                </div>
                <div>
                  <button
                    className="cart-item-actions"
                    style={{ margin: "10px" }}
                    onClick={() => handleRemoveFromCart(items.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
                <div>
                  <button className="cart-item-actions">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
