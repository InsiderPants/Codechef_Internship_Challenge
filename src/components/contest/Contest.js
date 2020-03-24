import React, {Component} from 'react';

class Contest extends Component
{
    constructor()
    {
        super();
        this.state = {

        };
    }

    render()
    {
        return (
            <div className = "container-xl">
                <div className = "row">
                    contest_name, description
                </div>
                <div className = "row">
                    <div className = "col-8">
                        problem list, table
                    </div>
                    <div className = "col-4">
                        <div className = "row">
                            clock
                        </div>
                        <div className = "row">
                            ranklist
                        </div>
                        <div className = "row">
                            standing
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contest;

