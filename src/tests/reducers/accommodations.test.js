import accomReducer from '../../../src/reducers/accomReducer';

describe('Accomodation Reducer', () => {

    it('should set default state',() => {
        const initState = {
            accommodations: null,
            loading: false
        };
        const state = accomReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initState);
    });
    it('should get all accomodations', () => {
       const action = {
           type: 'GET_ACCOMMODATIONS'
       };
       const state = accomReducer(undefined, action);
       expect(state).toEqual({
           accommodations: action.payload,
           loading: false
       })
    });
});