import React, { Component } from 'react';
import './_page.css';

import CharzMiniList from '../Components/Character/CharzMinisList';
import MainBtn from '../Components/FormElements/MainBtn';

class Characters extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <CharzMiniList />
                    <div className="control-area">
                        <MainBtn type="add" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Characters;