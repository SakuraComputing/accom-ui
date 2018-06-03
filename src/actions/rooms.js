import {SET_ROOM_AVAILIBILITY} from "./types";
import ACCOM__AVAIL_JSON from '../../data/accommodation_availability_data';

// SET_ROOM_AVAILIBILITY
export const setRoomAvailibility = (roomAvailibility) => ({
    type: SET_ROOM_AVAILIBILITY,
    roomAvailibility
});

// Get Accommodation Availibility JSON
export const startSetRoomAvailibility = () => {
    const roomArray = ACCOM__AVAIL_JSON["rooms"];
    return(dispatch) => {
        return dispatch(setRoomAvailibility(roomArray));
    }
};


