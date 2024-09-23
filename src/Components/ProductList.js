// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import axios from "axios";
// //import NewProduct from "./NewProduct";
// // import { setProducts } from "../Redux/Actions/Action";
// import { useEffect } from "react";
// import { FetchingProducts } from "../Redux/Actions/Action";
// import { Link } from "react-router-dom";
// import "../Components/ProductList.css";
// function ProductList() {
//   const products = useSelector((state) => state.allProducts.products || []);
//   const dispatch = useDispatch();

//   // const FetchProducts = async () => {
//   //   const response = await axios
//   //     .get("https://fakestoreapi.com/products")
//   //     // .get("https://api.escuelajs.co/api/v1/products")
//   //     .catch((err) => {
//   //       console.log("error", err);
//   //     });
//   //   dispatch(setProducts(response.data));
//   // };

//   useEffect(() => {
//     // FetchProducts();
//     dispatch(FetchingProducts());
//   }, []);

//   return (
//     <div className="container1">
//       {/* <NewProduct/> */}
//       <div className="card-container row">
//         <h1 id="heading"
//           style={{
//             backgroundColor: "black",
//             // backdropFilter:"blur(30px)",
//             color: "white",
//             padding: "20px",
//             width: "96%",
//             marginLeft: "30px",
//             fontFamily: "Copperplate, Papyrus, fantasy",
//             border: "10px solid maroon",
//             borderRadius: "10px",
//             marginTop: "20px",
//           }}
//         >
//           P r o d u c t L i s t
//         </h1>

//         {products.map((items, index) => {
//           return (
//             <div className="col-md-3" key={index}>
//               <Link
//                 style={{ textDecoration: "none" }}
//                 to={`/product/${items.id}`}
//               >
//                 <div
//                   className="card m-2 "
//                   style={{ width: "auto", border: "4px solid white" }}
//                 >
//                   <img
//                     style={{ height: "400px" }}
//                     src={items.image}
//                     className="card-img-top  p-5 "
//                     alt="title"
//                   />
//                   <div className="card-body">
//                     {/* <h5 className="card-title">{items.id}</h5> */}
//                     <div>
//                       <h5 className="card-title title">{items.title}</h5>
//                     </div>
//                     <h6 className="card-title">Price: $ {items.price}</h6>
//                     <h6 className="card-title">Rating:{items.rating.rate}</h6>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ProductList;

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchingProducts } from "../Redux/Actions/Action";
import { Link } from "react-router-dom";
import "../Components/ProductList.css";

function ProductList() {
  const products = useSelector((state) => state.allProducts.products || []);
  const dispatch = useDispatch();

  const parentRef = useRef(null); // Ref for the parent container

  // Fetch products on mount
  useEffect(() => {
    dispatch(FetchingProducts());
  }, [dispatch]);

  // Observe changes in the parent container
  useEffect(() => {
    if (parentRef.current) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          console.log("Mutation observed:", mutation);

          // Change class of existing children based on mutation
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                node.classList.add("new"); // Add 'new' class
              }
            });
          }
        });
      });

      observer.observe(parentRef.current, { childList: true, subtree: true });

      return () => observer.disconnect(); // Clean up observer on unmount
    }
  }, [parentRef]);

  return (
    <div ref={parentRef} className="parent">
      <div className="row">
        <h1
          id="heading"
          style={{
            backgroundColor: "black",
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

        {/* Render products */}
        {products.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div>
              <Link
                style={{ textDecoration: "none" }}
                to={`/product/${item.id}`}
              >
                <div
                  className="card  m-2"
                  style={{ width: "auto", border: "4px solid white" }}
                >
                  <img
                    id="image"
                    style={{ height: "400px" }}
                    src={item.image}
                    className="card-img-top  p-5 "
                    alt="title"
                  />
                  <div className="card-body">
                    <h5 className="card-title title">{item.title}</h5>
                    <h6 className="card-title">Price: $ {item.price}</h6>
                    <h6 className="card-title">Rating: {item.rating.rate}</h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProductList;
