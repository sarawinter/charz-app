import React, { Component } from 'react';

import DisplayTemplate from './DisplayTemplate';
import TraitForm from '../../FormElements/TraitForm';

class DisplayFull extends Component {

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

        const data = this.props.data || [];
        const displayItems = data.map(item => <DisplayTemplate key={item.id} {...this.props} onClickEvent={this.toggleEditForm} item={item} />);

        return (
            <div>
                {this.state.showEditForm ?
                    <TraitForm {...this.props} toggleEditForm={this.toggleEditForm} />
                    :
                    <div>
                        {displayItems}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayFull;