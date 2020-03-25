import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Contest extends Component
{
    constructor()
    {
        super();
        this.state = {
            contestCode: "",
            contestDetails: {},
            problemsList: [],
            auth_code: 'Bearer 532af8989d132834cff90adf2ab728db97684472', // change this

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
        this.setState({contestCode: id});
        let url = "https://api.codechef.com/contests/" + id;   
        
        const header = {
            Authorization: this.state.auth_code,
            Accept: 'application/json',
        };
        
        axios.get(url, {headers: header})
            .then(res => {   
                let temp = res.data.result.data.content;
                
                if(temp.problemsList.length === 0) return;
                
                let t3 = this.state.problemsList;
                for(var i = 0; i < temp.problemsList.length; i++)
                {
                    let code = temp.problemsList[i].problemCode;
                    let url2 = (url + '/problems/' + code);                    
                    
                    axios.get(url2, {headers: header})
                    .then(res2 => {
                        let t2 = res2.data.result.data.content.problemName;
                        t3.push(t2);                            
                    })
                    .catch(err => console.log(err))
                }                    
                this.setState({contestDetails: temp});
                this.setState({
                    problemsList: t3,
                })
            })
            .catch(err => {
                console.log(err);
            })        
    }

    UNSAFE_componentWillMount()
    {
        const id = this.props.match.params.contestID; 
        this.updateIT(id);
    }

    render()
    {
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
                    <table className = "table table-hover">
                        <thead>
                            <tr>
                                <th scope = "col">Name</th>
                                <th scope = "col">Code</th>
                                <th scope = "col">Successful Submission</th>
                                <th scope = "col">Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                console.log(this.state.contestDetails.problemsList)
                            }
                            {/* {this.state.contestDetails.problemsList.map((val, i) => 
                                <tr>
                                    <th> {this.state.problemsList[i]} </th>
                                    <th> {val.problemCode} </th>
                                    <th> {val.successfulSubmissions} </th>
                                    <th> {val.accuracy} </th>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                </div>      
                <div className = "col-4">
                    others    
                </div>          
            </div>
        );
        return (
            <div className = "container-xl p-1 py-2" style = {{border: '1px solid black'}}>
                <div className = "card" style = {{width: "100%"}}>
                    <img className = "card-img-top" src = {this.state.contestDetails.bannerFile} />
                    <div className = "card-body py-4">
                        <h5 className = "card-title mb-0"> {this.state.contestDetails.name} </h5>
                    </div>
                </div>    
                <hr className = "my-2"/>

                {this.state.contestDetails.isParent ? dual_mode : body}
            </div>
        );
    }
}

export default withRouter(Contest);

