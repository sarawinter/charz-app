import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import * as Characters from '../../Data/CharactersData';

import './_char-mini.css';

import CharMini from './CharMini';

class CharMiniList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characterList: [],
            charId: null
        }
    }

    componentDidMount() {
        const characters = Characters.getCharacters();
        this.setState({ characterList: characters });
    }

    goToCharacter = (charId) => {
        this.setState({ charId: charId });
    }

    getBasicData = (character) => {
        const fullName = character.basicInfo.find(info => info.id === "basicinfo.fullname");
        const nickname = character.basicInfo.find(info => info.id === "basicinfo.nickname");
        const id = character.metadata.id;
        const image = character.image.imageSrc;
        const completedValue = this.getCompletedValue(character);

        return {
            fullName: fullName.value,
            nickname: nickname.value,
            id: id,
            image: image,
            completedValue: completedValue
        }
    }

    getCompletedValue = (character) => {
        return 50;
    }

    render() {

        const charsList = this.state.characterList.map((item) => {
            const basicChar = this.getBasicData(item);
            return <CharMini key={item.metadata.id} character={basicChar} goto={this.goToCharacter} /> || []
        });

        return (
            <div className="chars-mini-list">
                {this.state.charId !== null &&
                    <Redirect to={`/characters/${this.state.charId}`} />
                }
                {charsList}
            </div>
        );
    }
}

export default CharMiniList;