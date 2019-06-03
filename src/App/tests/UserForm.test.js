import React from 'react';

import UserForm from '../components/UserForm';

import { mount } from 'enzyme';

it('calls the submit function when the form is submitted', ()=> {
    const component = mount(<form />);
    const input = component.find('input').at(0);
    input.instance().value = 'hello';
    input.simulate('change');
    expect(component.state().firstname).toEqual('hello');
})
