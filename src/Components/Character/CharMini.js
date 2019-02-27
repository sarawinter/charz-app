import React, { Component } from 'react';

class Characters extends Component {

    render() {

        const character = this.props.character;
        const name = character.nickname ? <span>&ldquo;{character.nickname}&rdquo;<br></br>{character.name}</span> : character.name;

        return (
            <article className="mini-char" onClick={() => this.props.goto(character.id)}>
                <img src={character.imageId} alt="" />
                <h2>{name}</h2>
            </article>
        );
    }
}

export default Characters;