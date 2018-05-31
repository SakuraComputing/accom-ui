import React from 'react';
import { shallow } from 'enzyme';
import Rooms from '../../components/Rooms';

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
});


