import React from 'react';
import {updateParticipant} from '../../routing/requests';

class ParticipantsEditableTableRow extends React.Component {

    constructor(props){
        super(props);
        this.state = {  
            updateParticipant: {
                name: '',
                email: '',
                phone: ''
            }
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onSaveDone = this.onSaveDone.bind(this);
    }

    componentDidMount(){
        this.setState({ updateParticipant: this.props.participant})
    }

    handleOnChange(e){
        const name = e.target.name;
        const value = e.target.value;
        const updatedParticipant = this.state.updateParticipant;
        updatedParticipant[name] = value;
        this.setState({
            updateParticipant:updatedParticipant
        });
    }

    onSaveDone(e,){
        e.persist();
        this.setState({
            updateParticipant: {
                name: '',
                email: '',
                phone: ''
            }
        })
        this.props.onCloseEdit(e);
    }

    onSave(e, participant){
        e.persist();
        let updatedParticipant = {
            ...participant,
            ...this.state.updateParticipant
        }

        updateParticipant(updatedParticipant)
            .then(() => {
                this.props.actionCallback();
                this.onSaveDone(e);
            })
    }

    render(){
        const participant = this.props.participant;
            return (
                <div className="partable__row">
                    <div className='partable__cell' role="cell">
                        <input
                            className='single-input'
                            name='name'
                            type='text'
                            value={this.state.updateParticipant.name}
                            onChange={this.handleOnChange}
                            required />
                    </div>

                    <div className="partable__cell" role="cell">
                        <input
                            className='single-input'
                            name='email'
                            type='email'
                            value={this.state.updateParticipant.email} 
                            onChange={this.handleOnChange}
                            required />
                        </div>

                    <div className="partable__cell" role="cell">
                        <input
                            className='single-input'
                            name='phone'
                            type='tel'
                            value={this.state.updateParticipant.phone}
                            onChange={this.handleOnChange}
                            required /> 
                        </div>

                    <div className="partable__cell contains" role="cell"> 
                        <div className="partable__cell--action-button-group wide">
                            <div className="app-button secondary" onClick={this.props.onCloseEdit}>Cancel</div>
                            <button type="submit" className="app-button primary" onClick={(e)=> this.onSave(e, participant)}>Save</button>    
                        </div>
                    </div>
                </div>
            )
    }
}




export default ParticipantsEditableTableRow;