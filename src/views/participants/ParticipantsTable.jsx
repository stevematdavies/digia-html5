import React from 'react';
import { RIEInput } from 'riek';
import axios from 'axios';
import _ from 'lodash'


class ParticipantsTable extends React.Component {


    constructor(){
        super();
        this.handleEditable = this.handleEditable.bind(this);
    }

    handleEditable(item) {
        const key = _.keys(item)[0];
        const val = _.toString(_.values(item)[0]);
        axios.put(`api/participants/participant/${key}/${val}`)
      
    }

    getRowElements() {
        return this.props.participants
            .map(participant => (
                <div key={participant.id} className="partable row" role="rowgroup">
                    
                    <div className='partable__row' role="cell">
                        <RIEInput
                            value={participant.name} 
                            change={this.handleEditable}
                            propName={'name'}
                            validate={_.isString}
                            defaultProps={{id: participant.id}}/>
                    </div>

                    <div className="partable__row" role="cell">
                        <RIEInput
                            value={participant.email} 
                            change={this.handleEditable}
                            propName={'email'}
                            validate={_.isString}
                            defaultProps={{id: participant.id}}/>
                    </div>

                    <div className="partable__row" role="cell">
                        <RIEInput
                            value={participant.phone} 
                            change={this.handleEditable}
                            propName={'phone'}
                            validate={_.isString}
                            defaultProps={{id: participant.id}}/>
                    </div>

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