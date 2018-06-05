import roomReducer from '../../../src/reducers/roomReducer';
import { SET_ROOM_AVAILIBILITY,
} from '../../actions/types';
import roomAvailibility from '../../../data/accommodation_availability_data';

describe('Rooms Reducer', () => {

    it('should set default state',() => {
        const initState = [];
        const state = roomReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initState);
    });
    it('should set all rooms available', () => {
        const action = {
            type: SET_ROOM_AVAILIBILITY,
            roomAvailibility
        };
        const state = roomReducer(undefined, action);
        expect(state).toEqual(roomAvailibility)
    });
});