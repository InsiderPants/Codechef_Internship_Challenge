import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';

class Login extends Component
{
    isAuthenticated = () => {
        let token = window.localStorage.getItem('accessToken');
        if(token == null || token.length === 0) return false;
        else return true;
    }

    loginButtonClick = () =>
    {
        const params = {
            response_type: "code",
            client_id: "b95126500791d884442d2700950f0e1b",
            redirect_api: "http://localhost:8000/",
            state: "hello",
        }

        let query = new URLSearchParams(params).toString();
        let url = "https://api.codechef.com/oauth/authorize?" + query;
        window.location.href = url;
    }

    UNSAFE_componentWillMount()
    {
        if(this.isAuthenticated()) return;

        let params = new URLSearchParams(this.props.location.search);
        let authCode = params.get("code");

        if(authCode == null || authCode.length === 0) return;
        
        let url = "/api/index.php?code=" + authCode;
        axios.get(url)
            .then(res => {
                let accessToken = res.data.accessToken;
                let refreshToken = res.data.refreshToken;
                window.localStorage.setItem("accessToken", accessToken);
                window.localStorage.setItem("refreshToken", refreshToken);
                this.props.history.push('/contest');
            })
            .catch(err => console.log(err))
    }

    render() 
    {
        if(this.isAuthenticated()) return <Redirect to = '/contest' />
        else return (
            <div className = "container-xl" style = {{height: '70vh'}}>
                <div className = "d-flex justify-content-center mt-5" ><button className = "btn btn-outline-dark btn-lg my-0" onClick = {this.loginButtonClick} > Login </button></div>
            </div>
        ) 
    }
}

export default withRouter(Login);