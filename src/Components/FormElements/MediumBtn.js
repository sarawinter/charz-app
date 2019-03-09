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
                btnClass = "deafult medium";
                break;
            case "edit":
                iconClass = "fas fa-pencil-alt";
                btnClass = "deafult medium";
                break;
            case "save":
                iconClass = "far fa-save";
                btnClass = "alt2 medium";
                break;
            case "cancel":
                iconClass = "fas fa-ban";
                btnClass = "alt medium";
                break;
            case "info":
                iconClass = "far fa-lightbulb";
                btnClass = "alt3 medium";
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

export default MainBtn;