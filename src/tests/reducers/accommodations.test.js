import accomReducer from '../../../src/reducers/accomReducer';
import { SET_ACCOMMODATIONS,
} from '../../actions/types';
import accommodations from '../fixtures/accomodation';

describe('Accommodation Reducer', () => {

    it('should set default state',() => {
        const initState = [];
        const state = accomReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual(initState);
    });
    it('should set all accommodations', () => {
        const action = {
            type: SET_ACCOMMODATIONS,
            accommodations
        };
        const state = accomReducer(undefined, action);
        expect(state).toEqual(accommodations)
    });
});