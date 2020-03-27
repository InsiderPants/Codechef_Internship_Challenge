import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Problem extends Component
{
    constructor()
    {
        super();
        this.state = {
            // contestID: "LTIME71A",
            contestID: "-1",
            problemDetails: {
                // problemCode: 'R2D2',
                problemCode: '-1',
                // problemName: 'The Last Droid',
                problemName: 'Loading...',
                dateAdded: '2019-04-25',
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
                sourceSizeLimit: 50000,
                maxTimeLimit: 4,
                challengeType: 'subtask',
                author: 'farhod_farmon',
                successfulSubmissions: 33,
                totalSubmissions: 37,
                partialSubmissions: 32,
                tags: [],
                // body: '### Read problem statements in [Hindi](http://www.codechef.com/download/translated/LTIME71/hindi/R2D2.pdf), [Bengali](http://www.codechef.com/download/translated/LTIME71/bengali/R2D2.pdf), [Mandarin Chinese](http://www.codechef.com/download/translated/LTIME71/mandarin/R2D2.pdf), [Russian](http://www.codechef.com/download/translated/LTIME71/russian/R2D2.pdf), and [Vietnamese](http://www.codechef.com/download/translated/LTIME71/vietnamese/R2D2.pdf) as well.<br /><br />The droid R2-D2 is travelling in space with a special mission. In space, there are $N$ planets (numbered $1$ through $N$) and $M$ bidirectional space highways. Each space highway connects two planets and in order to use it, R2-D2 needs to have a sufficiently high *status level*.<br /><br />The droid’s mission consists of $Q$ stages. In each stage, there are two planets $x$ and $y$ such that the droid should start the stage at planet $x$ with some initial status level $L$ ($L \\ge 0$) and travel to planet $y$. For each valid $i$, when R2-D2 is at planet $i$ (including the initial planet $x$), he may increase his status level by $A_i$; it is not allowed to increase the status level multiple times on the same planet in the same stage. Find the minimum value of $L$ such that it is possible for R2-D2 to reach planet $y$ or determine that it is impossible to reach planet $y$ for any $L$.<br /><br />Note that the level R2-D2 has at the end of each stage is not carried over to the next stages (he may start the next stage with a lower initial status level).<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains two space-separated integers $N$ and $M$.<br />- The second line contains $N$ space-separated integers $A_1, A_2, \\ldots, A_N$.<br />- Each of the following $M$ lines contains three space separated integers $U$, $V$ and $W$ denoting that there is a space highway between planets $U$ and $V$ and R2-D2 may use this highway only if his status level is at least $W$.<br />- The next line contains a single integer $Q$.<br />- The following $Q$ lines describe stages. Each of these lines contains two space-separated integers $x$ and $y$.<br /><br />### Output<br />For each stage, print a single line containing one integer ― the minimum status level required to complete the stage, or $-1$ if it is impossible to complete this stage.<br /><br />### Constraints <br />- $1 \\le T \\le 100$<br />- $1 \\le N, M, Q \\le 10^5$<br />- $0 \\le A_i \\le 10^9$ for each valid $i$<br />- $0 \\le W \\le 10^9$<br />- $1 \\le U, V, x, y \\le N$<br />- the sum of $N$ over all test cases does not exceed $400,000$<br />- the sum of $M$ over all test cases does not exceed $400,000$<br />- the sum of $Q$ over all test cases does not exceed $400,000$<br /><br />### Subtasks<br />**Subtask #1 (12 points):**<br />- $N, Q \\le 1,000$<br />- $M \\le 1,200$<br />- the sum of $N$ over all test cases does not exceed $4,000$<br />- the sum of $M$ over all test cases does not exceed $4,000$<br />- the sum of $Q$ over all test cases does not exceed $4,000$<br /><br />**Subtask #2 (28 points):** $A_i = 0$ for each valid $i$<br /><br />**Subtask #3 (60 points):** original constraints<br /><br />### Example Input<br />```<br />1<br />6 5<br />1 3 1 2 0 0<br />1 2 4<br />1 3 2<br />1 4 3<br />3 4 5<br />3 5 7<br />4<br />2 2<br />1 5<br />5 1<br />3 6<br />```<br /><br />### Example Output<br />```<br />0<br />1<br />7<br />-1<br />```<br /><br />### Explanation<br />In the second stage, R2-D2 can travel through planets $1 \\rightarrow 3 \\rightarrow 1 \\rightarrow 4 \\rightarrow 1 \\rightarrow 2 \\rightarrow 1 \\rightarrow 3 \\rightarrow 5$.<br />'
                body: 'Loading....',
            },
            auth_code: "Bearer 1e0d9418c2f66a4b95927e67d9bba8c407862ba0",
        }
    }

    handleSubmitClick = () =>
    {        
        this.props.history.push(this.props.match.url + '/submit');
    }

    UNSAFE_componentWillMount()
    {
        // return;
        let contestID = this.props.match.params.contestID;
        let problemID = this.props.match.params.problemID;

        this.setState({contestID: contestID});
        
        const url = "https://api.codechef.com/contests/" + contestID + "/problems/" + problemID;
        const header = {
            Authorization: this.state.auth_code,
            Accept: 'application/json',
        };
        axios.get(url, {headers: header})
            .then(res => {
                let data = res.data.result.data.content;
                this.setState({problemDetails: data});
            })
            .catch(err => console.log(err))
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