import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Submit extends Component
{
    constructor()
    {
        super();
        this.state = {
            contestID: "LTIME71A",          // contestID
            problemID: "R2D2",              // problem ID
            supportedLanguages: [
                "C++ 6.3",
                "PAS gpc",
                "PERL",
                "PYTH",
                "FORT",
                "WSPC",
                "ADA",
                "CAML",
                "ICK",
                "JAVA",
                "C",
                "BF",
                "ASM",
                "CLPS",
                "PRLG",
                "ICON",
                "RUBY",
                "SCM qobi",
                "PIKE",
                "D",
                "HASK",
                "PAS fpc",
                "ST",
                "NICE",
                "LUA",
                "C#",
                "BASH",
                "PHP",
                "NEM",
                "LISP sbcl",
                "LISP clisp",
                "SCM guile",
                "JS",
                "ERL",
                "TCL",
                "SCALA",
                "C++ 4.3.2",
                "C++14",
                "KTLN",
                "PERL6",
                "NODEJS",
                "TEXT",
                "swift",
                "rust",
                "SCM chicken",
                "PYPY",
                "PYPY3",
                "CLOJ",
                "GO",
                "PYTH 3.6",
                "R",
                "COB",
                "F#"
              ],
            // supported languages
            selected: 'C++ 6.3',            // selected language for code
            code: "",                       // code
            input: "",                      // custom inputs
            output: "",                     // output for custom inputs
            statusCode: 0,                  // status code for runtime errors
            time_taken: 0,                  // time taken by code
            memory_used: 0,                 // memory used
        }
    }
    

    UNSAFE_componentWillMount()
    {
        let c1 = this.props.match.params.contestID;
        let c2 = this.props.match.params.problemID;

        this.setState({
            contestID: c1, 
            problemID: c2,
        })
        
        const url = "https://api.codechef.com/contests/" + c1 + "/problems/" + c2;
        axios.get(url)
            .then(res => {                
                this.setState({supportedLanguages: res.data.result.data.content.languagesSupported});
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

    // on clicking submit button, just mocking it
    handleSubmitClick = () =>
    {
        window.alert("WRONG");
    }

    // runing custom test
    handleRunClick = () =>
    {
        this.setState({output: "Running...."})
        let data = {
            sourceCode: this.state.code,
            language: this.state.selected,
            input: this.state.input,
        }

        let url = "https://api.codechef.com/ide/run";
        let url2 = "https://api.codechef.com/ide/status";  

        let link;   // submission link
        axios.post(url, data)       // submiting code in queue for running
            .then(res => {
                link = res.data.result.data.link;
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

        let t1 = 0, t2 = 0, t3 = 0, t4 = "", t5 = "";
        let t11 = setInterval(() => // checking every 5 seconds if the code has been code running as codechef hasn't provided and socket connecting
            axios.get(url2, {params: {link: link}})
                .then(res2 => {                   
                    let time_taken = res2.data.result.data.time;
                    let signal = res2.data.result.data.signal;
                    let memory_used = res2.data.result.data.memory;
                    let output = res2.data.result.data.output;
                    let cmp_info = res2.data.result.data.cmpinfo;
                    
                    if(t1 !== time_taken || t2 !== signal || t3 !== memory_used || t4 !== output || t5 !== cmp_info)  // if any default values changes, we know that running of code os done
                    {
                        if(cmp_info.length > 0)
                        {
                            this.setState({
                                time_taken: time_taken,
                                statusCode: signal,
                                memory_used:memory_used,
                                output: cmp_info,
                            })
                        }
                        else if(output.length > 0)
                        {
                            this.setState({
                                time_taken: time_taken,
                                statusCode: signal,
                                memory_used:memory_used,
                                output: output,
                            })
                        }
                        else if(signal !== 0)
                        {
                            this.setState({
                                time_taken: time_taken,
                                statusCode: signal,
                                memory_used:memory_used,
                                output: signal,
                            })
                        }
                        else
                        {
                            this.setState({
                                time_taken: time_taken,
                                statusCode: signal,
                                memory_used:memory_used,
                                output: "",
                            })
                        }
                        clearInterval(t11);
                    }
                    
                })
                .catch(err => {
                    if(err.response.status === 401)
                    {
                        window.localStorage.removeItem("accessToken");
                        window.localStorage.removeItem("refreshToken");
                        delete axios.defaults.headers.common["Authorization"];
                        clearInterval(t11);
                        this.props.history.push('/');
                    }
                    else console.log(err);
                }), 5000
        );
    }

    render() 
    {
        return (
            <div className = "container-xl p-1 py-2" style = {{border: '1px solid black'}}>
                <ol className = "breadcrumb mx-1 my-1">
                    <li className = "breadcrumb-item" style = {{textDecoration: 'underline', cursor: 'pointer'}} onClick = {e => this.props.history.push('/contest')}> Home </li>
                    <li className = "breadcrumb-item" style = {{textDecoration: 'underline', cursor: 'pointer'}} onClick = {e => this.props.history.push('/contest/' + this.state.contestID)}>{this.state.contestID} </li>
                    <li className = "breadcrumb-item" style = {{textDecoration: 'underline', cursor: 'pointer'}} onClick = {e => this.props.history.push('/contest/' + this.state.contestID + '/problem/' + this.state.problemID)}>{this.state.problemID} </li>
                    <li className = "breadcrumb-item active">Submit </li>
                </ol>
                <hr className = "my-2" />
                <div className = "row justify-content-center">
                    <div className = "form-group col-8 mx-0">
                        <textarea className = "form-control" rows = "20" placeholder = "Type/Copy your code here" value = {this.state.code} onChange = {e => this.setState({code: e.target.value})}></textarea>
                    </div>
                    <div className = "form-group col-4 mx-0 mb-0">
                        <textarea className = "form-control" rows = "5" placeholder = "Input here" value = {this.state.input} onChange = {e => this.setState({input: e.target.value})}></textarea>
                        <br/>
                        <textarea readOnly className = "form-control" rows = "5" value = {this.state.output} onChange = {e => this.setState({output: e.target.value})} style = {{overflow: 'scroll', overflowX: 'hidden'}}></textarea>
                        <br/>
                        <button className = "btn btn-outline-primary btn-sm mx-2 mb-4" onClick = {e => this.handleRunClick()}> Run </button>
                    </div>
                </div>
                <div className = "btn-group">
                    <select className = "mx-2 mb-4" onChange = {(e) => this.setState({selected: e.target.value})}>
                        {this.state.supportedLanguages.map((val, i) => {
                            return (<option key = {i} > {val}</option>);
                        })}
                    </select>
                </div>
                <br/>
                <button className = "btn btn-outline-primary btn-sm mx-2 mb-4" onClick = {e => this.handleSubmitClick()}> Submit </button>
            </div>
        );
    }
}

export default withRouter(Submit);