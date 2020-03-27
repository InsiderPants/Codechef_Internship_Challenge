import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Timer from './timer';

class Contest extends Component
{
    constructor()
    {
        super();
        this.state = {
            contestCode: "",
            contestDetails: {
                code: 'LTIME71A',
                name: 'April Lunchtime 2019 Division 1',
                startDate: '2019-04-27 19:30:00',
                endDate: '2019-04-27 22:30:00',
                isParent: false,
                children: [],
                bannerFile: 'https://www.codechef.com/download/small-banner/LTIME71A/1556198802.jpg',
                freezingTime: 0,
                announcements: '&lt;p&gt;14:30, 15th October 2017: The exam is extended by 10 minutes.&lt;br /&gt;&lt;b&gt;&lt;br /&gt;The problem weightages are given below in rules section.&lt;/b&gt;&lt;/p&gt;\r\n&lt;p&gt;The content of Recent Activity block from exam page has been made inaccessible. In case if you try to access it, you will get an error stating&nbsp;&lt;b&gt;&quot;You are not allowed to check this contest. Please reload&quot;&lt;/b&gt;. Please ignore the error and continue with your exam.&lt;/p&gt;\r\n&lt;p&gt;14:44, 15th October 2017: Problem accuracy will not be displayed. It has been restricted for this exam.&lt;/p&gt;\r\n&lt;p&gt;Also, the score shown on the exam page is not final. It is subject to change after final verification.&lt;/p&gt;\r\n&lt;p&gt;Additionally, you cannot leave the exam hall before 3:30 pm.&lt;/p&gt;',
                problemsList: [
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'R2D2',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 3,
                    accuracy: 3.1746031746031744
                  },
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'ATTND',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 6,
                    accuracy: 100
                  },
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'DRMP',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 75,
                    accuracy: 7.096774193548387
                  },
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'FAPF',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 188,
                    accuracy: 33.45132743362832
                  },
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'FASTFOOD',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 4,
                    accuracy: 66.66666666666666
                  },
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'MINARRS',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 304,
                    accuracy: 57.765151515151516
                  },
                  {
                    viewStart: '2019-04-27 19:30:00',
                    submitStart: '2019-04-27 19:30:00',
                    visibleStart: '2019-04-27 22:30:00',
                    end: '2019-04-27 22:30:00',
                    problemCode: 'CHEFRAMI',
                    contestCode: 'LTIME71A',
                    successfulSubmissions: 39,
                    accuracy: 11.370262390670554
                  }
                ],
                currentTime: 1585197835,
            },
            problemsName: ["The Last Droid", "Attendance", "Dream Problem", "Firdavs and Planet F", "Fast Food", "Minimum Sum", "Chef Rami and Inventions"],
            // problemsName: new Map(),
            recentSubmissions: [
                {
                  id: 24108667,
                  date: '2019-04-27 22:29:55',
                  language: 'C++14',
                  username: 'filyan',
                  problemCode: 'R2D2',
                  contestCode: 'LTIME71A',
                  result: 'AC',
                  score: '28',
                  time: 1.35,
                  memory: 29816
                },
                {
                  id: 24108664,
                  date: '2019-04-27 22:29:54',
                  language: 'C++14',
                  username: 'kazuma',
                  problemCode: 'R2D2',
                  contestCode: 'LTIME71A',
                  result: 'AC',
                  score: '12',
                  time: 0.06,
                  memory: 15384
                },
                {
                  id: 24108663,
                  date: '2019-04-27 22:29:53',
                  language: 'C++14',
                  username: 'jam1729',
                  problemCode: 'DRMP',
                  contestCode: 'LTIME71A',
                  result: 'AC',
                  score: '40',
                  time: 0,
                  memory: 15360
                },
                {
                  id: 24108661,
                  date: '2019-04-27 22:29:52',
                  language: 'C++14',
                  username: 'walragatver',
                  problemCode: 'DRMP',
                  contestCode: 'LTIME71A',
                  result: 'TLE',
                  score: '0',
                  time: 0.88,
                  memory: 15240
                },
                {
                  id: 24108660,
                  date: '2019-04-27 22:29:52',
                  language: 'C++14',
                  username: 'faustaadp',
                  problemCode: 'R2D2',
                  contestCode: 'LTIME71A',
                  result: 'AC',
                  score: '28',
                  time: 0.4,
                  memory: 64616
                },
                {
                  id: 24108659,
                  date: '2019-04-27 22:29:51',
                  language: 'C++14',
                  username: 'harshit_narula',
                  problemCode: 'FAPF',
                  contestCode: 'LTIME71A',
                  result: 'RTE',
                  score: '0',
                  time: 0,
                  memory: 0
                },
                {
                  id: 24108658,
                  date: '2019-04-27 22:29:51',
                  language: 'C++14',
                  username: 'aasom143',
                  problemCode: 'DRMP',
                  contestCode: 'LTIME71A',
                  result: 'WA',
                  score: '0',
                  time: 0,
                  memory: 0
                },
                {
                  id: 24108656,
                  date: '2019-04-27 22:29:50',
                  language: 'C++14',
                  username: 'vagab0nd',
                  problemCode: 'FAPF',
                  contestCode: 'LTIME71A',
                  result: 'WA',
                  score: '0',
                  time: 0,
                  memory: 0
                },
                {
                  id: 24108649,
                  date: '2019-04-27 22:29:46',
                  language: 'C++14',
                  username: 'usurelul',
                  problemCode: 'CHEFRAMI',
                  contestCode: 'LTIME71A',
                  result: 'WA',
                  score: '0',
                  time: 0,
                  memory: 0
                },
                {
                  id: 24108645,
                  date: '2019-04-27 22:29:45',
                  language: 'C++14',
                  username: 'jeezus',
                  problemCode: 'DRMP',
                  contestCode: 'LTIME71A',
                  result: 'WA',
                  score: '0',
                  time: 0,
                  memory: 0
                }
              ],
            selectedProblem: 0,
            auth_code: 'Bearer b84cb21b3314606c35b43c0b6d61a9b6e6f800d9', // change this
        };
    }    

    handleMultipleDivCLick = (num) =>
    {        
        if(num === 0)
        {
            let newID = this.state.contestCode + 'A';
            let newURL = this.props.match.params.contestID + 'A';
            this.props.history.push(newURL);
            this.updateIT(newID);
        }
        else if(num === 1)
        {
            let newID = this.state.contestCode + 'B';
            let newURL = this.props.match.params.contestID + 'B';
            this.props.history.push(newURL);
            this.updateIT(newID);
        }
    }

    updateIT = (id) =>
    {      
        // return; 
        this.setState({contestCode: id});
        console.log(id);
        
        let url = "https://api.codechef.com/contests/" + id;   
        
        const header = {
            Authorization: this.state.auth_code,
            Accept: 'application/json',
        };
        
        let temp;
        let t3 = [];
        axios.get(url, {headers: header})
            .then(res => {   
                temp = res.data.result.data.content;
                if(temp.problemsList.length === 0) return;
                
                for(var i = 0; i < temp.problemsList.length; i++)
                {
                    let code = temp.problemsList[i].problemCode;
                    let url2 = (url + '/problems/' + code);                    
                    
                    axios.get(url2, {headers: header})
                    .then(res2 => {
                        let t2 = res2.data.result.data.content.problemName;
                        t3.push(t2);               
                    })
                    .catch(err => {t3.push(err); console.log(err);})
                }    
            })
            .then(() => {
                this.setState({contestDetails: temp});
                this.setState({
                    problemsName: t3,
                })
            })
            .catch(err => {
                console.log(err);
            })  
            
        let url2 = "https://api.codechef.com/submissions/"
        axios.get(url2, {
            headers: header,
            params: {contestCode: id}
        })
        .then(res => {            
            this.setState({recentSubmissions: res.data.result.data.content})
        })
        .catch(err => console.log(err))
    }

    handleProblemClick = (i) => {
        let url = this.props.match.url + "/problem/" + i;
        this.props.history.push(url);
    }

    UNSAFE_componentWillMount()
    {
        const id = this.props.match.params.contestID; 
        this.updateIT(id);
    }

    render()
    {
        console.log(this.state.problemsName);
        
        const dual_mode = (
            <div className = "row justify-content-around">
            <div className = "card" style = {{width: "46%"}}>
                <div className = "card-body">
                    <h5 className = "card-title"> Div.1 </h5>
                    <p className = "card-text">When your rating is higher than 1800, you have to participate in Div. 1</p>
                    <button type = "button" className = "btn btn-primary m-0" onClick = {e => this.handleMultipleDivCLick(0)}> Here goes Div1. </button>
                </div>
            </div>
            <div className = "card" style = {{width: "46%"}}>
                <div className = "card-body">
                    <h5 className = "card-title"> Div.2 </h5>
                    <p className = "card-text">When your rating is less than 1800, you have to participate in Div. 2</p>
                    <button type = "button" className = "btn btn-primary" onClick = {e => this.handleMultipleDivCLick(1)}> Here goes Div2. </button>
                </div>
            </div>
            </div>
        );

        const body = (
            <div className = "row justify-content-around">
                <div className = "col-7">
                    <table className = "table table-responsive-xl table-hover">
                        <thead>
                            <tr>
                                <th scope = "col">Name</th>
                                <th scope = "col">Code</th>
                                <th scope = "col">Successful Submission</th>
                                <th scope = "col">Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contestDetails.problemsList.map((val, i) => {
                                let problemCode = val.problemCode;
                                console.log(problemCode);
                                console.log(this.state.problemsName[0]);
                                console.log(this.state.problemsName.length);                                
                                return (
                                    <tr key = {i} onClick = {e => this.handleProblemClick(problemCode)} style = {{cursor: 'pointer'}}>
                                        <td> {this.state.problemsName[i]} </td>
                                        <td> {val.problemCode} </td>
                                        <td className = "text-center"> {val.successfulSubmissions} </td>
                                        <td> {Math.round((val.accuracy + Number.EPSILON) * 100) / 100} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>      
                <div className = "col-4">
                    <Timer currentTime = {this.state.contestDetails.currentTime} startTime = {this.state.contestDetails.startDate} endTime = {this.state.contestDetails.endDate} />
                    <div className = "card">
                        <div className = "card-body">
                            <h5 className = "card-title"> Rankings </h5>
                            <p className = "card-text"> Check the ranking of this contest here. </p>
                            <button className = "btn btn-outline-primary btn-sm ml-0"> Rankings </button>
                        </div>
                    </div> 

                    <div className = "accordion mt-4" id = "accordionExample">
                        <div className = "card">
                            <div className = "card-header" id = "headingOne">
                                <h2 className = "mb-0">
                                    <button className = "btn btn-link" type = "button" data-toggle = "collapse" data-target = "#collapseOne" aria-expanded = "false" aria-controls = "collapseOne">
                                        Recent Submissions
                                    </button>
                                </h2>
                            </div>

                            <div id ="collapseOne" className = "collapse" aria-labelledby = "headingOne" data-parent = "#accordionExample">
                                {this.state.recentSubmissions.map((val, i) => {
                                    let name = val.username;
                                    let code = val.problemCode;
                                    let verdict = val.result;

                                    return (
                                        <div key = {i}>
                                            <div className = "card-body py-3 px-2">
                                                <div className = "row">
                                                    <div className = "col-5"> {name} </div>
                                                    <div className = "col-4 btn-link" style = {{cursor: 'pointer'}} onClick = {e => this.handleProblemClick(code)}> {code} </div>
                                                    <div className = "col-3"> {verdict} </div>
                                                </div>
                                            </div>
                                            <hr className = "m-0" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        );
        return (
            <div className = "container-xl p-1 py-2" style = {{border: '1px solid black', height: '170vh'}}>
                <ol className = "breadcrumb mx-1 my-1">
                    <li className = "breadcrumb-item"> <div style = {{textDecoration: 'underline', cursor: 'pointer'}} onClick = {e => this.props.history.push('/contest')}> Home </div> </li>
                    <li className = "breadcrumb-item active"> {this.state.contestDetails.code} </li>
                </ol>
                <div className = "card" style = {{width: "100%"}}>
                    <img className = "card-img-top" src = {this.state.contestDetails.bannerFile} alt = "Contest Banner"/>
                    <div className = "card-body py-4">
                        <h5 className = "card-title mb-0"> {this.state.contestDetails.name} </h5>
                    </div>
                </div>    
                <hr className = "my-3"/>

                {this.state.contestDetails.isParent ? dual_mode : body}
            </div>
        );
    }
}

export default withRouter(Contest);

