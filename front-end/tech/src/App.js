import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { getAllProducts, getAllUsers } from "../api";

import Cover from "./product/cover";
import PowerBanks from "./product/powerBank";
import Cables from "./product/cable";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  funcSetProducts = (newProd) => {
    this.setState({ products: newProd });
  };



  render() {
    console.log(this.state.products);

    return (
      <Router>
        <div className="App">
          <nav class="navbar">
            <Link to="/cover">
              <button class="ButtonStyleSec"> covers </button>{" "}
            </Link>
            <Link to="/powerBank">
              <button class="ButtonStyleSec"> power Banks</button>
            </Link>
            <Link to="/cable">
              <button class="ButtonStyleSec"> Cables </button>{" "}
            </Link>
          </nav>

          <Route
            exact
            path="/cover"
            render={(props) => (
              <Cover {...props} covers={this.state.products} />
            )}
          />

          <Route exact path="/powerBank"  render={(props) => (
              <PowerBanks {...props} powerBanks={this.state.products} />
            )}/>
          <Route exact path="/cable" render={(props) => (
              <Cables {...props} cables={this.state.products} />
            )}/>

          <h1>WELCOME</h1>
          <Products
            prods={this.state.products}
            setProducts={this.funcSetProducts}
          />
        </div>
      </Router>
    );
  }
}
