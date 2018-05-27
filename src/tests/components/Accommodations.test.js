import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Accommodations } from '../../components/Accommodations';

describe('Accomodations Page', () => {

    it('should render accomodations page correctly',() => {
        const wrapper = shallow(<Accommodations />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should show when no accomodations have been found', () => {
        const data = {
            accommodations: []
        };
        const wrapper = shallow(<Accommodations data={data} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
