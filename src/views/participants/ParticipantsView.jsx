import React from 'react';
import { fetchParticipants} from '../../routing/requests';
import ParticipantsTable from './ParticipantsTable';
import NewParticipantForm from '../new-participant-form/NewParticipantForm';
import { ORDER_TYPES } from '../../config/vars';
import Alert from '../../components/alert/Alert';


class ParticipantsView extends React.Component {

    constructor(){
        super();
        this.state = { 
            participants: [], 
            alert: { 
                showAlert: false,
                alertTitle: '',
                alertMessage: '',
                isWarning: false
            }
        }
        this.getAllParticipants = this.getAllParticipants.bind(this);
        this.onAlert = this.onAlert.bind(this);
        this.getAlert = this.getAlert.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    getAllParticipants(sortOptions) {
        fetchParticipants(sortOptions)
        .then(result => {
            this.setState({participants: result.data});
        })
    }

    onAlert(result){
        this.setState({ 
            alert: {
                showAlert: true, 
                alertTitle: result.data.title,
                alertMessage: result.data.message,
                isWarning: result.data.statusCode === 500
            }
        })
    }

    closeAlert(){
        this.setState({ 
            alert: {
                showAlert:false, 
                alertTitle: '',
                alertMessage: '',
                isWarning: false
            }
        });
    }

    getAlert(){
        if (this.state.alert.showAlert) {
        return (
            <Alert
                isWarning={this.state.alert.isWarning}
                title={this.state.alert.alertTitle}
                message={this.state.alert.alertMessage}
                onOKAction={this.closeAlert}/>
            );
        }
    }

    componentDidMount(){
       this.getAllParticipants(ORDER_TYPES.nameAsc);
    }

    render() {
        return (
            <div className="participants-view">
                { this.getAlert() }
                <div className="participants-view__heading">List of participants</div> 
                <NewParticipantForm 
                    formSubmittedCallback={this.getAllParticipants} 
                    onAlertCallback={this.onAlert}/>
                <ParticipantsTable 
                    participants={this.state.participants} 
                    actionUpdateCallback={this.getAllParticipants} 
                    onAlertCallback={this.onAlert}/>
            </div>
        );
    }
}
export default ParticipantsView;