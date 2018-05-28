import React from 'react';
import { shallow } from 'enzyme';
import Room from '../../components/Room';

describe('Room Page', () => {
    it('should render the form correctly', () => {
        const wrapper = shallow(<Room/>);
        expect(wrapper).toMatchSnapshot()
    });
});
