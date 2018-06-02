import accomReducer from '../../../src/reducers/accomReducer';
import { GET_ROOMS,
        SET_ACCOMMODATIONS,
        SET_ACCOMMODATION_AVAILIBILITY
} from '../../actions/types';
import accommodations from '../fixtures/accomodation';

describe('Accommodation Reducer', () => {

    it('should set default state',() => {
        const initState = {
            accommodations: null,
            loading: false
        };
        const state = accomReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initState);
    });
    // it('should get all rooms for given accommodation id', () => {
    //    const action = {
    //        type: GET_ROOMS
    //    };
    //    const state = accomReducer(undefined, action);
    //    expect(state).toEqual({
    //        accommodations: action.rooms,
    //        loading: false
    //    })
    // });
    it('should set all accommodations', () => {
        const action = {
            type: SET_ACCOMMODATIONS,
            accommodations
        };
        const state = accomReducer(undefined, action);
        expect(state).toEqual(accommodations)
    });
});