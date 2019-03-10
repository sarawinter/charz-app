import React, { Component } from 'react';

class Options extends Component {

    render() {

        const field = this.props.field;

        return (
            <label>
                <h4>{field.title}:</h4>
                <textarea>
                    {field.value}
                </textarea>
            </label>
        );
    }
}

export default Options;