import React, { Component } from 'react';
import * as Characters from '../../Data/CharactersData';
import './_full-char.css';
import '../FormElements/_form-container.css';
import '../FormElements/_form-elements.css';

import Metadata from './Traits/Metadata';
import MainBtn from '../FormElements/MainBtn';

class FullChar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            char: {}
        }
    }

    componentDidMount() {
        const character = Characters.getCharacterById(this.props.charId);
        this.setState({ char: character });
    }

    render() {

        const character = this.state.char;
        const inEditMode = this.props.editEnabled;
        let name = null;

        if (character && character.metadata) {
            name = character.metadata.nickname ?
                <span>&ldquo;{character.metadata.nickname}&rdquo;<br></br>{character.metadata.name}</span> :
                character.metadata.name;
        }

        return (
            <div className="full-char">
                <h2>{name}</h2>
                <div className="top-info">
                    <div className="leftish">
                        <img src={character.imageId} alt="" />
                        <p className="quote">&ldquo;{character.metadata && character.metadata.quote}&rdquo;</p>
                    </div>
                    <div className="rightish">
                        <Metadata metadata={character.metadata} inEditMode={inEditMode} />
                    </div>
                </div>
                <div className="content">
                    <h3><MainBtn enabled={inEditMode} size="small" type="edit" /><span className={inEditMode ? 'editing' : ''}>Short</span><span className="line"></span></h3>
                    <p>{character.short}</p>
                    <h3><MainBtn enabled={inEditMode} size="small" type="edit" /><span className={inEditMode ? 'editing' : ''}>History</span><span className="line"></span></h3>
                    <p>{character.history}</p>
                    <h3><MainBtn enabled={inEditMode} size="small" type="edit" /><span className={inEditMode ? 'editing' : ''}>Physical Appearance</span><span className="line"></span></h3>
                    <p>{character.physicalAppearance}</p>
                    <ul>
                        <li>Eye color: <span>{character.physicalAppearanceList && character.physicalAppearanceList.eyeColor}</span></li>
                        <li>Hair color: <span>{character.physicalAppearanceList && character.physicalAppearanceList.hairColor}</span></li>
                        <li>Height: <span>{character.physicalAppearanceList && character.physicalAppearanceList.height}</span></li>
                        <li>Weight: <span>{character.physicalAppearanceList && character.physicalAppearanceList.weight}</span></li>
                        <li>Build: <span>{character.physicalAppearanceList && character.physicalAppearanceList.build}</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FullChar;