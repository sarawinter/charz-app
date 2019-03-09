import React, { Component } from 'react';
import './_buttons.css';

class SmallBtn extends Component {
    render() {

        const enabled = this.props.enabled;
        const position = this.props.position === 'right' ? 'pos-right' : '';

        return (
            <div className={position}>
                {enabled &&
                    <button className="small-btn" onClick={() => this.props.onClickEvent()}><i className="fas fa-pencil-alt"></i></button>
                }
            </div>
        );
    }
}

export default SmallBtn;