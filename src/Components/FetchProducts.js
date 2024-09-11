// import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailedProduct,
  // selectedProducts,
  removeSelectedProducts,
} from "../Redux/Actions/Action";
import "../Components/FetchProduct.css";
import { addToCart } from "../Redux/Actions/CartAction";
import "../Components/ProductItem.css";

function FetchProduct() {
  const { productId } = useParams(); // useParams should be in curly braces =>>>> {productId}
  const selected = useSelector((state) => state.selectedProducts.product || []);
  const { image, description, price, title } = selected;
  const dispatch = useDispatch();

  // const fetchProductDetail = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => {
  //       console.log("error occured", err);
  //     });
  //   console.log("data = ", response.data);
  //   dispatch(selectedProducts(response.data));
  // };

  const handleAddToCart = () => {
    // Dispatch the addToCart action with the selected product as the payload
    dispatch(addToCart(selected));

    // Get the current cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the selected product is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === selected.id
    );

    // If the selected product is not in the cart, add it to the cart
    if (existingItemIndex === -1) {
      // Creating a new cart item object with the selected product and a default quantity of 1
      const newCartItem = { ...selected, quantity: 1 };

      // Adding the new cart item to the cart
      cartItems.push(newCartItem);

      // Updating the local storage with the new cart items
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  useEffect(() => {
    dispatch(DetailedProduct(productId));
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(selected).length === 0 ? (
        <div>.......Loading</div>
      ) : (
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card m-3" style={{ border: "1px white" }}>
              <div className="card-body " id="image-body">
                <img
                  className="m-3"
                  style={{ height: "400px", width: "300px" }}
                  src={image}
                  alt="photttttp"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex flex-wrap align-content-center">
            <div className="card" style={{ border: "3px solid black" }}>
              <div className="card-body">
                <h5 className="card-title title">{title}</h5>
                <div className="card-title">
                  <h2>$ {price}</h2>
                </div>
                <h6 className="card-text text">{description}</h6>
                <button id="addToCart" onClick={handleAddToCart}>
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchProduct;
