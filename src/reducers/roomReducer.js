import {
    SET_ROOM_AVAILIBILITY,
} from "../actions/types";

const roomsReducerDefaultsState = [];
export default (state = roomsReducerDefaultsState, action) => {
    switch(action.type) {
        case SET_ROOM_AVAILIBILITY:
            return action.roomAvailibility;
        default:
            return state;
    }
};

