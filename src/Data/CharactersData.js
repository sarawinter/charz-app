
import Char01 from './Char01';
import Char02 from './Char02';
import Char03 from './Char03';
import Char04 from './Char04';
import Char05 from './Char05';

const characters = [Char01, Char02, Char03, Char04, Char05];

export function getCharacters() {
    return characters;
}

export function getCharacterById(id) {
    return characters.find(char => char.metadata.id === id);
}


/*

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
*/