import * as actions from "../actionTypes/actionTypes";
export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.STATUS_ADDED:
            const message = action.payload.description
            return {...state, ...message}
        case actions.STATUS_REMOVED:
            return state.filter(message => message.id !== action.payload.id );
        default:
            return state;
    }
}

