import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './_menus.css';

class GlobalMenu extends Component {
    render() {
        return (
            <nav className="global-menu">
                <div className="left">
                    <NavLink activeClassName="selected" exact to="/"><i className="fas fa-home"></i></NavLink>
                    <NavLink activeClassName="selected" exact to="/characters"><i className="fas fa-users"></i></NavLink>
                    <NavLink activeClassName="selected" exact to="/articles"><i className="far fa-newspaper"></i></NavLink>
                    <NavLink activeClassName="selected" exact to="/tipsntricks"><i className="far fa-lightbulb"></i></NavLink>
                </div>
                <div className="right">
                    <NavLink activeClassName="selected" exact to="/help"><i className="far fa-question-circle"></i></NavLink>
                    <NavLink activeClassName="selected" exact to="/settings"><i className="fas fa-cogs"></i></NavLink>
                </div>
            </nav>
        );
    }
}

export default GlobalMenu;