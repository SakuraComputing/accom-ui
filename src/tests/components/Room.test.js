import React from 'react';
import { shallow } from 'enzyme';
import Room from '../../components/Room';
import toJSON from 'enzyme-to-json';
import roomData from '../fixtures/rooms';

describe('Room Page', () => {

    let wrapper;

    it('should render the form correctly', () => {
        const id = 161;
        wrapper = shallow(<Room id={id}/>);
        expect(wrapper).toMatchSnapshot();
    });
    describe('Available Rooms', () => {
        it('should return span tag from getRoomsAvailable', () => {
            const available = 6;
            const returnRooms = wrapper.instance().getRoomsAvailable(available);
            const test = <span className="rooms-available">Rooms available: {available}</span>;
            expect(returnRooms).toEqual(test);
        });

        it('should return span tag with no rooms available', () => {
            const id = 16;
            wrapper = shallow(<Room id={id}/>);
            const returnNoRooms = wrapper.instance().getRoomsAvailable();
            const test = <th className="room-sold-out">Sold Out</th>;
            expect(returnNoRooms).toEqual(test);
        });
    });

    describe('Prices', () => {

        let id;

        beforeEach(() => {
            id = 136;
        });

        it('should return prices tag', () => {
            const supplement_price = { price: { price: "£409"} };
            wrapper = shallow(<Room id={id} supplement_price={supplement_price}/>);
            const priceField = wrapper.instance().getprices();
            const priceReturn = <div className="price">
                <span>Today's Price: { supplement_price ? supplement_price.price.price : '' }</span>
            </div>;
            expect(priceField).toEqual(priceReturn);
        });
        it('should not render the prices tag', () => {
            const supplement_price = { price: {} };
            wrapper = shallow(<Room id={id} supplement_price={supplement_price}/>);
            const priceField = wrapper.instance().getprices();
            const priceReturn = <div className="price">
                <span>Today's Price: </span>
            </div>;
            expect(toJSON(priceField)).toEqual(toJSON(priceReturn));
        })
    });
});
