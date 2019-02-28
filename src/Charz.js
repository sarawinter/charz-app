import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalHeader from './Components/Global/GlobalHeader';

import Home from './Pages/Home';
import Characters from './Pages/Characters';
import Character from './Pages/Character';
import Articles from './Pages/Articles';
import TipsTricks from './Pages/TipsTricks';
import Help from './Pages/Help';
import Settings from './Pages/Settings';

class Charz extends Component {
    render() {
        return (
            <Router basename="/charz">
                <div className="charz">
                    <GlobalHeader />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={Characters} />
                    <Route path="/characters/:id" component={Character} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/tipsntricks" component={TipsTricks} />
                    <Route path="/help" component={Help} />
                    <Route path="/settings" component={Settings} />
                </div>
            </Router>
        );
    }
}

export default Charz;