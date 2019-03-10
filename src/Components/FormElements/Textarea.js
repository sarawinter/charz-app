import React, { Component } from 'react';

class SimpleInput extends Component {

    render() {

        const field = this.props.field;
        const long = this.props.long ? 'long' : '';

        return (
            <label>
                <h4>{field.title}:</h4>
                <textarea className={long}>
                    {field.value}
                </textarea>
            </label>
        );
    }
}

export default SimpleInput;