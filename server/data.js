const random = require('random');
const randomId = require('random-id');
const rdata = require('./rdata.json')

const participantsLength = 20;

const genRandomId = () => {
    const len = 6;
    const pat = 'aA0'
    return randomId(len, pat);
}

const genRandomPhone = () => {
    const len = 8;
    const pat = '00000000'
    return randomId(len, pat);
}

const genRandomEmailForName = (name) => {
    const rEmailOndex = random.int(min=0, max=rdata.emails.length -1);
    return name.toLowerCase().split(' ').join('.') + rdata.emails[rEmailOndex];
}

const genRandomName = () => {
    const firstRandomIndex = random.int(min=0, max=rdata.names.length -1);
    const lastRandomIndex = random.int(min=0, max=rdata.names.length -1);
    return rdata.names[firstRandomIndex].first + ' ' + rdata.names[lastRandomIndex].last;
}

const generateParticipant = () => {
    const name = genRandomName();
    const email = genRandomEmailForName(name);
    const id = genRandomId();
    const phone = genRandomPhone();
    return { id, email, name, phone }
};


const generateRandomParticipants = () => {
    let participants = [];
    for (let i=0; i < participantsLength; i++) {
        participants.push(generateParticipant())
    }
    return participants;
}

module.exports = {
    generateRandomParticipants
}