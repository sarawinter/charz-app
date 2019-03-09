import React, { Component } from 'react';

class Characters extends Component {

    render() {

        const character = this.props.character;
        const name = character.metadata && character.metadata.nickname ? 
        <span>&ldquo;{character.metadata.nickname}&rdquo;<br></br>{character.metadata.name}</span> : 
        character.metadata.name;

        return (
            <article className="mini-char" onClick={() => this.props.goto(character.id)}>
                <img src={character.imageId} alt="" />
                <h2>{name}</h2>
            </article>
        );
    }
}

export default Characters;