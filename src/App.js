import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import { BrowserRouter } from "react-router-dom";
import ViewProduct from "./components/ViewProduct";
import Checkout from "./components/Checkout";

function App() {
  const cart = useSelector((state) => state.getReducer.cartList);
  return (
    <Router>
      <div className="App">
        <h1>Welcome to E-Commerce</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="nav-link">
                Cart <span style={{ color: "red" }}>({cart?.length})</span>
              </Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/cart" component={Cart} exact />
          <Route path="/viewProduct" component={ViewProduct} exact />
          <Route path="/checkout" component={Checkout} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
