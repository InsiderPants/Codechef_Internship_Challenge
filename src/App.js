//Libraries
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components import
import Login from './components/login/Login';
import Contest from './components/contest/Contest';
import SearchContest from './components/contest/searchContest';
import Problem from './components/problems/problem';
import AllProblemSet from './components/problems/allProblemSet';
import Submit from './components/submitAndRun/submit';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Ranklist from './components/contest/ranklist';

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
                        <Route exact path = '/contest' component = {SearchContest} />
                        <Route exact path = '/contest/:contestID' component = {Contest} />
                        <Route exact path = '/contest/:contestID/problem/:problemID' component = {Problem} />
                        <Route exact path = '/contest/:contestID/problem/:problemID/submit' component = {Submit} />
                        <Route exact path = '/contest/:contestID/ranklist' component = {Ranklist} />
                        <Route exact path = '/problemset' component = {AllProblemSet} />
                        <Route exact path = '/problemset/:problemID' component = {Problem} />

                        {/* default route */}
                        <Route component = {Login} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;