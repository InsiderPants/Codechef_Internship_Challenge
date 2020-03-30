import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoggedIn: 1,
            user_name: "insider_pants",
        };
    }

    navbarLogoRoute = () => {
        this.props.history.push('/contest');
    }

    loginButtonClick = () => {
        this.props.history.push('/login');
    }

    logout = () => {
        //logout
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("refreshToken");
        this.setState({isLoggedIn: 0});
        delete axios.defaults.headers.common["Authorization"];
        this.props.history.push('/');
    }

    UNSAFE_componentWillMount()
    {
        let accessToken = window.localStorage.getItem("accessToken");
        if(accessToken == null || accessToken === undefined || accessToken.length === 0) this.setState({isLoggedIn: 0});
        else this.setState({isLoggedIn: 1});
    }

    render() 
    {
        const login = (
            <div>
                <button className = "btn btn-outline-light btn-sm my-0" onClick = {this.loginButtonClick}> Login </button>
            </div>
        );

        const user = (
            <div>
                <button className = "btn btn-outline-light btn-sm ml-2 my-0" onClick = {this.logout}> Log Out </button>
            </div>
        )

        return (
            <div className = "container-fluid bg-dark" >
                <div className = "container-xl" >
                    <nav className = "navbar navbar-dark">
                        <span className = "display-5 mb-0 h1" style = {{color: 'white'}} onClick = {this.navbarLogoRoute}> CODECHEF </span>
                        <div className = "navbar-right navbar">
                            {this.state.isLoggedIn ? user : login}
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);