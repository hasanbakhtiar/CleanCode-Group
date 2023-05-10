import React, { Component } from "react";
import SingleCard from "./components/SingleCard";
import products from "./data/products";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">Products</h1>
        <div className="row g-5">
          {products.map((item) => {
            return <SingleCard 
            title={item.title} 
            photo={item.img} 
            price={item.price}
            stock={item.stock}
            />;
          })}
        </div>

   <Footer />
      </div>
    );
  }
}

export default App;
