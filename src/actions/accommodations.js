// Profile Loading
import { SET_ACCOMMODATIONS } from './types';
import ACCOM_JSON from '../../data/accommodation_data';


// SET_ACCOMMODATIONS
export const setAccommodations = (accommodations) => ({
    type: SET_ACCOMMODATIONS,
    accommodations
});

// Get Accommodation JSON
export const startSetAccommodations = () => {
    const accommodationArray = ACCOM_JSON["accommodations"];
    return(dispatch) => {
      return dispatch(setAccommodations(accommodationArray))
  }
};


