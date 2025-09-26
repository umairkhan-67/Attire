import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css";

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter(product => product.category === category);
    }

    if (search !== "") {
      result = result.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (price === "1-50") {
      result = result.filter(product => product.price >= 1 && product.price <= 50);
    } else if (price === "51-100") {
      result = result.filter(product => product.price >= 51 && product.price <= 100);
    } else if (price === "100+") {
      result = result.filter(product => product.price >= 101);
    }

    setFilteredProducts(result);
  }, [category, search, price]);

  return (
    <>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: '70vh', width: '100%' }}
              src="./images/ecomer.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: '70vh', width: '100%' }}
              src="./images/dp.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Section */}
      <div className='body'>
        <div className="container">
          <h1 className="text-center mt-4 mb-4"><span> O</span> ur cCollections</h1>
          <div className="filters d-flex justify-content-between">
            <div className="btn-container mb-5">
              <button className='btn btn-primary me-3' onClick={() => setCategory("all")}>All</button>
              <button className='btn btn-primary me-3' onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
              <button className='btn btn-primary me-3' onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
              <button className='btn btn-primary me-3' onClick={() => setCategory("electronics")}>Electronics</button>
              <button className='btn btn-primary me-3' onClick={() => setCategory("jewelery")}>Jewelery</button>
            </div>
            
          </div>

          <div className="btn-container mb-5">
            <button className='btn btn-primary me-3' onClick={() => setPrice("all")}>All</button>
            <button className='btn btn-primary me-3' onClick={() => setPrice("1-50")}>$1 - $50</button>
            <button className='btn btn-primary me-3' onClick={() => setPrice("51-100")}>$51 - $100</button>
            <button className='btn btn-primary me-3' onClick={() => setPrice("100+")}>$100+</button>
          </div>

          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-sm-6 col-12 product mb-4">
                <img src={product.image} alt={product.title} className="img-fluid" />
                <p>${product.price}</p>
                <h4>{product.title}</h4>
                <p>{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
