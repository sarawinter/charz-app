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
        console.log(charId)
        this.setState({ charId: charId });
    }

    render() {

        const charsList = this.state.characterList.map(item => <CharMini key={item.id} character={item} goto={this.goToCharacter} />) || [];


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