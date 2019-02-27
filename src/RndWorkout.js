import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalHeader from './Components/Global/GlobalHeader';
import Home from './Pages/Home';
import Randomizer from './Pages/Randomizer';
import ExerciseList from './Pages/ExerciseList';
import Links from './Pages/Links';
import RandomWorkout from './Pages/RandomWorkout';

class RndWorkout extends Component {
    render() {
        return (
            <Router>
                <div className="rnd-workout">
                    <GlobalHeader />
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={ExerciseList} />
                    <Route path="/random" component={Randomizer} />
                    <Route path="/links" component={Links} />
                    <Route path="/rnd-workout" component={RandomWorkout} />
                </div>
            </Router>
        );
    }
}

export default RndWorkout;