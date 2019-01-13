import React from 'react';
import {updateParticipant} from '../../routing/requests';
import { PATTERNS } from '../../config/vars';

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

    onSaveDone(e,data){
        e.persist();
        this.setState({
            updateParticipant: {
                name: '',
                email: '',
                phone: ''
            }
        });
        this.props.onAlertCallback(data)
        this.props.onCloseEdit(e);
    }

    onSave(e, participant){
        e.preventDefault();
        e.persist();
        let updatedParticipant = {
            ...participant,
            ...this.state.updateParticipant
        }

        updateParticipant(updatedParticipant)
            .then((data) => {
                this.props.actionCallback();
                this.onSaveDone(e,data);
            })
    }

    render(){
        const participant = this.props.participant;
            return (
                <form className="partable__row" onSubmit={(e)=> this.onSave(e, participant)}>
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
                            pattern={PATTERNS.phone}
                            title={PATTERNS.title}
                            value={this.state.updateParticipant.phone}
                            onChange={this.handleOnChange}
                            required /> 
                        </div>

                    <div className="partable__cell contains" role="cell"> 
                        <div className="partable__cell--action-button-group wide">
                            <div className="app-button secondary" onClick={this.props.onCloseEdit}>Cancel</div>
                            <button type="submit" className="app-button primary">Save</button>    
                        </div>
                    </div>
                </form>
            )
    }
}




export default ParticipantsEditableTableRow;