import React from 'react';
import { shallow } from 'enzyme';
import Rooms from '../../components/Rooms';

describe('Rooms Page', () => {
   it('should render the form correctly', () => {
      const wrapper = shallow(<Rooms/>);
      expect(wrapper).toMatchSnapshot()
   });
    it('should have a function called list', () => {
        it('should be a function', () => {
            expect(typeof list).toEqual('function');
        });
    });

});
