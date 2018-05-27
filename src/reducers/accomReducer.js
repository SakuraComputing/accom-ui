import {
    PROFILE_LOADING,
    GET_ACCOMMODATIONS
} from "../actions/types";

const accomodationReduserDefaultsState = {
    accommodations: null,
    loading: false
};
export default (state = accomodationReduserDefaultsState, action) => {

    switch(action.type) {
        case GET_ACCOMMODATIONS:
                return {
                    ...state,
                    accommodations: action.payload,
                    loading: false
                };
        default:
            return state;
    }
};