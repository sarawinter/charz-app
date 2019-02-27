import React, { Component } from 'react';
import './_page.css';

class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Sara",
            age: 1,
            inputValue: ""
        }
    }

    componentDidMount() {
        this.setState({
            name: "Marcus"
        });
    }

    changeName = () => {
        this.setState({
            name: this.state.inputValue
        });
    }

    handleInputChange = (event) => {
        const val = event.target.value;
        this.setState({
            inputValue: val
        });
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <h1>This is Test</h1>
                    <p>
                        {this.state.name}
                    </p>
                    <input type="text" name="input" onChange={this.handleInputChange} value={this.state.inputValue} />
                    <button onClick={this.changeName}>Change Name</button>
                </div>
            </div>
        );
    }
}

export default Test;