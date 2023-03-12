import {Routes, Route} from "react-router-dom";
import Navigation from "./components/routs/navigation/nav-bar";
import Home from "./components/routs/home/home.component";
import SignIn from "./components/routs/sign-in/sign-in-component";

const Shop = () =>{
    return (
        <h1>hello i am the shop</h1>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop/>}/>
                <Route path='sign-in' element={<SignIn/>}/>
            </Route>
        </Routes>
    );
};

export default App;
