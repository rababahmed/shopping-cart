import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/shopping-cart/" component={App} />
          <Route exact path="/shopping-cart/home" component={Home} />
          <Route exact path="/shopping-cart/shop" component={Shop} />
          <Route exact path="/shopping-cart/shop/product" component={Product} />
          <Route exact path="/shopping-cart/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
