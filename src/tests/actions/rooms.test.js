import {
    setRoomAvailibility,
    startSetRoomAvailibility} from '../../actions/rooms';
import {
    SET_ROOM_AVAILIBILITY,
} from '../../actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('Rooms action objects', () => {
    const roomAvailibility = { rooms:[{
            id: 136,
            accommodation_id: 67,
            available: 5,
            total: 6,
            current_tier_id: 1021,
            freesale: false
        }]
    };

    describe('Action objects', () => {
        it('should set the accommodations availablity json object', () => {
            const action = setRoomAvailibility(roomAvailibility);
            expect(action).toEqual({
                type: SET_ROOM_AVAILIBILITY,
                roomAvailibility
            });
        });
        it('should return dispatch startSetRoomAvailibility', () => {
            const dispatch = { roomAvailibility: undefined, type: SET_ROOM_AVAILIBILITY };
            const action = setRoomAvailibility();
            expect(action).toEqual(dispatch);
        });
    });
    describe('JSON data loading', () => {

        let store, actions;

        beforeEach(() => {
            store = createMockStore();
            actions = store.getActions();
        });

        it('should start setup of the JSON Accommodation Availibility Data', () => {
            store.dispatch(setRoomAvailibility(roomAvailibility));
            const expectedPayload = {
                type: SET_ROOM_AVAILIBILITY,
                roomAvailibility
            };
            expect(actions[0]).toEqual(expectedPayload);
        });

    });
});