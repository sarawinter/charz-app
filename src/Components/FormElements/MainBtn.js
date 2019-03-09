import React, { Component } from 'react';
import './_buttons.css';

class MainBtn extends Component {
    render() {

        const enabled = this.props.enabled || false;
        const btnType = this.props.type;
        const btnSize = this.props.size || "medium";
        let iconClass = null;
        let btnClass = null;

        switch (btnType) {
            case "main-edit":
                iconClass = "fas fa-pencil-alt";
                btnClass = "main-edit";
                break;
            case "main-add":
                iconClass = "fas fa-plus";
                btnClass = "main-add";
                break;
            case "add":
                iconClass = "fas fa-plus";
                btnClass = "add";
                break;
            case "edit":
                iconClass = "fas fa-pencil-alt";
                btnClass = "edit";
                break;
            case "save":
                iconClass = "far fa-save";
                btnClass = "save";
                break;
            case "cancel":
                iconClass = "fas fa-ban";
                btnClass = "cancel";
                break;
            case "close":
                iconClass = "fas fa-times";
                btnClass = "close";
                break;
            case "info":
                iconClass = "far fa-lightbulb";
                btnClass = "info";
                break;
            default:
                iconClass = "";
                btnClass = "default";
                break;
        }

        return (
            <React.Fragment>
                {enabled &&
                    <button className={`btn-${btnClass} ${btnSize}`}><i className={iconClass} onClick={() => this.props.onClickEvent()}></i></button>
                }
            </React.Fragment>
        );
    }
}

export default MainBtn;