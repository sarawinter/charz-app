
import Image from '../Assets/char-avatars/01.png';

const character = {
    metadata: {
        id: 'char02'
    },
    image: {
        imageSrc: Image,
        caption: "Something really cool this character said once."
    },
    basicInfo: [
        {
            title: "Full Name",
            id: "basicinfo.fullname",
            type: "text",
            points: 1,
            value: "Emmet J. Johnson"
        },
        {
            title: "Nickname",
            id: "basicinfo.nickname",
            type: "text",
            points: 0,
            value: ""
        },
        {
            title: "Age",
            id: "basicinfo.age",
            type: "text",
            points: 1,
            value: "42"
        },
        {
            title: "Birth Place",
            id: "basicinfo.birthplace",
            type: "text",
            points: 1,
            value: "Stockholm, SWEDEN"
        },
        {
            title: "Current Address",
            id: "basicinfo.currentaddress",
            type: "multiline",
            points: 1,
            value: "Vikingavägen 25C, 258 55 Stockholm, SWEDEN"
        },
        {
            title: "Race",
            id: "basicinfo.race",
            type: "text",
            points: 1,
            value: "Human"
        },
        {
            title: "Languages",
            id: "basicinfo.languages",
            type: "text",
            points: 1,
            value: "Swedish, English, Japanese"
        }
    ],
    short: [
        {
            title: "Short",
            id: "short.short",
            type: "longmultiline",
            points: 3,
            value: `This is a cute little text to get the attention of your reader and so that your remember to make 
            the character as memorable as possible. Don't go crazy though.`
        }
    ],
    history: [
        {
            title: "History",
            id: "history.history",
            type: "longmultiline",
            points: 5,
            value: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
            a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
            consequat lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet 
            mi. Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus 
            tellus aliquet. Suspendisse sit amet est ante.`
        }
    ],
    physicalAppearance: [
        {
            title: "Physical Appearance",
            id: "physicalappearance.description",
            type: "longmultiline",
            points: 3,
            value: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
            a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
            consequat lorem pellentesque ex pulvinar auctor.`
        },
        {
            title: "Eye Colour",
            id: "physicalappearance.eyecolour",
            type: "listitem",
            points: 1,
            value: "Brown"
        },
        {
            title: "Hair Colour",
            id: "physicalappearance.haircolour",
            type: "listitem",
            points: 1,
            value: "Greying from black"
        },
        {
            title: "Height",
            id: "physicalappearance.height",
            type: "listitem",
            points: 1,
            value: "176cm"
        },
        {
            title: "Weight",
            id: "physicalappearance.weight",
            type: "listitem",
            points: 1,
            value: "67kg"
        },
        {
            title: "Build",
            id: "physicalappearance.build",
            type: "listitem",
            points: 1,
            value: "Medium"
        },
    ]
};

export default character;