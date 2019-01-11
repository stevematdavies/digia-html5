import React from 'react';
import { fetchParticipants } from '../../routing/requests';
import ParticipantsTable from './ParticipantsTable';
import NewParticipantForm from '../new-participant-form/NewParticipantForm';
import { ORDER_TYPES } from '../../config/vars';


class ParticipantsView extends React.Component {

    constructor(){
        super();
        this.state = { participants: [] }
        this.getAllParticipants = this.getAllParticipants.bind(this);
    }

    getAllParticipants(sortOptions) {
        fetchParticipants(sortOptions)
        .then(result => {
            this.setState({participants: result.data});
        })
    }

    componentDidMount(){
       this.getAllParticipants(ORDER_TYPES.nameAsc);
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