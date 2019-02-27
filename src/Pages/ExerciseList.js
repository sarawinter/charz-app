import React, { Component } from 'react';
import './_page.css';

class ExerciseList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <h1>This is ExerciseList</h1>
                    <p>
                        Hello from planet Sand!
                    </p>
                </div>
            </div>
        );
    }
}

export default ExerciseList;