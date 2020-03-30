// Libraries
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class SearchContest extends Component
{
    constructor()
    {
        super();
        this.state = {
            query: "",          //for the search query
            allContests: [],    //contest array that would be fetched 
            contests: [],       //selected contest that should be displayed
            selected: -1,       //id of highlighted contest
            no_result: 0,       //variable for no contests
        }
    }

    //input handler
    handleQueryInput = (e) => {
        this.setState({
            query: e.target.value,
            selected: -1,
        })       
        
        if(e.target.value.length === 0)
        {
            this.setState({contests: []});
            return;
        }

        //update the contests array;
        let temp = [];
        for(let t of this.state.allContests)
        {
            if(temp.length >= 10) break;
            let t1 = t.code.toLowerCase().includes(e.target.value.toLowerCase()); //checking if contest name or code have search query as substring
            let t2 = t.name.toLowerCase().includes(e.target.value.toLowerCase());
            if(t2 === true || t1 === true)
            {                
                temp.push(t);
            }
        }
        // no result
        if(temp.length === 0) 
        {
            let t1 = {code: "-1", name: "No results"}
            temp.push(t1);
        }
        this.setState({contests: temp});
    }

    keypressInSearch = (event) => {
        //keyboard keydown event handler
        if(event.key === 'Enter')
        {            
            //ENTER key for searching
            if(this.state.query.length !== 0)
            {
                this.redirect_to_contest();
                this.setState({query: ""});
            }
            event.preventDefault();
        }
        else if(event.key === 'ArrowDown')
        {
            //DOWN key            
            let valnow = this.state.selected;
            valnow++;
            valnow %= this.state.contests.length;
            this.setState({
                selected: valnow,
                query: this.state.contests[valnow].name,
            })
            event.preventDefault();
        }
        else if(event.key === 'ArrowUp')
        {
            //UP key
            let valnow = this.state.selected;
            valnow--;
            if(valnow < 0) valnow = this.state.contests.length - 1;
            this.setState({
                selected: valnow,
                query: this.state.contests[valnow].name,
            })
            event.preventDefault();
        }
    }

    //redirect to selected contest;
    redirect_to_contest = () => {
        if(this.state.contests[this.state.selected].code === "-1")
        {
            this.setState({no_result: 1});
        }
        else
        {
            this.setState({query: this.state.contests[this.state.selected]});
            let temp = this.state.contests[this.state.selected].code;            
            this.props.history.push('/contest/' + temp);  // redirects to contest page
        }
    }

    // for setting state from mounting components
    UNSAFE_componentWillMount = () =>
    {
        axios.get('https://api.codechef.com/contests') // requesting contest array from codechef
            .then(res => {
                let temp = res.data.result.data.content.contestList;                                
                this.setState({allContests: temp});
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
            });
    }

    render() 
    {
        return (
            <div className = "container-xl jumbotron" style = {{height: "100vh"}}>
                <div>
                    <h1 className = "display-3"> Start Competing Now!</h1>
                    <br/>
                    <p className = "lead">Codechef provides very competitive programming contest. Almost everyone with some programming knowledge can compete here.</p>
                    <hr className = "my-4"></hr>
                </div>
                <div className = "input-group mb-0" >
                    <input 
                        type = "text" 
                        className = "form-control" 
                        placeholder = "Contest Name, Contest ID, start date etc." 
                        onKeyDown = {this.keypressInSearch}
                        onChange = {e => this.handleQueryInput(e)} 
                        value = {this.state.query}
                    />
                    <div className = "input-group-append" onClick = {this.onSearchClick}>
                        <button className = "btn btn-outline-secondary" type="button" >Search Contests</button>
                    </div>
                </div>
                <div className = "list-group mt-0">
                    {this.state.contests.map((contest_name, i) => 
                        <div 
                            className = {i === this.state.selected ? "active list-group-item list-group-item-action" : "list-group-item list-group-item-action"} 
                            onMouseEnter = {() => {
                                this.setState({selected: i});
                            }}
                            onClick = {this.redirect_to_contest}
                            style = {{cursor: "pointer"}}
                            key = {i}
                        > 
                            {contest_name.name}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(SearchContest);