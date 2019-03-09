import React, { Component } from 'react';

import MainBtn from '../../FormElements/MainBtn';

class Edit extends Component {
    render() {
        const metadata = this.props.metadata ? this.props.metadata : {};

        return (
            <div className="edit-form">
                <div className="edit-form-inner">
                    <div className="cancel-zone">
                        <MainBtn type="close" size="small" enabled={true} position="right" onClickEvent={this.props.toggleEditForm} />
                    </div>
                    <label>
                        <h4>Full name:</h4>
                        <input type="text" value={metadata.name} />
                    </label>
                    <label>
                        <h4>Nickname:</h4>
                        <input type="text" value={metadata.nickname} />
                    </label>
                    <label>
                        <h4>Age:</h4>
                        <input type="text" value={metadata.age} />
                    </label>
                    <label>
                        <h4>Place of birth:</h4>
                        <input type="text" value={metadata.birthplace} />
                    </label>
                    <label>
                        <h4>Current address:</h4>
                        <textarea>
                            {metadata.currentAddress}
                        </textarea>
                    </label>
                    <label>
                        <h4>Race:</h4>
                        <input type="text" value={metadata.race} />
                    </label>
                    <label>
                        <h4>Languages:</h4>
                        <input type="text" value={metadata.languages} />
                    </label>
                </div>
                <div className="control-zone">
                    <div style={{ flexGrow: 1 }}>
                        <MainBtn enabled={true} type="info" size="medium" />
                    </div>
                    <div>
                        <MainBtn enabled={true} type="save" size="medium" />
                    </div>
                </div>
            </div>
        );
    }
}

class Read extends Component {
    render() {
        const metadata = this.props.metadata ? this.props.metadata : {};

        return (
            <div className="data">
                <h4>Full name:</h4>
                <p>{metadata.name}</p>
                <h4>Age:</h4>
                <p>{metadata.age}</p>
                <h4>Place of birth:</h4>
                <p>{metadata.birthplace}</p>
                <h4>Current address:</h4>
                <p>{metadata.currentAddress}</p>
                <h4>Race:</h4>
                <p>{metadata.race}</p>
                <h4>Languages:</h4>
                <p>{metadata.languages}</p>
            </div>
        );
    }
}

class Metadata extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditForm: false
        }
    }

    toggleEditForm = () => {
        console.log(this.state.showEditForm);
        this.setState({
            showEditForm: !this.state.showEditForm
        });
    }

    render() {

        const inEditMode = this.props.inEditMode ? this.props.inEditMode : false;

        return (
            <React.Fragment>
                {this.state.showEditForm ?
                    <div>
                        <Edit {...this.props} toggleEditForm={this.toggleEditForm} />
                    </div>
                    :
                    <div>
                        <div className="pos-right">
                            <MainBtn enabled={inEditMode} size="small" type="edit" onClickEvent={this.toggleEditForm} />
                        </div>
                        <Read {...this.props} />
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Metadata;