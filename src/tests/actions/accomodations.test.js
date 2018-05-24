import { setupAccomodations } from '../../../src/actions/accomodations';

const accomodations = {
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

describe('Accomodations action object', () => {
   it('should setup the accomodations action oject', () => {
       const action = setupAccomodations(accomodations);
       expect(action).toEqual({
           type: 'SET_ACCOMODATIONS',
           accomodations: (accomodations)
       });
   });
});