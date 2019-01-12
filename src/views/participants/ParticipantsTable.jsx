import React from 'react';
import ParticipantsEditableTableRow from './ParticipantsEditableTableRow';
import ParticipantsNonEditableTableRow from './ParticipantsNonEditableTableRow';
import { updateParticipant } from '../../routing/requests';
import { ORDER_TYPES } from '../../config/vars';

class ParticipantsTable extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            participants: [], 
            row: null, 
            editable: false, 
            participant: { name: '', email: '', phone: '' },
            sorting: ORDER_TYPES.nameAsc,
            canUpdate: false,
            isValid: false
        };
        this.handleEditable = this.handleEditable.bind(this);
        this.putInEditMode = this.putInEditMode.bind(this);
        this.$updateParticipant = this.$updateParticipant.bind(this);
        this.toggleSort = this.toggleSort.bind(this);
        this.closeEditMode = this.closeEditMode.bind(this)
        this.doCallbackWithOptions = this.doCallbackWithOptions.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        return state.participants = props.participants
    }


    doCallbackWithOptions() {
        this.props.actionUpdateCallback(this.state.sorting)
    }

    $updateParticipant(e){
        e.preventDefault();
        e.persist();
            setTimeout(()=>{
                updateParticipant(this.state.participant)
                .then(() => {
                    this.closeEditMode(e);
                    this.doCallbackWithOptions();   
                })
            },100);
    }

    closeEditMode(e) {
        e.preventDefault();
        this.setState({ row: null, editable: false,});
    }

    putInEditMode(e, id) {
        e.preventDefault();
        this.setState({ row: id, editable: true });
    }

    toggleSort(col) {
        const toggle = this.state.sorting.dir === 'ASC' ? 'DESC' : 'ASC'
        this.setState({ sorting: {col, dir: toggle} });
        setTimeout(() => {
            this.doCallbackWithOptions();
        },100)
    }


    handleEditable(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ participant: {[name]: value }});
    }

    getRowElement(name, rawVal, type, condition) {
        const CustomInput = () => (
            <input
                className='single-input'
                name={name}
                type={type}
                value={this.state['participant'][name]}
                onChange={this.handleEditable}
                placeholder={rawVal}
                required />
        );

        return condition? (<CustomInput />) : rawVal
    }

    getRowElements() {
            return this.state.participants
                .map( participant =>
                    this.state.editable && participant.id === this.state.row
                    ?   (<ParticipantsEditableTableRow 
                            key={participant.id} 
                            participant={participant} 
                            onCloseEdit={this.closeEditMode}
                            actionCallback={this.doCallbackWithOptions}/>)
                    :   (<ParticipantsNonEditableTableRow
                            key={participant.id} 
                            participant={participant} 
                            onOpenEdit={(e) => this.putInEditMode(e, participant.id)} 
                            actionCallback={this.doCallbackWithOptions}/>));
    }

    getSortable(col){
        return this.state.sorting.dir === 'ASC'
            ? (<div className="sorting-button" onClick={() => this.toggleSort(col)}><i className="fi fi-arrow-down"></i></div>)
            : (<div className="sorting-button" onClick={() => this.toggleSort(col)}><i className="fi fi-arrow-up"></i></div>);
    }

    render() {
        return (
            <div className="partable-container">
                <div className="partable" role="table">
                    <div className="partable__header" role="rowgroup">
                        <div className="partable__column-header">
                           <span>Full name</span> <span>{this.getSortable('name')}</span>    
                        </div>
                        <div className="partable__column-header">
                           <span>E-mail address</span> <span>{this.getSortable('email')}</span>   
                        </div>
                        <div className="partable__column-header">
                            <span>Phone</span> <span>{this.getSortable('phone')}</span>
                        </div>
                    </div>
                    <div className="partable__body" role="table">
                        { this.getRowElements() }   
                    </div>
                
                </div>
            </div>                   
        )
    } 
}


export default ParticipantsTable;