import axios from 'axios';
import React from 'react';
import ParticipantsTable from './ParticipantsTable';

class ParticipantsView extends React.Component {

    constructor(){
        super();
        this.state = { participants: [] }
    }

    componentDidMount(){
        axios.get('api/participants')
            .then(result => {
                this.setState({
                    participants: result.data
                })
            })
    }

    render() {
        return (
            <div className="participants-view">
                <div className="participants-view__heading">List of participants</div> 
                <ParticipantsTable participants={this.state.participants} />
            </div>
        );
    }
}

export default ParticipantsView;