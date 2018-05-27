import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AccommodationItem } from '../../components/AccommodationItem';

describe('Accomodation Item  Page', () => {

    let wrapper, history;

    beforeEach(() => {
        const key = jest.fn();
        const accommodation = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(<AccommodationItem key={key} accomodation={accommodation} history={history}/>);
    });
    it('should render accomodation item page correctly',() => {
        wrapper.setProps({ type: { id: 1, name: 'Apart'}});
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should render type if type exists', () => {
        wrapper.setProps({ facilities: [{ id: 1, label: 'bed'}]});
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should have a function called list', () => {
        it('should be a function', () => {
            expect(typeof list).toEqual('function');
        });
    });
    it('should return facilities list when list function is called', () => {
        const facilities = [ { id: '1', label: 'Towel'}];
        const ReturnData = wrapper.instance().list(facilities);
        const test = [<li key="1" label="Towel">Towel</li>];
        expect(ReturnData).toEqual(test);
    });
    it('should return nothing when no data is passed in', () => {
        const facilities = null;
        const ReturnData = wrapper.instance().list(facilities);
        expect(ReturnData).toBeNull;
    });
    it('should have a function called display rooms', () => {
        it('should be a function', () => {
            expect(typeof displayRooms).toEqual('function');
        });
    });

    it('should redirect to the rooms page when the rooms button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/rooms');
    });
});