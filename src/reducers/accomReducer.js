import {
    SET_ACCOMMODATIONS,
} from "../actions/types";

const accomodationReducerDefaultsState = [];
export default (state = accomodationReducerDefaultsState, action) => {

    switch(action.type) {
        case SET_ACCOMMODATIONS:
            return action.accommodations;
        default:
            return state;
    }
};