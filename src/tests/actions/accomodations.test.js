import {setProfileLoading, setAccommodations, startSetAccommodations} from '../../actions/accommodations';
import { ACCOMMODATION_LOADING, SET_ACCOMMODATIONS, } from '../../actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import accommodation_dataJson from '../../../data/accommodation_data';

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
    it('should setup the accomodations action object', () => {
        const action = setProfileLoading();
        expect(action).toEqual({
            type: ACCOMMODATION_LOADING
        })
    });
    describe('JSON data loading', () => {
        it('should set the accommodations json object', () => {
           const action = setAccommodations(accommodations);
           expect(action).toEqual({
               type: SET_ACCOMMODATIONS,
               accommodations
           })
        });

        it('should start setup of the JSON Accommodation Data', () => {

            const store = createMockStore();
            const accommodations = accommodation_dataJson;
            store.dispatch(setAccommodations(accommodations));

            const actions = store.getActions();
            const expectedPayload = {
                type: SET_ACCOMMODATIONS,
                accommodations
            };
            expect(actions[0]).toEqual(expectedPayload);
        });
    });
});