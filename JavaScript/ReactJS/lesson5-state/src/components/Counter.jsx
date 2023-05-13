import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    // this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      count: 1,
      price:315,

    };
  }

  increment=()=> {
    this.setState({ count: this.state.count + 1 });
  }

  decrement(){
    // if (this.state.count>1) {
    //   this.setState({count:this.state.count-1})
    // }
      this.setState({count:this.state.count-1})
  }

  render() {
    return (
      <div className="container my-5">
        <h5>Quantity</h5>
        <p>XiaomiMi Wifi Pro Sinyal Güçlendirici 300Mbps <span className="text-danger">{this.state.price * this.state.count}</span> TL</p>
        <button className={`btn btn-danger ${this.state.count>1?"":"disabled"}`}   onClick={this.decrement}>-</button>
        <span className="mx-3">{this.state.count}</span>
        <button className="btn btn-success" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
