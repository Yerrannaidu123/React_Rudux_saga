import React from "react";
import { useSearchParams } from "react-router-dom";
import carousal from "../Img/carousal-2.webp";
import image2 from "../Img/carousel-3.webp";

const SearchData = () => {
  const [searchParams] = useSearchParams();

  //   // Make a POST request to the login API
  //   axios.post("https://reqres.in/api/login", userData).then((response) => {
  //     // Log the response status and token if the request is successful
  //     console.log(response.status, response.data.token);
  //   });
  // };

  const showData = () => {
    const filter = searchParams.get("filter");
    console.log("Filter Value:", filter);
    if (filter === "mens") {
      return (
        <div>
          {/* <h2>Men's Clothing</h2>
          <img
            style={{ width: "100%", height: "250px" }}
            src="https://layout.naptol.com/usr/local/csp/staticContent/naaptolAds/Mens-collection-01.jpg"
            alt="mensCollection"
          /> */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ margin: "10px 20px 0px 20px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carousal} className="d-block w-100" alt="pic1" />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="pic2" />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );
    } else {
      return <h3>No data found</h3>;
    }
  };

  return <div>{showData()}</div>;
};

export default SearchData;
