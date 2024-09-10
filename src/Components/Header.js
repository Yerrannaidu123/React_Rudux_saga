import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchProducts = (e) => {
    e.preventDefault();
    console.log("searchQuery: ", searchQuery);
    setSearchParams({ filter: searchQuery });
    navigate(`/search?filter=${searchQuery}`);
  };
  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, [setSearchQuery]);

  useEffect(() => {
    // Reset the searchQuery state when the location changes
    if (location.pathname !== `/search?filter=${searchQuery}`) {
      setSearchQuery("");
    }
  }, [location.pathname, setSearchQuery]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-4">
        <div className="container-fluid">
          <Link
            style={{ fontWeight: "bold" }}
            className="navbar-brand"
            to="/login"
          >
            Login
          </Link>
          <Link
            style={{ fontWeight: "bold" }}
            className="navbar-brand"
            to="/postData"
          >
            postData
          </Link>
          <Link style={{ fontWeight: "bold" }} className="navbar-brand" to="/">
            MyShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  <CartIcon />
                </Link>
              </li>
            </ul>
            <form onSubmit={searchProducts} className="d-flex" role="search">
              <input
                className="form-control me-2"
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                value={searchQuery}
                placeholder="Search"
                aria-label="Search"
              />
              <button
                // onClick={searchProducts}
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* {searchParams.get("filter") ? showData() : ""} */}
    </div>
  );
}

export default Header;
