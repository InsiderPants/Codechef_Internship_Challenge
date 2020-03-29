import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoggedIn: 0,
            user_name: "insider_pants",
        };
    }

    navbarLogoRoute = () => {
        this.props.history.push('/');
    }

    loginButtonClick = () => {
        this.props.history.push('/login');
    }

    logout = () => {
        //logout
        this.setState({isLoggedIn: 0});
    }

    UNSAFE_componentWillMount()
    {
        let accessToken = window.localStorage.getItem("accessToken");
        if(accessToken == null || accessToken.length === 0) this.setState({isLoggedIn: 0});
        else this.setState({isLoggedIn: 1});
    }

    render() 
    {
        const login = (
            <div>
                {(this.props.match.url === "/" || this.props.match.url === "/login") ? <div></div> : <button className = "btn btn-outline-light btn-sm my-0" onClick = {this.loginButtonClick}> Login </button>}
            </div>
        );

        const user = (
            <div>
                <p className = "navbar-text mr-2 p-0 m-0"> {this.state.user_name} </p>
                <button className = "btn btn-outline-light btn-sm ml-2 my-0" onClick = {this.logout}> Log Out </button>
            </div>
        )

        return (
            <div className = "container-fluid bg-dark" >
                <div className = "container-xl" >
                    <nav className = "navbar navbar-dark">
                        <span className = "display-5 mb-0 h1" style = {{color: 'white'}}> CODECHEF </span>
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