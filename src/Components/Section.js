import {NavLink} from "react-router-dom";
import {Icon} from "../Icons";
import SongItem from "./Sidebar/SongItem";
function Section({title, more = false, items}) {
    return (
        <section>
            <header className="flex justify-between mb-4">
                    <h3 className="text-2xl text-white font-semibold tracking-wider hover:underline">{title}</h3>
                    {more && (
                        <NavLink className={"text-xs hover:underline font-semibold uppercase text-link tracking-wider"}
                                 to={more} >See All</NavLink>
                    )}
            </header>
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => <SongItem item = {item} key={item.id} />

               )}
            </div>
        </section>
    )
}

export default Section