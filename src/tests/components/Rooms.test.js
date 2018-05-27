import React from 'react';
import { shallow } from 'enzyme';
import Rooms from '../../components/Rooms';

describe('Rooms Page', () => {
   it('should render the form correctly', () => {
      const wrapper = shallow(<Rooms/>);
      expect(wrapper).toMatchSnapshot()
   });
});
