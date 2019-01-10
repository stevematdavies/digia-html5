import React from 'react';

class ParticipantsTable extends React.Component {

    getRowElements() {
        return this.props.participants
            .map(participant => (
                <div key={participant.id} className="partable row" role="rowgroup">
                    <div className="partable__row" role="cell">{ participant.name } </div>
                    <div className="partable__row" role="cell">{ participant.email }</div>
                    <div className="partable__row" role="cell">{ participant.phone} </div>
                    <div className="partable__row contains" role="cell"> 
                        <span className="partable__row_icons">
                            <div className="partable__row_icon"><i className="fi fi-pencil"></i></div>
                            <div className="partable__row_icon"><i className="fi fi-trash"></i></div>
                        </span>
                    </div>
                </div>
            ))
    }

    render() {
        return (
            <div className="partable-container" role="table">
                
                <div className="partable table-header" role="rowgroup">
                    <div className="partable__row column-header" role="columnheader">Full name</div>
                    <div className="partable__row column-header" role="columnheader">E-mail address</div>
                    <div className="partable__row column-header" role="columnheader">Phone</div>
                </div>

                {this.getRowElements()}


            </div>
                                
        )
    } 
}

export default ParticipantsTable;