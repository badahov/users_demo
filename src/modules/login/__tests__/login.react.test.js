import React from 'react';
import LoginInbox from '../main';

import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login', () => {
  it('Layout Index correctly', () => {
    const tree = renderer.create(<LoginInbox />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
