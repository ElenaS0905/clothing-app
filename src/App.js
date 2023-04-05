import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routs/navigation/nav-bar";
import Home from "./components/routs/home/home";
import Authentication from "./components/routs/authentication/authentication";
import Shop from "./components/routs/shop/shop";
import Checkout from "./components/routs/checkout/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
