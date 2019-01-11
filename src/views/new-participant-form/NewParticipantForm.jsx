import React from 'react';
import SingleInput from '../../components/single-input/SingleInput';
import { addParticipant } from '../../routing/requests';

class NewParticipantForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit  =  this.handleFormSubmit.bind(this);
        this.handleNameChange  =  this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);  
        this.handlePhoneChange = this.handlePhoneChange.bind(this);   
        this.clearForm = this.clearForm.bind(this);
        this.state = { name: '', email: '', phone: ''};
    }

    clearForm(){
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    handleNameChange(e) {  
        this.setState({name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePhoneChange(e){
        this.setState({phone: e.target.value})
    }

    handleFormSubmit(e) {   
        e.preventDefault();
        addParticipant({...this.state})
            .then(() =>{
                this.props.formSubmittedCallback();
                this.clearForm();
            })
    }

    componentDidMount(){
    
    }

    render() {
        return (
            <form className="new-participant" action="" onSubmit={this.handleFormSubmit}>
                
                <div className="new-participant__form-item">
                    <SingleInput
                        name={'name'} 
                        inputType={'text'} 
                        controlFunc={this.handleNameChange} 
                        placeholder={'Full name'}
                        content={this.state.name}/>
                </div>

                <div className="new-participant__form-item">
                    <SingleInput
                        name={'email'} 
                        inputType={'email'} 
                        controlFunc={this.handleEmailChange} 
                        placeholder={'E-mail address'}
                        content={this.state.email}/>
                </div>

                <div className="new-participant__form-item">
                    <SingleInput
                        name={'phone'} 
                        inputType={'tel'} 
                        controlFunc={this.handlePhoneChange} 
                        placeholder={'Phone number'}
                        content={this.state.phone}/>
                </div>

                <div className="new-participant__form-item float-right">
                    <button className="app-button" type="submit">Add New</button>
                </div>

            </form>
        )
    }

}


export default NewParticipantForm;