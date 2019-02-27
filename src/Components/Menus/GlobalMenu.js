import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './_menus.css';

class GlobalMenu extends Component {
    render() {
        return (
            <nav className="global-menu">
                <NavLink activeClassName="selected" exact to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink activeClassName="selected" exact to="/rnd-workout"><i className="fas fa-list"></i></NavLink>
                <NavLink activeClassName="selected" exact to="/list"><i className="fas fa-dumbbell"></i></NavLink>
                <NavLink activeClassName="selected" exact to="/random"><i className="fas fa-random"></i></NavLink>
                <NavLink activeClassName="selected" exact to="/links"><i className="fas fa-link"></i></NavLink>
            </nav>
        );
    }
}

export default GlobalMenu;