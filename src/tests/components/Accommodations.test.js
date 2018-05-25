import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Accommodations } from '../../components/Accommodations';

describe('Accomodations Page', () => {
    it('should render accomodations page correctly',() => {
        const accommodation = jest.fn();
        const wrapper = shallow(<Accommodations accommodations={accommodation}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
