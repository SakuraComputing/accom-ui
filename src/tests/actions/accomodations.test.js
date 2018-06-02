import {setProfileLoading, setAccommodations, setAccommodationAvailibility} from '../../actions/accommodations';
import { ACCOMMODATION_LOADING,
    SET_ACCOMMODATIONS,
    SET_ACCOMMODATION_AVAILIBILITY} from '../../actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('Accommodations action objects', () => {
    const accommodations = {
        name: 'Hotel Name',
        description: 'lovely hotel',
        type: {
            id: 1,
            name:"Hotel"
        },
        facilities: [
            {
                id: 34,
                label :"Telephone"
            },
            {
                id:12,
                label: "WIFI Access"
            }

        ]
    };
    const accommodationAvailibility = { rooms:[{
            id: 136,
            accommodation_id: 67,
            available: 5,
            total: 6,
            current_tier_id: 1021,
            freesale: false
        }]
    };

    describe('Action objects', () => {
        it('should setup the accomodations action object', () => {
            const action = setProfileLoading();
            expect(action).toEqual({
                type: ACCOMMODATION_LOADING
            })
        });
        it('should set the accommodations json object', () => {
           const action = setAccommodations(accommodations);
           expect(action).toEqual({
               type: SET_ACCOMMODATIONS,
               accommodations
           })
        });
        it('should set the accommodations availablity json object', () => {
            const action = setAccommodationAvailibility(accommodationAvailibility);
            expect(action).toEqual({
                type: SET_ACCOMMODATION_AVAILIBILITY,
                accommodationAvailibility
            });
        });
    });
    describe('JSON data loading', () => {

        let store, actions;

        beforeEach(() => {
            store = createMockStore();
            actions = store.getActions();
        });

        it('should start setup of the JSON Accommodation Data', () => {
            store.dispatch(setAccommodations(accommodations));
            const actions = store.getActions();
            const expectedPayload = {
                type: SET_ACCOMMODATIONS,
                accommodations
            };
            expect(actions[0]).toEqual(expectedPayload);
        });
        it('should start setup of the JSON Accommodation Availibility Data', () => {
            store.dispatch(setAccommodationAvailibility(accommodationAvailibility));
            const expectedPayload = {
                type: SET_ACCOMMODATION_AVAILIBILITY,
                accommodationAvailibility
            };
            expect(actions[0]).toEqual(expectedPayload);
        });

    });
});