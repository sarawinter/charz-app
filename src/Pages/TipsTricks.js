import React, { Component } from 'react';
import './_page.css';

class TipsTricks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <h1>Tips & Tricks</h1>
                    <p className="subtitle">
                        Find good tricks on how to create a memorable character.
                    </p>
                </div>
            </div>
        );
    }
}

export default TipsTricks;