import React, { Component } from 'react';

class List extends Component {

    render() {

        const field = this.props.field;

        return (
            <label>
                <h4>{field.title}:</h4>
                <input type="text" value={field.value} />
            </label>
        );
    }
}

export default List;