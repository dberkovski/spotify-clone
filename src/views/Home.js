import Section from "../Components/Section";
import sweather from '../sounds/The_Neighbourhood_Sweater_Weather.mp3'
import hate from '../sounds/Three_Days_Grace_I_Hate_Everything_About_You.mp3'
import zukunft from '../sounds/AnnenMayKantereit_Zukunft.mp3'
import remind from '../sounds/Nickelback_How_You_Remind_Me.mp3'
import sefo from '../sounds/Sefo_yarım_kalır.mp3'

function Home() {
    const items = [
        {
            id: 1,
            title: 'The Neigbourhood - Sweather Weather',
            description: "2017 - New Old ",
            image: "https://i.scdn.co/image/ab67616d00001e028265a736a1eb838ad5a0b921",
            type:"album",
            src: sweather
        },
        {
            id: 2,
            title: 'I Hate Everything About You - Three Days Grace',
            description: "2004 Old School Rock",
            image: "https://i.scdn.co/image/ab67616d00001e02d3f7fc260cd67d23844ce2c0",
            type:"album",
            src:hate,
        },
        {
            id: 3,
            title: "AnnenMayKantereit - Zukunft",
            description: "2021 - Zukunft",
            image: "https://i.scdn.co/image/ab67616d00001e026752c6f800152f09680da0eb",
            type:"artist",
            src:zukunft
        },
        {
            id: 4,
            title: 'Nickelback - How You Remind Me',
            description: "Alternative Rock",
            image: "https://i.scdn.co/image/ab67616d00001e02699a422d25adc550dc5aa11c",
            type:"podcast",
            src:remind
        } ,
        {
            id: 5,
            title: 'Sefo - Yarım Kalır',
            description: "2022 Single",
            image: "https://i.scdn.co/image/ab67616d00001e0258afda8ab8f24d78754f0351",
            type:"Single",
            src:sefo
        }
    ]
    return (
        <div className="grid gap-y-6">
            <Section title="Recently Played"
                     more="/linkk"
                     items={items}/>
            <Section title="Shos to Try"
                     more="/linkk"
                     items={items}/>
               <Section title="Shos to Try"
                     more="/linkk"
                     items={items}/>
        </div>
    )
}

export default Home