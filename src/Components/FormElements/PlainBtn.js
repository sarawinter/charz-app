import React, { Component } from 'react';
import './_buttons.css';

class PlainBtn extends Component {
    render() {

        const btnType = this.props.type;
        let iconClass = null;
        let btnClass = null;

        switch (btnType) {
            case "add":
                iconClass = "fas fa-plus";
                btnClass = "plain medium";
                break;
            case "edit":
                iconClass = "fas fa-pencil-alt";
                btnClass = "plain medium";
                break;
            case "save":
                iconClass = "far fa-save";
                btnClass = "plain alt medium";
                break;
            case "cancel":
                iconClass = "fas fa-ban";
                btnClass = "plain alt medium";
                break;
            default:
                iconClass = null;
                btnClass = null;
                break;
        }

        return (
            <button className={btnClass}><i className={iconClass} onClick={() => this.props.onClickEvent()}></i></button>
        );
    }
}

export default PlainBtn;