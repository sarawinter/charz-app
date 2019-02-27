import React, { Component } from 'react';
import './_page.css';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <h1>Welcome to Charz!</h1>
                    <p className="subtitle">
                        Create characters for your story or just for fun.
                    </p>
                    <p className="intro">
                        Here you will find a creative space where you can build characters, gathering as much information 
                        about them as possible in an easy way, to maximize your productivity.
                    </p>
                    <p className="intro">
                        Have fun!
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;