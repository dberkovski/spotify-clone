import {Routes, Router, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Search from "../views/Search";
import Collection from "../views/collection";

function Content() {

    return <main className="flex-auto overflow-auto">
        <Navbar/>
        <div className="px-8 py-4">
            <Routes>
                <Route exact="" path="/" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/collection" element={<Collection/>}/>
            </Routes>
        </div>
    </main>
}

export default Content;
