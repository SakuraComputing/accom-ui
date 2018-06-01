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
    describe('handle page change function', () => {

        let wrapper;

        it('should set the state for page and rendered accommodations', () => {
            wrapper = shallow(<Accommodations />);
            const initailState = {
                accommodations: [],
                renderedAccommodations: [],
                page: 1,
                number_iterations: 2,
                search: ''
            };
            wrapper.setState(initailState);
            wrapper.instance().handlePageChange(2);
            const newState = {
                accommodations: [],
                number_iterations: 2,
                page: 2,
                renderedAccommodations: [],
                search: "",
                total: 99
            };
            expect(wrapper.state()).toEqual(newState);
         })
    });

    describe('update search', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Accommodations />);

        });

        it('should update the search to the correct value', () => {
            const value = 'E';
            wrapper.instance().updateSearch({ target: value });
            console.log('Wrapper', wrapper);
            expect(wrapper.length).toEqual(1);
        });

        it('should set the state', () => {
            const initailState = {
                accommodations: [],
                renderedAccommodations: [],
                page: 1,
                number_iterations: 2,
                search: ''
            };
            wrapper.setState(initailState);
            wrapper.instance().updateSearch('E');
            const newState = {
                accommodations: [],
                newSearch: [],
                number_iterations: 2,
                page: 1,
                renderedAccommodations: [],
                search: "",
                total: 0
            };
            expect(wrapper.state()).toEqual(newState);

        });
    });
});
