import {setProfileLoading, setupAccommodations} from '../../actions/accommodations';


describe('Accomodations action object', () => {
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
            type: 'ACCOMMODATION_LOADING'
        })
    });
});