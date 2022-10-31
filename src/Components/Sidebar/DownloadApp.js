import {useState} from "react";
import {Icon} from "../../Icons";

function DownloadApp() {
    return (
        <a href="#" className="h-10 px-6 flex flex-shrink-0 font-semibold text-link text-sm hover:text-white items-center gap-x-4 ">
            <Icon name="download" size={20}/>Uygulmayı Yükle
        </a>
    )
}

export default DownloadApp