import React from 'react';

import App from '../components/App';

import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<App />);
  })