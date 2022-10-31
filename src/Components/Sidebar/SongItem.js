import {Icon} from "../../Icons";
import {NavLink} from "react-router-dom";
import {setCurrent} from "../../stores/player";
import {useDispatch, useSelector} from "react-redux";

function SongItem({item}) {
    const dispatch = useDispatch()
    const {current,playing, controls} = useSelector(state =>state.player)
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return "rounded-full"
            case "podcast":
                return "rounded-xl"
            default:
                return "rounded"
        }
    }
    const isCurrentItem  = (current?.id === item.id && playing )
    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            }else {
                controls.play()
            }
        }
        dispatch(setCurrent(item))
    }

    return (
        <NavLink

            className={"bg-footer p-4 rounded hover:bg-active group"}
            to="/"
            key={item.id}>

            <div className="pt-[100%] relative mb-4">
                <img alt="" className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`}
                     src={item.image}/>
                <button onClick={updateCurrent}
                    className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2
                            items-center justify-center  group-hover:flex group-focus:block ${!isCurrentItem ? 'hidden':'flex'}`}>
                    <Icon  size={16} name={isCurrentItem ? 'pause':'play'} />

                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
                {item.description}
            </p>
        </NavLink>
    )
}

export default SongItem