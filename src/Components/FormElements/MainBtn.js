import React, { Component } from 'react';
import './_buttons.css';

class MainBtn extends Component {
    render() {

        const btnType = this.props.type;
        let iconClass = null;
        let btnClass = null;

        switch (btnType) {
            case "add":
                iconClass = "fas fa-plus";
                btnClass = "default";
                break;
            case "edit":
                iconClass = "fas fa-pencil-alt";
                btnClass = "default";
                break;
            case "save":
                iconClass = "far fa-save";
                btnClass = "alt";
                break;
            case "cancel":
                iconClass = "fas fa-ban";
                btnClass = "alt";
                break;
            default:
                iconClass = "default";
                btnClass = "default";
                break;
        }

        return (
            <button className={btnClass}><i className={iconClass} onClick={() => this.props.onClickEvent()}></i></button>
        );
    }
}

export default MainBtn;