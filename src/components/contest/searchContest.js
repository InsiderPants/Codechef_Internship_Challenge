import React, {Component} from 'react';

class searchContest extends Component
{
    constructor()
    {
        super();
        this.state = {
            query: "",
            contests: ["November Lunchtime", "March Long Challenge", "April CookOff"],
            selected: -1, 
        }
    }

    handleQueryInput = (e) => {
        this.setState({
            query: e.target.value,
        })
    }

    onSearchClick = () => {
        //do the backend request of search

    }

    keypressInSearch = (event) => {
        if(event.key === 'Enter')
        {            
            if(this.state.query.length !== 0)
            {
                this.onSearchClick();
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
                query: this.state.contests[valnow],
            })
            event.preventDefault();
        }
        else if(event.key == 'ArrowUp')
        {
            //UP key
            let valnow = this.state.selected;
            valnow--;
            if(valnow < 0) valnow = this.state.contests.length - 1;
            this.setState({
                selected: valnow,
                query: this.state.contests[valnow],
            })
            event.preventDefault();
        }
    }

    redirect_to_contest = () => {
        //redirect to selected contest;
    }

    render() 
    {

        return (
            <div className = "container jumbotron" style = {{height: "100vh"}}>
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
                        value = {this.state.query}
                        onKeyDown = {this.keypressInSearch}
                        onChange = {e => this.handleQueryInput(e)} 
                    />
                    <div className = "input-group-append" onClick = {this.onSearchClick}>
                        <button className = "btn btn-outline-secondary" type="button" >Search Contests</button>
                    </div>
                </div>
                <div className = "list-group mt-0">
                    {this.state.contests.map((contest_name, i) => 
                        <div 
                            className = {i === this.state.selected ? "active list-group-item list-group-item-action" : "list-group-item list-group-item-action"} 
                            onClick = {this.redirect_to_contest}
                            style = {{cursor: "pointer"}}
                            key = {i}
                        > 
                            {contest_name} 
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default searchContest;