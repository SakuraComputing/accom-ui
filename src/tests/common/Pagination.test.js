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

describe('componentWillReceiveProps', () => {

    let props, wrapper, initialState;

    beforeEach(() => {
        props = { count: 50, margin: 2, page: 1 };
        wrapper = shallow(<Pagination />);
        wrapper.setProps(props);
        initialState = wrapper.state();
    });
    it('should keep the state unchanged if new props equal current props', () => {
        wrapper = shallow(<Pagination props={props}/>);
        wrapper.setProps(props);
        expect(wrapper.state()).toEqual(initialState);
    });
    it('should change the state if newprops are passed in', () => {
        const newProps = { count: 50, margin: 2, page: 3};
        const newState = { count: 50, endPage: 5, startPage: 1};
        wrapper = shallow(<Pagination props={newProps}/>);
        wrapper.setProps(newProps);
        expect(wrapper.state()).toEqual(newState);

    });

    it('should goFirstPage when page page - margin is greater than one', () => {
        // wrapper = shallow(<Pagination props={newProps}/>);
        // const newProps = { count: 50, margin: 2, page: 3};



        // console.log("What are these?", this.props, wrapper);
        // expect(wrapper).toEqual(1);

    });
});


