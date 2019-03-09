
import Img01 from '../Assets/char-avatars/01.png';
import Img02 from '../Assets/char-avatars/02.png';
import Img03 from '../Assets/char-avatars/03.png';
import Img04 from '../Assets/char-avatars/04.png';
import Img05 from '../Assets/char-avatars/05.png';
import Img06 from '../Assets/char-avatars/06.png';
import Img07 from '../Assets/char-avatars/07.png';
import Img08 from '../Assets/char-avatars/08.png';
import Img09 from '../Assets/char-avatars/09.png';
import Img10 from '../Assets/char-avatars/10.png';
import Img11 from '../Assets/char-avatars/11.png';
import Img12 from '../Assets/char-avatars/12.png';
import Img13 from '../Assets/char-avatars/13.png';
import Img14 from '../Assets/char-avatars/14.png';
import Img15 from '../Assets/char-avatars/15.png';
import Img16 from '../Assets/char-avatars/16.png';
import Img17 from '../Assets/char-avatars/17.png';
import Img18 from '../Assets/char-avatars/18.png';

export function getCharacters() {
    return characters;
}

export function getCharacterById(id) {
    return characters.find(char => char.id === id);
}

const images = [Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18]

const characters = [
    {
        id: 'char01',
        imageId: images[3],
        metadata: {
            name: 'Sarah Egon',
            nickname: '',
            quote: 'Something really cool this character said once.',
            age: "42",
            birthplace: "Stockholm, SWEDEN",
            currentAddress: "Vikingavägen 25C, 258 55 Stockholm, SWEDEN",
            race: "human",
            languages: "Swedish, English, Japanese"
        },
        short: `This is a cute little text to get the attention of your reader and so that your remember to make 
        the character as memorable as possible. Don't go crazy though.`,
        history: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam a lacinia 
        augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque consequat 
        lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet mi. 
        Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus tellus 
        aliquet. Suspendisse sit amet est ante.`,
        physicalAppearance: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
        a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
        consequat lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet 
        mi. Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus 
        tellus aliquet. Suspendisse sit amet est ante.`,
        physicalAppearanceList: {
            eyeColor: "Brown",
            hairColor: "Greying from black",
            height: "176cm",
            weight: "67kg",
            Buld: "Medium"
        }
    },
    {
        id: 'char02',
        imageId: images[0],
        metadata: {
            name: 'Emmet J. Johnson',
            nickname: '',
            quote: 'Something really cool this character said once.',
            age: "42",
            birthplace: "Stockholm, SWEDEN",
            currentAddress: "Vikingavägen 25C, 258 55 Stockholm, SWEDEN",
            race: "human",
            languages: "Swedish, English, Japanese"
        },
        short: `This is a cute little text to get the attention of your reader and so that your remember to make 
        the character as memorable as possible. Don't go crazy though.`,
        history: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam a lacinia 
        augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque consequat 
        lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet mi. 
        Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus tellus 
        aliquet. Suspendisse sit amet est ante.`,
        physicalAppearance: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
        a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
        consequat lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet 
        mi. Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus 
        tellus aliquet. Suspendisse sit amet est ante.`,
        physicalAppearanceList: {
            eyeColor: "Brown",
            hairColor: "Greying from black",
            height: "176cm",
            weight: "67kg",
            Buld: "Medium"
        }
    },
    {
        id: 'char03',
        imageId: images[7],
        metadata: {
            name: 'Edgar von Malcovitz',
            nickname: 'Lil Monster',
            quote: 'Something really cool this character said once.',
            age: "42",
            birthplace: "Stockholm, SWEDEN",
            currentAddress: "Vikingavägen 25C, 258 55 Stockholm, SWEDEN",
            race: "human",
            languages: "Swedish, English, Japanese"
        },
        short: `This is a cute little text to get the attention of your reader and so that your remember to make 
        the character as memorable as possible. Don't go crazy though.`,
        history: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam a lacinia 
        augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque consequat 
        lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet mi. 
        Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus tellus 
        aliquet. Suspendisse sit amet est ante.`,
        physicalAppearance: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
        a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
        consequat lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet 
        mi. Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus 
        tellus aliquet. Suspendisse sit amet est ante.`,
        physicalAppearanceList: {
            eyeColor: "Brown",
            hairColor: "Greying from black",
            height: "176cm",
            weight: "67kg",
            Buld: "Medium"
        }
    },
    {
        id: 'char04',
        imageId: images[12],
        metadata: {
            name: 'Dustin Grooney Jr.',
            nickname: 'Dusty',
            quote: 'Something really cool this character said once.',
            age: "42",
            birthplace: "Stockholm, SWEDEN",
            currentAddress: "Vikingavägen 25C, 258 55 Stockholm, SWEDEN",
            race: "human",
            languages: "Swedish, English, Japanese"
        },
        short: `This is a cute little text to get the attention of your reader and so that your remember to make 
        the character as memorable as possible. Don't go crazy though.`,
        history: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam a lacinia 
        augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque consequat 
        lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet mi. 
        Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus tellus 
        aliquet. Suspendisse sit amet est ante.`,
        physicalAppearance: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
        a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
        consequat lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet 
        mi. Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus 
        tellus aliquet. Suspendisse sit amet est ante.`,
        physicalAppearanceList: {
            eyeColor: "Brown",
            hairColor: "Greying from black",
            height: "176cm",
            weight: "67kg",
            Buld: "Medium"
        }
    },
    {
        id: 'char05',
        imageId: images[16],
        metadata: {
            name: 'Elizabeth Camilla Davids',
            nickname: 'Cilla',
            quote: 'Something really cool this character said once.',
            age: "42",
            birthplace: "Stockholm, SWEDEN",
            currentAddress: "Vikingavägen 25C, 258 55 Stockholm, SWEDEN",
            race: "human",
            languages: "Swedish, English, Japanese"
        },
        short: `This is a cute little text to get the attention of your reader and so that your remember to make 
        the character as memorable as possible. Don't go crazy though.`,
        history: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam a lacinia 
        augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque consequat 
        lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet mi. 
        Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus tellus 
        aliquet. Suspendisse sit amet est ante.`,
        physicalAppearance: `Fusce tincidunt faucibus augue vel suscipit. Donec interdum in massa ac ornare. Aliquam 
        a lacinia augue, ut tempus ligula. Quisque ac dui non augue mattis consequat non quis ipsum. Pellentesque 
        consequat lorem pellentesque ex pulvinar auctor. Pellentesque tincidunt aliquam leo in cursus. Sed at imperdiet 
        mi. Pellentesque ultricies porta vulputate. Aliquam porta eros sollicitudin urna ullamcorper, vel faucibus 
        tellus aliquet. Suspendisse sit amet est ante.`,
        physicalAppearanceList: {
            eyeColor: "Brown",
            hairColor: "Greying from black",
            height: "176cm",
            weight: "67kg",
            Buld: "Medium"
        }
    },
];