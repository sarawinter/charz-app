import React, { Component } from 'react';
import * as Characters from '../../Data/CharactersData';
import './_full-char.css';
import '../FormElements/_form-container.css';
import '../FormElements/_form-elements.css';

import BasicInfo from './Traits/BasicInfo';
import DisplayFull from './Traits/DisplayFull'

class FullChar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            char: {},
            basics: {}
        }
    }

    componentDidMount() {
        const character = Characters.getCharacterById(this.props.charId);
        const basics = this.getBasicData(character);
        this.setState({
            char: character,
            basics: basics
        });
    }

    getBasicData = (character) => {
        const fullName = character.basicInfo.find(info => info.id === "basicinfo.fullname");
        const nickname = character.basicInfo.find(info => info.id === "basicinfo.nickname");
        const quote = character.image.caption;
        const id = character.metadata.id;
        const image = character.image.imageSrc;

        return {
            fullName: fullName.value,
            nickname: nickname.value,
            id: id,
            image: image,
            quote: quote
        }
    }

    render() {

        const character = this.state.char;
        const basicInfo = this.state.basics;
        const inEditMode = this.props.editEnabled;
        let name = null;

        name = basicInfo.nickname ?
            <span>&ldquo;{basicInfo.nickname}&rdquo;<br></br>{basicInfo.fullName}</span> :
            basicInfo.fullName;

        return (
            <div className="full-char">
                <h2>{name}</h2>
                <div className="top-info">
                    <div className="leftish">
                        <img src={basicInfo.image} alt="" />
                        <p className="quote">&ldquo;{basicInfo.quote}&rdquo;</p>
                    </div>
                    <div className="rightish">
                        <BasicInfo data={character.basicInfo} inEditMode={inEditMode} />
                    </div>
                </div>
                <div className="content">
                    <DisplayFull {...this.props} data={character.short} />
                    <DisplayFull {...this.props} data={character.history} />
                    <DisplayFull {...this.props} data={character.physicalAppearance} />
                </div>
            </div>
        );
    }
}

export default FullChar;