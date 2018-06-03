import {
    SET_ACCOMMODATIONS,
    GET_ROOMS
} from "../actions/types";

const accomodationReducerDefaultsState = [];
export default (state = accomodationReducerDefaultsState, action) => {

    switch(action.type) {
        case GET_ROOMS:
                return state.map((room) => {
                    if (room.id === action.id) {
                        return {
                            ...room
                         };
                } else {
                    return room;
                }});
        case SET_ACCOMMODATIONS:
            return action.accommodations;
        default:
            return state;
    }
};