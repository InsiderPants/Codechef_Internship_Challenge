//Libraries
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components import
import Login from './components/login/Login';
import Contest from './components/contest/Contest';
import SearchContest from './components/contest/searchContest';
import Problem from './components/problems/problem';
import Submit from './components/submitAndRun/submit';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

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