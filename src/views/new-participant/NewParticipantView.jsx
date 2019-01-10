import React from 'react';

class NewParticipantView extends React.Component {

    render() {
        return (
            <div className="new-participant">
                
                <div className="new-participant__form-item">
                    <input type="text" placeholder="Full name"/>
                </div>
                <div className="new-participant__form-item">
                    <input type="text" placeholder="E-mail address"/>
                </div>
                <div className="new-participant__form-item">
                    <input type="text" placeholder="Phone number"/>
                </div>
                <div className="new-participant__form-item float-right">
                    <div className="app-button">Add New</div>
                </div>

            </div>
        )
    }

}


export default NewParticipantView;