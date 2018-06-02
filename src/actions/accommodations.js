// Profile Loading
import { ACCOMMODATION_LOADING, SET_ACCOMMODATIONS } from './types';
import accomJson from '../tests/fixtures/accomodation';

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


//
export const startSetAccommodations = () => {
  return(dispatch) => {
      return dispatch(setAccommodations(accomJson))
  }
};

