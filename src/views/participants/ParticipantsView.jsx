import React from 'react';
import { fetchParticipants } from '../../routing/requests';
import ParticipantsTable from './ParticipantsTable';
import NewParticipantForm from '../new-participant-form/NewParticipantForm';


class ParticipantsView extends React.Component {

    constructor(){
        super();
        this.state = { participants: [] }
        this.getAllParticipants = this.getAllParticipants.bind(this);
    }

    getAllParticipants(){
        fetchParticipants()
        .then(result => {
            this.setState({participants: result.data});
        })
    }

    componentDidMount(){
       this.getAllParticipants();
    }

    render() {
        return (
            <div className="participants-view">
                <div className="participants-view__heading">List of participants</div> 
                <NewParticipantForm formSubmittedCallback={this.getAllParticipants}/>
                <ParticipantsTable participants={this.state.participants} actionUpdateCallback={this.getAllParticipants}/>
            </div>
        );
    }
}
export default ParticipantsView;