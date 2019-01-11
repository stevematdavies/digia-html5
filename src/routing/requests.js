import axios from 'axios';

export const fetchParticipants =(sortOptions) => {
    const { orderby, orderdir } = {...sortOptions}
    return axios.get(`api/participants/${orderby}/${orderdir}`)
};
export const addParticipant = (participant) =>  axios.post('api/participants',{ participant });
export const removeParticipant = (participantId) => axios.delete(`api/participants/${participantId}`);
export const updateParticipant = (participant) => axios.put('api/participants',{ participant })