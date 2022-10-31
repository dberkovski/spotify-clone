import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar"
import BottomBar from "./Components/Bottombar"
import Content from "./Components/Content";
import Bottombar from "./Components/Bottombar";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar/>
                <Content/>
            </div>
            <Bottombar/>
        </Router>
    );
}

export default App;
