import React from 'react';
import { shallow } from 'enzyme';
import rooms from '../fixtures/rooms';
import Rooms from '../../components/Rooms';
import data from '../../../data/accommodation_data.json';
import facilities from '../fixtures/facilities';


describe('Rooms Page', () => {

    let wrapper;

    beforeEach(() => {
        const props = {
                params: {
                   id: "161"
                },
        };
        wrapper = shallow(<Rooms match={props}/>);
    });

    it('should have a function called list', () => {
        it('should be a function', () => {
            expect(typeof list).toEqual('function');
        });
    });
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a function called list', () => {
        it('should be a function', () => {
            expect(typeof list).toEqual('function');
        });
    });
    it('should return no facilities when no data is passed in', () => {
        const facilities = null;
        const ReturnData = wrapper.instance().list(facilities);
        expect(ReturnData).toBeNull;
    });
    it('should return facilities when the list function is called', () => {
        const facilities = [ { id: '1', label: 'Towel'}];
        const ReturnData = wrapper.instance().list(facilities);
        const test = [<li key="1" label="Towel">Towel</li>];
        expect(ReturnData).toEqual(test);
    });

});


