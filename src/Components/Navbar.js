import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import {Route, Routes, useMatch} from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import Collection from "../views/collection";

function Navbar() {
    const isRoute = useMatch('/search')
    return (
        <nav className="h-[3.75rem] flex items-center justify-between">
            <Navigation/>
            {isRoute && (
                <div>Searchdeisn kank</div>
            )}
            {/*<Routes>*/}
            {/*    <Route exact="" path="/" element={<Home/>}/>*/}
            {/*    <Route path="/search" element={<Search/>}/>*/}
            {/*    <Route path="/collection" element={<Collection/>}/>*/}
            {/*</Routes>*/}
            <Auth/>
        </nav>
    )
}

export default Navbar;