import React, { Component } from 'react';

import MainBtn from '../../FormElements/MainBtn';
import TraitForm from '../../FormElements/TraitForm';

class DisplayItem extends Component {
    render() {
        const item = this.props.item ? this.props.item : {};

        return (
            <React.Fragment>
                <h4>{item.title}:</h4>
                <p>{item.value}</p>
            </React.Fragment>
        );
    }
}

class BasicInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditForm: false
        }
    }

    toggleEditForm = () => {
        this.setState({
            showEditForm: !this.state.showEditForm
        });
    }

    render() {

        const inEditMode = this.props.inEditMode ? this.props.inEditMode : false;
        const data = this.props.data || [];
        const displayItems = data.map(item => <DisplayItem key={item.id} item={item} />);

        return (
            <React.Fragment>
                {this.state.showEditForm ?
                    <TraitForm {...this.props} toggleEditForm={this.toggleEditForm} />
                    :
                    <React.Fragment>
                        <div className="pos-right">
                            <MainBtn enabled={inEditMode} size="small" type="edit" onClickEvent={this.toggleEditForm} />
                        </div>
                        <div className="data">
                            {displayItems}
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default BasicInfo;