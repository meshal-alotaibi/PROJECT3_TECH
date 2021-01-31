import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getAllProducts, getAllUsers } from "../api";
import Cover from "./product/cover";
import PowerBanks from "./product/powerBank";
import Cables from "./product/cable";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Search from "./components/Search";
<<<<<<< HEAD
=======

import AddProd from "./components/AddProd";

>>>>>>> 5ef5df97e29482a2cb53d1463faa4d1e644e3569

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
<<<<<<< HEAD
      searchValue: ""
=======

      searchValue: "",

      covers:[],
      powerbanks:[],
      cables:[]

>>>>>>> 5ef5df97e29482a2cb53d1463faa4d1e644e3569
    };

    this.handleChange = this.handleChange.bind(this);

  }

  funcSetProducts = (newProd) => {
    this.setState({ products: newProd });
  };

<<<<<<< HEAD
=======

>>>>>>> 5ef5df97e29482a2cb53d1463faa4d1e644e3569
  //search meshal
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }
  
<<<<<<< HEAD
=======
  funcSetCvr = (newCvr) => {
    this.setState({ covers: newCvr });
  };

  funcSetPowerBank = (newPwr) => {
    this.setState({ powerbanks: newPwr });
  };

  funcSetCable = (newCbl) => {
    this.setState({ cables: newCbl });
  };

>>>>>>> 5ef5df97e29482a2cb53d1463faa4d1e644e3569

  render() {
    console.log(this.state.products);

    return (
      <Router>
        <div className="">
          <div>
            <Navbar bg="light" variant="light" sticky="top">
              <Navbar.Brand href="#home">TECH</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="mr-5" as={Link} to="/allproducts">
                  All Products
                </Nav.Link>
                <Nav.Link className="ml-3" as={Link} to="/powerbanks">
                  Power Banks
                </Nav.Link>
                <Nav.Link as={Link} to="/covers">
                  Covers
                </Nav.Link>
                <Nav.Link as={Link} to="/cables">
                  Cables
                </Nav.Link>
<<<<<<< HEAD
                {/* ######################## profile ##################### */}
=======

                {/* ######################## profile ##################### */}

>>>>>>> 5ef5df97e29482a2cb53d1463faa4d1e644e3569
                <Nav.Link as={Link} to="/profile">
                  My Account
                </Nav.Link>
                <Nav.Link as={Link} to="/addprod">
                  ADD PROD
                </Nav.Link>
              </Nav>

              <Form inline>
              
                <FormControl
                  type="text"
                  placeholder="search"
                  className="mr-sm-2"
                  value={this.state.searchValue}
                    onChange={this.handleChange}
                />
               <Link to="Search">
                <Button variant="outline-primary" className="mr-2" onChange={this.handleChange} >
                  Search
                </Button>
                </Link>

                <Link to="/login">
                  <Button variant="outline-primary" onClick="">
                    Sing in
                  </Button>
                </Link>
              </Form>
            </Navbar>
            <Switch>
              <div className="container">
                <Route exact path="/" render={() => <HomePage />}></Route>

                <Route
                  path="/allproducts"
                  render={() => (
                    <Products
                      prods={this.state.products}
                      setProducts={this.funcSetProducts}
                    />
                  )}
                ></Route>

<<<<<<< HEAD
                <Route
                  exact
                  path="/covers"
                  render={(props) => (
                    <Cover {...props} covers={this.state.products} />
                  )}
                />

                <Route
                  exact
                  path="/powerbanks"
                  render={(props) => (
                    <PowerBanks {...props} powerBanks={this.state.products} />
                  )}
                />
                <Route
                  exact
                  path="/cables"
                  render={(props) => (
                    <Cables {...props} cables={this.state.products} />
                  )}
                />
                {/* ######################## profile ##################### */}
                <Route exact path="/profile" component={Profile} />

                <Route path="/search" render={(props) => <Search {...props} search={this.state.products}/>}></Route>

                <Route path="/login" component={() => <Login />}></Route>
                {/* <Route path="/Search" component={() => <Search />}></Route> */}
=======
               

                <Route path="/search" render={(props) => <Search {...props} search={this.state.products}/>}></Route>

                
                {/* <Route path="/Search" component={() => <Search />}></Route> */}

              <Route
                exact
                path="/covers"
                render={(props) => (
                  <Cover {...props} covers={this.state.covers} setCvr={this.funcSetCvr} />
                )}
              />

              <Route
                exact
                path="/powerbanks"
                render={(props) => (
                  <PowerBanks {...props} powerBanks={this.state.powerbanks} setPowerbank={this.funcSetPowerBank}/>
                )}
              />
              <Route
                exact
                path="/cables"
                render={(props) => (
                  <Cables {...props} cables={this.state.cables} setCables={this.funcSetCable} />
                )}
              />
              {/* ######################## profile ##################### */}
               <Route
                exact
                path="/profile"
                component={Profile}
              />
              <Route path="/login" component={() => <Login />}></Route>

              <Route
                exact
                path="/addprod"
                render={() => (
                  <AddProd />
                )}
              />

>>>>>>> 5ef5df97e29482a2cb53d1463faa4d1e644e3569
              </div>
            </Switch>
            {/* /////////////MASTER */}
          </div>
        </div>
      </Router>
    );
  }
}
