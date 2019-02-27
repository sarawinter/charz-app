import React, { Component } from 'react';
import './_buttons.css';

class Characters extends Component {

    // fa-pencil-alt

    render() {
        return (
            <button className="add-btn"><i className="fas fa-plus"></i></button>
        );
    }
}

export default Characters;