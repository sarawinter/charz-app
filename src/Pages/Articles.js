import React, { Component } from 'react';
import './_page.css';

class Articles extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <h1>Articles</h1>
                    <p className="subtitle">
                        Read interesting articles about creating characters.
                    </p>
                </div>
            </div>
        );
    }
}

export default Articles;