import React, { Component } from 'react';
import './_form-elements.css';

import MainBtn from './MainBtn';
import SimpleInput from './SimpleInput';
import Textarea from './Textarea';
import Options from './Options';
import List from './List';

class TraitForm extends Component {
    render() {

        const data = this.props.data;
        const fields = data.map((item) => {
            const type = item.type || null;
            let fieldInput = null;

            switch (type) {
                case "text":
                    fieldInput = <SimpleInput key={item.id} field={item} />
                    break;
                case "multiline":
                    fieldInput = <Textarea key={item.id} field={item} long={false} />
                    break;
                case "longmultiline":
                    fieldInput = <Textarea key={item.id} field={item} long={true} />
                    break;
                case "options":
                    fieldInput = <Options key={item.id} field={item} />
                    break;
                case "listitem":
                    fieldInput = <List key={item.id} field={item} />
                    break;
                default:
                    fieldInput = <SimpleInput key={item.id} field={item} />
                    break;
            }

            return fieldInput;
        });

        return (
            <div className="edit-form">
                <div className="cancel-zone">
                    <MainBtn type="close" size="small" enabled={true} position="right" onClickEvent={this.props.toggleEditForm} />
                </div>
                <div className="edit-form-inner">
                    {fields}
                </div>
                <div className="control-zone">
                    <div style={{ flexGrow: 1 }}>
                        <MainBtn enabled={true} type="info" size="medium" />
                    </div>
                    <div>
                        <MainBtn enabled={true} type="save" size="medium" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TraitForm;