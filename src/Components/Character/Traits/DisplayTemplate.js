import React, { Component } from 'react';

import MainBtn from '../../FormElements/MainBtn';

class Title extends Component {
    render() {
        const inEditMode = this.props.editEnabled;
        return (
            <h3>
                <MainBtn enabled={inEditMode} size="small" type="edit" onClickEvent={this.props.onClickEvent} />
                <span className={inEditMode ? 'editing' : ''}>{this.props.title}</span>
                <span className="line"></span>
            </h3>
        );
    }
};

class DisplayTemplate extends Component {
    render() {

        const item = this.props.item || null;
        let fieldOutput = null;

        switch (item.type) {
            case "text":
                fieldOutput = <React.Fragment><Title title={item.title} {...this.props} /><p>{item.value}</p></React.Fragment>;
                break;
            case "multiline":
                fieldOutput = <React.Fragment><Title title={item.title} {...this.props} /><p>{item.value}</p></React.Fragment>;
                break;
            case "longmultiline":
                fieldOutput = <React.Fragment><Title title={item.title} {...this.props} /><p>{item.value}</p></React.Fragment>;
                break;
            case "options":
                fieldOutput = <React.Fragment><Title title={item.title} {...this.props} /><p>{item.value}</p></React.Fragment>;
                break;
            case "listitem":
                fieldOutput = <React.Fragment><p className="list-item"><span>{item.title}:</span> <span>{item.value}</span></p></React.Fragment>;
                break;
            default:
                fieldOutput = <React.Fragment><Title title={item.title} {...this.props} /><p>{item.value}</p></React.Fragment>;
                break;
        }

        return (
            <div>
                {fieldOutput}
            </div>
        );
    }
}

export default DisplayTemplate;