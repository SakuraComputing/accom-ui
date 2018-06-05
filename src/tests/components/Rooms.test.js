import React from 'react';
import { shallow } from 'enzyme';
import { Rooms } from '../../components/Rooms';
import accommodationsJson from '../../../data/accommodation_data';

describe('Rooms Page', () => {

    let wrapper, accommodations;

    beforeEach(() => {

        accommodations = accommodationsJson["accommodations"];
        const props = {
                params: {
                   id: "161"
                },
        };
        wrapper = shallow(<Rooms match={props} accommodations={accommodations} />);
    });

    it('should have a function called list', () => {
        it('should be a function', () => {
            expect(typeof getRooms).toEqual('function');
        });
    });
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});


