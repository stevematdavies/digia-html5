import React from 'react';
import { removeParticipant, updateParticipant } from '../../routing/requests';
import SingleInput from '../../components/single-input/SingleInput';
import { ORDER_TYPES } from '../../config/vars';

class ParticipantsTable extends React.Component {

    constructor(){
        super();
        this.state = { 
            participants: [], 
            row: null, 
            editable: false, 
            participant: {},  
            sorting: ORDER_TYPES.nameAsc
        };
        this.handleEditable = this.handleEditable.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.updateParticipant = this.updateParticipant.bind(this);
        this.toggleSort = this.toggleSort.bind(this);
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

    doCallbackWithOptions() {
        this.props.actionUpdateCallback(this.state.sorting)
    }

    updateParticipant(e){
        e.preventDefault();
        updateParticipant(this.state.participant)
            .then(() => {
                this.setState({ row: null, editable: false });
                this.doCallbackWithOptions();   
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
                .then(() => { this.doCallbackWithOptions() }) 
        } 
    }

    toggleSort(col) {
        const toggle = this.state.sorting.dir === 'ASC' ? 'DESC' : 'ASC'
        this.setState({
            sorting: {col, dir: toggle}
        });
        this.doCallbackWithOptions();
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


    getSortable(col){
        return this.state.sorting.dir === 'ASC'
            ? (<div className="sorting-button" onClick={() => this.toggleSort(col)}><i className="fi fi-arrow-down"></i></div>)
            : (<div className="sorting-button" onClick={() => this.toggleSort(col)}><i className="fi fi-arrow-up"></i></div>);
    }

    render() {
        return (
            <div className="partable-container" role="table">
                
                <div className="partable table-header" role="rowgroup">
                    <div className="partable__row column-header" role="columnheader">
                        <span className="column-header-text">
                            Full name {this.getSortable('name')}
                        </span>
                    </div>
                    <div className="partable__row column-header" role="columnheader">
                        <span className="column-header-text">
                            E-mail address {this.getSortable('email')}
                        </span>
                    </div>
                    <div className="partable__row column-header" role="columnheader">
                        <span className="column-header-text">   
                            Phone {this.getSortable('phone')}
                        </span>
                    </div>
                </div>

                {this.getRowElements()}


            </div>
                                
        )
    } 
}


export default ParticipantsTable;