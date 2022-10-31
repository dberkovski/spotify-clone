import logo from "../img/logo.svg"
import Menu from "./Sidebar/Menu";
import {Icon} from "../Icons";
import Playlists from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";
import {useSelector} from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

function Sidebar() {

    const sidebar = useSelector(state => state.player.sidebar)

    return <asdide className="w-60 pt-6 flex flex-col bg-black flex-shrink-0">
        <a className="mb-7 px-6">
            <img src={logo} className="h-10"/>
        </a>

        <Menu/>
        <nav className="mt-6">
            <ul>
                <li>
                    <a href='#'
                       className="px-6 py-2  items-center group flex text-sm text-link font-semibold hover:text-white">
                        <span
                            className="w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100
                             bg-opacity-80 rounded-sm text-black">
                        <Icon name="plus" size={12}/>
                        </span>Çalma Listesi Oluştur
                    </a>
                </li>
                <li>
                    <a href='#'
                       className="px-6 py-2 flex  items-center text-sm text-link font-semibold hover:text-white">
                        <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br rounded-sm
                        from-purple-700 to-blue-400 group-hover:bg-opacity-70">
                        <Icon name="heart" size={12}/>
                        </span>Beğenilen Şarkılar
                    </a>
                </li>
            </ul>
        </nav>
      <Playlists/>
        <DownloadApp/>

        {sidebar && <SidebarCover/>}

    </asdide>
}

export default Sidebar