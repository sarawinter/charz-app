
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
        name: 'Sarah Egon',
        nickname: '',
        imageId: images[3]
    },
    {
        id: 'char02',
        name: 'Emmet J. Johnson',
        nickname: '',
        imageId: images[0]
    },
    {
        id: 'char03',
        name: 'Edgar von Malcovitz',
        nickname: 'Lil Monster',
        imageId: images[7]
    },
    {
        id: 'char04',
        name: 'Dustin Grooney Jr.',
        nickname: 'Dusty',
        imageId: images[12]
    },
    {
        id: 'char05',
        name: 'Elizabeth Camilla Davids',
        nickname: 'Cilla',
        imageId: images[16]
    },
];