// components/NewProduct.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../Redux/Actions/Action";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id:  // Simple ID generation
      title,
      price: parseFloat(price),
      rating: { rate: 5 }, // Default rating for simplicity
      image,
    };

    dispatch(addNewProduct(newProduct));

    // Clear input fields after submission
    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProduct;
