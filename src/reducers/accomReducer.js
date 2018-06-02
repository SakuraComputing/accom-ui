import {
    SET_ACCOMMODATIONS,
    GET_ROOMS
} from "../actions/types";

const accomodationReducerDefaultsState = {
    accommodations: null,
    loading: false
};
export default (state = accomodationReducerDefaultsState, action) => {

    switch(action.type) {
        case GET_ROOMS:
                return {
                    ...state,
                    rooms: action.rooms
                };
        case SET_ACCOMMODATIONS:
            return action.accommodations;
        default:
            return state;
    }
};