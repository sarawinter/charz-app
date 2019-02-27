import React, { Component } from 'react';
import * as Characters from '../../Data/Characters';
import './_full-char.css';

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
        const name = character.nickname ? <span>&ldquo;{character.nickname}&rdquo;<br></br>{character.name}</span> : character.name;

        return (
            <div className="full-char">
                <h2>{name}</h2>
                <div className="top-info">
                <div className="leftish">
                    <img src={character.imageId} alt="" />
                    <p className="quote">&ldquo;Something really cool this character said once.&rdquo;</p>
                </div>
                <div className="rightish">
                    <div className="data">
                        <h4>Full name:</h4>
                        <p>{character.name}</p>
                        <h4>Age:</h4>
                        <p>42</p>
                        <h4>Place of birth:</h4>
                        <p>Stockholm, Sweden</p>
                        <h4>Current address:</h4>
                        <p>Vikingavägen 25C, 258 55 Stockholm, SWEDEN</p>
                        <h4>Race:</h4>
                        <p>Human</p>
                        <h4>Languages:</h4>
                        <p>Swedish, English, Japanese</p>
                    </div>
                </div>
                </div>
                <div className="content">
                    <h3><span>Short</span><span className="line"></span></h3>
                    <p>This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                    </p>
                    <h3><span>History</span><span className="line"></span></h3>
                    <p>This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                        This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                        This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                        This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                    </p>
                    <h3><span>Physical Appearance</span><span className="line"></span></h3>
                    <p>This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                        This is a cute little text to get the attention of your reader and so that your
                        remember to make the character as memorable as possible. Don't go crazy though.
                    </p>
                    <p>
                        <ul>
                            <li>Eye color: <span>Brown</span></li>
                            <li>Hair color: <span>Greying from black</span></li>
                            <li>Height: <span>189cm</span></li>
                            <li>Weight: <span>79kg</span></li>
                            <li>Build: <span>Medium</span></li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default FullChar;