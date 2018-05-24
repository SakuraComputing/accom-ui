import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DashboardPage from '../../components/DashboardPage';

describe('Dashboard Page', () => {
    it('should render Expense dashboard page correctly',() => {
        const wrapper = shallow(<DashboardPage />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
