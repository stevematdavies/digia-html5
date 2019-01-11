import axios from 'axios';

export const fetchParticipants = () => axios.get('api/participants');
export const addParticipant = (participant) =>  axios.post('api/participants',{ participant });
export const removeParticipant = (participantId) => axios.delete(`api/participants/${participantId}`);
export const updateParticipant = (participant) => axios.put('api/participants',{ participant })