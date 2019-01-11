import React from 'react';
import { removeParticipant, updateParticipant } from '../../routing/requests';
import SingleInput from '../../components/single-input/SingleInput';

class ParticipantsTable extends React.Component {


    participants = [];

    constructor(){
        super();
        this.state = { participants: [], row: null, editable: false, participant: {} };
        this.handleEditable = this.handleEditable.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateParticipant = this.updateParticipant.bind(this);
    }

    
    handleEditable(e, participant) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            participant: {
                ...participant,
                [key]:value
            }
        });
    }

    updateParticipant(e){
        e.preventDefault();
        updateParticipant(this.state.participant)
            .then(() => {
                this.setState({ row: null, editable: false });
                this.props.actionUpdateCallback()
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
        if (!this.state.editable) {
            removeParticipant(id)
                .then(() => { this.props.actionUpdateCallback() }) 
        } 
    }

    getRowElement(name, value, type, callback, condition) {
        return condition
            ? ( <SingleInput 
                    name={name} 
                    class="inline"
                    inputType={type} 
                    controlFunc={callback} 
                    placeholder={value} />)
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
                            { this.getRowElement('name', participant.name, 'text', (e) => this.handleEditable(e, participant), participant.id === this.state.row) }
                        </div>

                        <div className="partable__row" role="cell">
                            { this.getRowElement('email', participant.email, 'email',(e) => this.handleEditable(e, participant), participant.id === this.state.row) }   
                        </div>

                        <div className="partable__row" role="cell">
                            { this.getRowElement('phone', participant.phone, 'tel', (e) => this.handleEditable(e, participant), participant.id === this.state.row) }   
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