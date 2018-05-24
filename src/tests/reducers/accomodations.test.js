import { accomReducer } from '../../../src/reducers/accomReducer';

describe('Accomodation Reducer', () => {
   it('should read json into state', () => {
      const action = {
          type: 'SET_ACCOMODATIONS',
          accomodations: accomodations
      };
      const state = accomReducer(accomodations, action);
      expect(state).toEqual(accomodations);
   });
});