import React, { Component } from "react";

class BookApp extends Component {
  constructor() {
    super();
    this.state = {
      photo:
        "https://static.insales-cdn.com/images/products/1/5233/197112945/psix_01.jpg",
      title: "Pisixiatr",
      auther: "Vulf Dorn",
      price: 10,
      category: "Qorxu",
      pageCount: 427,
    };
  }

  nextBook = () => {
    this.setState({
      photo:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781627931410/the-anti-christ-9781627931410_hr.jpg",
      title: "The Antichrist",
      auther: "Fridrix Nitsşenin ",
      price: 15,
      category: "Felsefi",
      pageCount: 200,
    });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={this.state.photo}
            className="card-img-top"
            alt={this.state.title}
          />
          <div className="card-body">
            <h5 className="card-title">Title: {this.state.title}</h5>
            <p className="card-text">Auther:{this.state.auther}</p>
            <p className="card-text">Price: {this.state.price}AZN</p>
            <p className="card-text">Category: {this.state.category}</p>
            <p className="card-text">Page count: {this.state.pageCount}</p>
            <button className="btn btn-primary" onClick={this.nextBook}>
              Next Book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookApp;
