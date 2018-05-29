import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Pagination } from '../../common/Pagination';

describe('Pagination Page', () => {
    it('should render pagination correctly',() => {
        const wrapper = shallow(<Pagination />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});


