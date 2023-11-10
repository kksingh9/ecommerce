import React from "react";
import Login from "./components/Authentication/Login";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "./store/actionCreator";
import { sendCartData } from "./store/actionCreator";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./components/Authentication/SignUp";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartItem.changed) {
      dispatch(sendCartData(cartItem));
    }
  }, [cartItem, dispatch]);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
