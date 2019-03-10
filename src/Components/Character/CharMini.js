import React, { Component } from 'react';

class CharMini extends Component {

    render() {
        const character = this.props.character;
        const name = character && character.nickname ?
            <span>&ldquo;{character.nickname}&rdquo;<br></br>{character.fullName}</span> :
            character.fullName;

        return (
            <article className="mini-char" onClick={() => this.props.goto(character.id)}>
                <img src={character.image} alt="" />
                <h2>{name}</h2>
                <div class="completed-value">{character.completedValue}%</div>
            </article>
        );
    }
}

export default CharMini;