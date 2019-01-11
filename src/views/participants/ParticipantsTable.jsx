import React from 'react';
import _ from 'lodash'
import { removeParticipant } from '../../routing/requests';
import SingleInput from '../../components/single-input/SingleInput';

class ParticipantsTable extends React.Component {


    participants = [];

    constructor(){
        super();
        this.state = { participants: [], row: null, editable: false };
        this.handleEditable = this.handleEditable.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateParticipant = this.updateParticipant.bind(this);
    }

    
    handleEditable(item) {
        
    }

    updateParticipant(e){
        e.preventDefault();
        this.setState({
            row: null,
            editable: false
        })
    }

    toggleEditMode(e, id) {
        e.preventDefault();
        let orig = this.state.editable 
        this.setState({ 
            row: id, 
            editable: !orig });
    }

    
    deleteParticipant(e, id) {
        e.preventDefault();
        removeParticipant(id)
            .then(result => { this.props.actionUpdateCallback() }) 
    }

    getRowElement(name, value, type, callback, placeholder, condition) {
        return condition
            ? ( <SingleInput 
                    name={name} 
                    class="inline"
                    inputType={type} 
                    content={value} 
                    controlFunc={callback} 
                    placeholder={placeholder} />)
            : value;
    }

    getRowActionElement(condition, id){
        return condition
            ?  (<div className="partable__row_icon" onClick={(e) =>this.updateParticipant(e)}><i className="fi fi-save"></i></div>)
            :  (<div className="partable__row_icon" onClick={(e) =>this.toggleEditMode(e,id)}><i className="fi fi-pencil"></i></div>);
    }

    getRowElements() {
        return this.props.participants
            .map(participant => (

                    <div key={participant.id} className="partable row" role="rowgroup">
        
                        <div className='partable__row' role="cell">
                            { this.getRowElement('name', participant.name, 'text', this.handleEditable,'Full name', participant.id === this.state.row) }
                        </div>

                        <div className="partable__row" role="cell">
                            { this.getRowElement('email', participant.email, 'email', this.handleEditable,'E-mail address', participant.id === this.state.row) }   
                        </div>

                        <div className="partable__row" role="cell">
                            { this.getRowElement('phone', participant.phone, 'tel', this.handleEditable,'Phone', participant.id === this.state.row) }   
                        </div>

                        <div className="partable__row contains" role="cell"> 
                            <span className="partable__row_icons">
                                { this.getRowActionElement(participant.id === this.state.row, participant.id) }
                                <div className="partable__row_icon" onClick={(e) => this.deleteParticipant(e, participant.id)}><i className="fi fi-trash"></i></div>
                            </span>
                        </div>
    
                    </div>)
            )
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