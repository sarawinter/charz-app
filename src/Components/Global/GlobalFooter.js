import React, { Component } from 'react';

class GlobalFooter extends Component {
    render() {
        return (
            <div className="global-footer">
                {this.props.myprop}
            </div>
        );
    }
}

export default GlobalFooter;