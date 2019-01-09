import React from 'react';

class ParticipantsTable extends React.Component {

    getRowElements() {
        return this.props.participants
            .map(participant => (
                <div key={participant.id} className="partable__tr">
                      <div className="partable__td">{participant.name}</div>
                      <div className="partable__td">{participant.email}</div>
                      <div className="partable__td">{participant.phone}</div>
                </div>
            ))
    }

    render() {
        return (
            <div className="partable">
                <div className="partable__heading">
                    <div className="partable__headingth">Full name</div>
                    <div className="partable__heading--th">Email address</div>
                    <div className="partable__heading--th">Phone number</div>
                    <div className="partable__heading--th">
                        <div className="partable__add-new-button">Add new</div>
                    </div>
                </div>
               <div className="partable__body">
                    {  this.getRowElements() }
                </div>
            </div> 
        )
    } 
}

export default ParticipantsTable;