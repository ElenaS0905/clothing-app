import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routs/navigation/nav-bar";
import Home from "./components/routs/home/home.component";
import Authentication from "./components/routs/authentication/authentication";

const Shop = () => {
  return <h1>hello i am the shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
