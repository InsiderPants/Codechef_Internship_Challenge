//libraries
import React, {Component} from 'react';
import * as moment from 'moment';

class Timer extends Component 
{
    constructor()
    {
        super();
        this.state = { 
            currentTime: 1,         // current time of server in unix style formating
            startTime: 1,           // start time of contest
            endTime: 200,           // end time of contest
            difference: 0,          // difference between the current time and end time aka remaining time
            v: 1,                   // setInterval variable for clearing it
        }   
    }

    // setting the state and calculating remaining time
    UNSAFE_componentWillMount = () =>
    {
        let ct = this.props.currentTime;
        let st = moment(this.props.startTime).unix();
        let et = moment(this.props.endTime).unix();
        let diff = et - ct;
        
        this.setState({
            currentTime: ct,
            startTime: st,
            endTime: et,
            difference: diff,
        })
    }

    // changing it;
    componentDidMount()
    {
        let v = setInterval(this.updateTime, 1000);
        this.setState({v: v})
    }

    // clearing the setInterval
    componentWillUnmount()
    {
        clearInterval(this.state.v);
    }

    // subtracting time by 1 and increasing current time by 1;
    updateTime = () =>
    {
        let t1 = this.state.difference - 1;
        this.setState({difference: t1, currentTime: this.state.currentTime + 1});   
    }

    render() 
    {
        return (
            <div className = "card mb-4">
                <div className = "card-body">
                    {
                        this.state.difference <= 0
                        ?
                        <h5 className = "card-title"> Contest has been ended. </h5>
                        :
                        <h5 className = "card-title">
                            {moment.unix(this.state.difference).format("d:hh:mm:ss")}
                        </h5>
                    }
                </div>
            </div>
        );
    }
}

export default Timer;