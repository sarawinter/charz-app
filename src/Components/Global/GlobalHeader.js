import React, { Component } from 'react';
import GlobalMenu from '../Menus/GlobalMenu';
import './_global.css';


class GlobalHeader extends Component {
    render() {
        return (
            <div className="global-header">
                <GlobalMenu />
            </div>
        );
    }
}

export default GlobalHeader;