import roomReducer from '../../../src/reducers/roomReducer';
import { SET_ROOM_AVAILIBILITY,
} from '../../actions/types';
import roomsAvailibility from '../fixtures/rooms';

describe('Rooms Reducer', () => {

    it('should set default state',() => {
        const initState = [];
        const state = roomReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initState);
    });
    it('should set all rooms available', () => {
        const action = {
            type: SET_ROOM_AVAILIBILITY,
            roomsAvailibility
        };
        const state = roomReducer(undefined, action);
        expect(state).toEqual(roomsAvailibility)
    });
});