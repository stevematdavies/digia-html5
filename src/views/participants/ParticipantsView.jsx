import React from 'react';

import ParticipantsTable from './ParticipantsTable';

class ParticipantsView extends React.Component {


    async getParticipants () {
        let content = await fetch('/api');
        let result = await content.text();
        console.log(result);
    }

    componentDidMount() {
        this.getParticipants();
    }

    render() {
        return (
            <div className="users">
                <h2>List of participants</h2> 
                 <ParticipantsTable />
            </div>
        );
    }
}

export default ParticipantsView;