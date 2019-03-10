import React, { Component } from 'react';
import './_page.css';

import FullChar from '../Components/Character/FullChar';
import MainBtn from '../Components/FormElements/MainBtn';

class Character extends Component {

    constructor(props) {
        super(props);

        this.state = {
            charId: this.props.match.params.id,
            editEnabled: false
        }
    }

    enableEditMode = () => {
        this.setState({ editEnabled: true });
    }

    cancelEditMode = () => {
        this.setState({ editEnabled: false });
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <FullChar charId={this.state.charId} editEnabled={this.state.editEnabled} />
                </div>
                <div className="control-area">
                    {this.state.editEnabled ?
                        <React.Fragment>
                            <MainBtn enabled={true} size="medium" type="info" />
                            <MainBtn enabled={true} size="medium" type="list" />
                            <MainBtn enabled={true} size="large" type="cancel" onClickEvent={this.cancelEditMode} />
                        </React.Fragment>
                        :
                        <MainBtn enabled={true} size="large" type="main-edit" onClickEvent={this.enableEditMode} />
                    }
                </div>
            </div>
        );
    }
}

export default Character;