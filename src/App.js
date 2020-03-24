//Libraries
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components import
import Login from './components/login/Login';
import Contest from './components/contest/Contest';
import searchContest from './components/contest/searchContest';
import Problem from './components/problems/problem';
import AllProblemSet from './components/problems/allProblemSet';
import submit from './components/submitAndRun/submit';
import Navbar from './components/navbar/navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        {/* Routes */}
                        <Route exact path = '/' component = {Login} />
                        <Route exact path = '/login' component = {Login} />
                        <Route exact path = '/contest' component = {searchContest} />
                        <Route exact path = '/contest/:contestID' component = {Contest} />
                        <Route exact path = '/contest/:contestID/problem/:problemID' component = {Problem} />
                        <Route exact path = '/problemset' component = {AllProblemSet} />
                        <Route exact path = '/problemset/:problemID' component = {Problem} />
                        <Route exact path = '/submit/:problemID' component = {submit} />

                        {/* default route */}
                        <Route component = {Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;