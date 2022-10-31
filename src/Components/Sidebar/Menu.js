import {Icon} from "../../Icons";
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul className="flex flex-col">
                <li>
                    <NavLink activeClassName="bg-active text-white" to={"/"} className="h-10 gap-x-4 flex items-center
                    text-sm font-semibold text-whitehover:text-white rounded  px-4"
                       href="#">
                    <span>
                        <Icon name="home"/>
                    </span> Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="bg-active text-white" to={"/search"} className="h-10 gap-x-4
                     flex items-center text-sm font-semibold text-link hover:text-white  rounded px-4"
                       href="#">
                        <span>
                        <Icon name="search"/>
                    </span>Ara</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="bg-active text-white" to={"/collection"} className="h-10 gap-x-4 flex
                    items-center text-sm font-semibold text-link hover:text-white rounded  px-4"
                       href="#">
                         <span>
                        <Icon name="collection"/>
                    </span> Kitaplığın</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu