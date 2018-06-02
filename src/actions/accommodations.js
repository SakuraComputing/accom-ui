// Profile Loading
import { ACCOMMODATION_LOADING, SET_ACCOMMODATIONS, SET_ACCOMMODATION_AVAILIBILITY,GET_ROOMS } from './types';
import ACCOM_JSON from '../../data/accommodation_data';
import ACCOM__AVAIL_JSON from '../../data/accommodation_availability_data';

export const setProfileLoading = () => {
    return {
        type: ACCOMMODATION_LOADING
    }
};

// SET_ACCOMMODATIONS
export const setAccommodations = (accommodations) => ({
    type: SET_ACCOMMODATIONS,
    accommodations
});

// SET_ACCOMMODATION_AVAILIBILITY
export const setAccommodationAvailibility = (accommodationAvailibility) => ({
   type: SET_ACCOMMODATION_AVAILIBILITY,
    accommodationAvailibility
});

//GET_ROOMS
export const getRooms = (id) => ({
  type: GET_ROOMS,
  id
});

// Get Accommodation JSON
export const startSetAccommodations = () => {
  return(dispatch) => {
      return dispatch(setAccommodations(ACCOM_JSON))
  }
};

// Get Accommodation Availibility JSON
export const startSetAccommodationAvailibility = () => {
  return(dispatch) => {
      return dispatch(setAccommodationAvailibility(ACCOM__AVAIL_JSON["accommodations"]));
  }
};

