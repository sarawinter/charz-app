import React, { Component } from 'react';
import './_page.css';

import FullChar from '../Components/Character/FullChar';

class Character extends Component {

    constructor(props) {
        super(props);

        this.state = {
            charId: this.props.match.params.id
        }
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <FullChar charId={this.state.charId} />
                </div>
            </div>
        );
    }
}

export default Character;