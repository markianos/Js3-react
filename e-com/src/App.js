import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/navigation/Navbar";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import Products from "./views/Products";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />   
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
