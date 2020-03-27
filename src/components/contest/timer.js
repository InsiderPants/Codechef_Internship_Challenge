import React, {Component} from 'react';
import * as moment from 'moment';

class Timer extends Component 
{
    constructor()
    {
        super();
        this.state = { 
            currentTime: 1,
            startTime: 1, 
            endTime: 200,
            difference: 0,
            v: 1,
        }
    }

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

    componentDidMount()
    {
        let v = setInterval(this.updateTime, 1000);
        this.setState({v: v})
    }

    componentWillUnmount()
    {
        clearInterval(this.state.v);
    }

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