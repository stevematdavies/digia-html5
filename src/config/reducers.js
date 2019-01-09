const initialState = {
    participants: []
}

const participantReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PARTICIPANTS_LOADED':
            return {
                ...state,
                participants: action.participants
            }
        default: return state
    }
}

export { participantReducer }