import React from 'react';
import { shallow } from 'enzyme';
import Rooms from '../../components/Rooms';
import data from '../../../data/accommodation_data.json';


describe('Rooms Page', () => {
   it('should render the form correctly', () => {
       jest.mock('path/to/setting.json', ()=>({
           settings: 'someSetting'
       }), { virtual: true });

       const match = { params: jest.fn() };
      const wrapper = shallow(<Rooms match={match} data={data}/>);
      expect(wrapper).toMatchSnapshot()
   });
    it('should have a function called list', () => {
        it('should be a function', () => {
            expect(typeof list).toEqual('function');
        });
    });

});
