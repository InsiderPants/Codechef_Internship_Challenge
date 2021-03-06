// libraries
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Problem extends Component
{
    constructor()
    {
        super();
        this.state = {
            contestID: "-1",                    // contest ID
            problemDetails: {                   // problem details
                problemCode: '-1',              
                problemName: 'Loading...',
                dateAdded: '1980-01-01',
                languagesSupported: [
                  'C++ 6.3',
                  'PAS gpc',
                  'PERL',
                  'PYTH',
                  'FORT',
                  'WSPC',
                  'ADA',
                  'CAML',
                  'ICK',
                  'JAVA',
                  'C',
                  'BF',
                  'ASM',
                  'CLPS',
                  'PRLG',
                  'ICON',
                  'RUBY',
                  'SCM qobi',
                  'PIKE',
                  'D',
                  'HASK',
                  'PAS fpc',
                  'ST',
                  'NICE',
                  'LUA',
                  'C#',
                  'BASH',
                  'PHP',
                  'NEM',
                  'LISP sbcl',
                  'LISP clisp',
                  'SCM guile',
                  'JS',
                  'ERL',
                  'TCL',
                  'SCALA',
                  'C++ 4.3.2',
                  'C++14',
                  'KTLN',
                  'PERL6',
                  'NODEJS',
                  'TEXT',
                  'swift',
                  'rust',
                  'SCM chicken',
                  'PYPY',
                  'PYPY3',
                  'CLOJ',
                  'GO',
                  'PYTH 3.6',
                  'R',
                  'COB',
                  'F#'
                ],
                sourceSizeLimit: 0,
                maxTimeLimit: 0,
                challengeType: 'subtask',
                author: 'name',
                successfulSubmissions: 0,
                totalSubmissions: 0,
                partialSubmissions: 0,
                tags: [],
                body: 'Loading....',
            },
        }
    }

    // for clicking submit button
    handleSubmitClick = () =>
    {        
        this.props.history.push(this.props.match.url + '/submit');
    }

    // for setting state and fetching details
    UNSAFE_componentWillMount()
    {
        let contestID = this.props.match.params.contestID;
        let problemID = this.props.match.params.problemID;

        this.setState({contestID: contestID});
        
        const url = "https://api.codechef.com/contests/" + contestID + "/problems/" + problemID;
        axios.get(url)      // problem details fetch
            .then(res => {
                let data = res.data.result.data.content;
                this.setState({problemDetails: data});
            })
            .catch(err => {
                if(err.response.status === 401)
                {
                    window.localStorage.removeItem("accessToken");
                    window.localStorage.removeItem("refreshToken");
                    delete axios.defaults.headers.common["Authorization"];
                    this.props.history.push('/');
                }
                else console.log(err);
            })
    }

    render() 
    {
        return (
            <div className = "container-xl p-1 py-2" style = {{border: '1px solid black'}}>
                <ol className = "breadcrumb mx-1 my-1">
                    <li className = "breadcrumb-item" style = {{textDecoration: 'underline', cursor: 'pointer'}} onClick = {e => this.props.history.push('/contest')}> Home </li>
                    <li className = "breadcrumb-item" style = {{textDecoration: 'underline', cursor: 'pointer'}} onClick = {e => this.props.history.push('/contest/' + this.state.contestID)}>{this.state.contestID} </li>
                    <li className = "breadcrumb-item active">{this.state.problemDetails.problemCode} </li>
                </ol>
                <div className = "card" style = {{width: "100%"}}>
                    <div className = "card-header">
                        {this.state.problemDetails.problemName}
                    </div>
                    <div className = "card-body">
                        <div className = "row justify-content-around">
                            <div className = "col-7">
                                <div dangerouslySetInnerHTML = {{__html: this.state.problemDetails.body}} />
                                <div className = "mt-5 px-5 py-2 row justify-content-around"><button className = "btn btn-outline-primary btn-sm ml-0" onClick = {e => this.handleSubmitClick()}> Submit </button></div>
                            </div>
                            <div className = "col-4">
                                <div className = "card">
                                    <div className = "card-body">
                                        <h5 className = "card-title"> Submit </h5>
                                        <p className = "card-text"> Submit Here. </p>
                                        <button className = "btn btn-outline-primary btn-sm ml-0" onClick = {e => this.handleSubmitClick()}> Submit </button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default withRouter(Problem);