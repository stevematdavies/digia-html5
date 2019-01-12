import React from 'react';
import {removeParticipant} from '../../routing/requests';

class ParticipantsNonEditableTableRow extends React.Component {

    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(id) {
        removeParticipant(id)
            .then(()=>{
                this.props.actionCallback();
            })
    }

    render(){   
        const participant = this.props.participant;
            return (
                <div className='partable__row' role="row">
                    <div className="partable__cell" role="cell">{participant.name}</div>
                    <div className="partable__cell" role="cell">{participant.email}</div>
                    <div className="partable__cell" role="cell">{participant.phone}</div>
                    <div className="partable__cell contains" role="cell">
                    <div className="partable__cell--action-button-group">
                            <div className="partable__cell--icon" onClick={(e) => this.props.onOpenEdit(e, participant.id)}><i className="fi fi-pencil"></i></div>
                            <div className="partable__cell--icon" onClick={() => this.onDelete(participant.id)}><i className="fi fi-trash"></i></div>    
                        </div>
                    </div>
                </div>
            )
    }
}

export default ParticipantsNonEditableTableRow;