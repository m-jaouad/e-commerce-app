import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./app.css";
import UserList from "./pages/userList/UserList";
import ProductList from "./components/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/newProduct";

const routes = (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/users" exact>
      <UserList />
    </Route>
    <Route path="/users/user/:id">
      <User />
    </Route>
    <Route path="/users/newUser">
      <NewUser />
    </Route>
    <Route path="/products" exact>
      <ProductList />
    </Route>
    <Route path="/products/newProduct">
      <NewProduct />
    </Route>
    <Route path="/products/:id">
      <Product />
    </Route>
  </Switch>
);

const App = (props) => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        {routes}
      </div>
    </Router>
  );
};

export default App;
