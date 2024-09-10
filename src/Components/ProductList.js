import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { useEffect } from "react";
// import { setProducts } from "../Redux/Actions/Action";
import { FetchingProducts } from "../Redux/Actions/Action";
import { Link } from "react-router-dom";
import "../Components/ProductList.css";
function ProductList() {
  const products = useSelector((state) => state.allProducts.products || []);
  const dispatch = useDispatch();

  // const FetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     // .get("https://api.escuelajs.co/api/v1/products")
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // FetchProducts();
    dispatch(FetchingProducts())
  }, []);
  console.log("###Products", products);
  return (
    <div className="container1">
      <div className="card-container row">
        <h1
          style={{
            backgroundColor: "black",
            // backdropFilter:"blur(30px)",
            color: "white",
            padding: "20px",
            width: "96%",
            marginLeft: "30px",
            fontFamily: "Copperplate, Papyrus, fantasy",
            border: "10px solid maroon",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          P r o d u c t L i s t
        </h1>

        {products.map((items, index) => {
          return (
            <div className="col-md-3" key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/product/${items.id}`}
              >
                <div
                  className="card m-2 "
                  style={{ width: "auto", border: "4px solid white" }}
                >
                  <img
                    style={{ height: "400px" }}
                    src={items.image}
                    className="card-img-top  p-5 "
                    alt="title"
                  />
                  <div className="card-body">
                    {/* <h5 className="card-title">{items.id}</h5> */}
                    <div>
                      <h5 className="card-title title">{items.title}</h5>
                    </div>
                    <h6 className="card-title">Price: $ {items.price}</h6>
                    <h6 className="card-title">Rating:{items.rating.rate}</h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
