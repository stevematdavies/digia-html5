import React from 'react';
import SingleInput from '../../components/single-input/SingleInput';
import { addParticipant } from '../../routing/requests';
import { ORDER_TYPES, PATTERNS } from '../../config/vars';

class NewParticipantForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit  =  this.handleFormSubmit.bind(this);
        this.handleNameChange  =  this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);  
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.getControlButtons = this.getControlButtons.bind(this);
        this.checkForAlert = this.checkForAlert.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.state = { name: '', email: '', phone: '', isInputMode: false};  
        this.createFormRefs();
    }

    createFormRefs(){
        this.newNameRef = React.createRef();
        this.newEmailRef = React.createRef(); 
        this.newPhoneRef = React.createRef();
    }

    clearForm(){
        this.setState({
            name: '',
            email: '',
            phone: '',
            isInputMode: false,
        });
        this.newNameRef.current.value = '';
        this.newEmailRef.current.value = '';
        this.newPhoneRef.current.value = '';
    }

    handleNameChange(e) {  
        this.setState({ isInputMode: true, name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({isInputMode: true, email: e.target.value})
    }

    handlePhoneChange(e){
        this.setState({isInputMode: true, phone: e.target.value})
    }

    checkForAlert(data){
        this.props.onAlertCallback(data)
    }

    handleFormSubmit(e) {   
        e.preventDefault();
        addParticipant({...this.state})
            .then((result) => {
                this.checkForAlert(result);
                this.props.formSubmittedCallback(ORDER_TYPES.timeDes);
                this.clearForm();
            })
    }

    getControlButtons(){
        return this.state.isInputMode
            ?   (  
                    <div className="new-participant__form-item float-right">
                        <button className="app-button" type="submit">Add New</button>
                        <button className="app-button" type="button" onClick={this.clearForm}>Cancel</button>
                    </div> 
                )
            :   (  
                    <div className="new-participant__form-item float-right">
                        <button className="app-button" type="submit">Add New</button>
                    </div> 
                )
                
           
    }

    render() {
        return (
            <form className="new-participant" onSubmit={this.handleFormSubmit}>
                
                <div className="new-participant__form-item">
                    <SingleInput
                        iref={this.newNameRef}
                        class={''}
                        name={'name'} 
                        inputType={'text'} 
                        controlFunc={this.handleNameChange} 
                        placeholder={'Full name'}/>
                </div>

                <div className="new-participant__form-item">
                    <SingleInput
                        iref={this.newEmailRef}
                        class={''}
                        name={'email'} 
                        inputType={'email'} 
                        controlFunc={this.handleEmailChange} 
                        placeholder={'E-mail address'}/>
                </div>
                
                <div className="new-participant__form-item">
                    <SingleInput
                        iref={this.newPhoneRef}
                        class={''}
                        name={'phone'} 
                        inputType={'tel'} 
                        pattern={PATTERNS.phone}
                        patternTitle={PATTERNS.title}
                        controlFunc={this.handlePhoneChange} 
                        placeholder={'Phone number'}/>
                </div>

                {this.getControlButtons()}

            </form>
        )
    }

}


export default NewParticipantForm;