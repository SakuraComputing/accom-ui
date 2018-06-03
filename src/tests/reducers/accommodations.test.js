import accomReducer from '../../../src/reducers/accomReducer';
import { GET_ROOMS,
        SET_ACCOMMODATIONS,
        SET_ACCOMMODATION_AVAILIBILITY
} from '../../actions/types';
import accommodations from '../fixtures/accomodation';
import rooms from '../fixtures/rooms';

describe('Accommodation Reducer', () => {

    it('should set default state',() => {
        const initState = [];
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

    it('should get rooms for the accommodation', () => {
        const action = {
            type: GET_ROOMS,
            id: 161,
            rooms
        };
        const state = accomReducer(rooms, action);
        expect(state).toEqual(rooms);
    })
});