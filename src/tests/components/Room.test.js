import React from 'react';
import { shallow } from 'enzyme';
import Room from '../../components/Room';
import roomData from '../fixtures/rooms';

describe('Room Page', () => {

    let wrapper;

    beforeEach(() => {
        const id = 161;
        wrapper = shallow(<Room id={id}/>);
    });
    it('should render the form correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should return span tag from getRoomsAvailable', () => {
        const available = 6;
        const returnRooms = wrapper.instance().getRoomsAvailable(available);
        const test = <span className="rooms-available">Rooms available: {available}</span>;
        expect(returnRooms).toEqual(test);

    });
});
