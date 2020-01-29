import React from 'react';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import noop from 'lodash/noop';

import UsersInbox from '../component/main';

configure({ adapter: new Adapter() });

const header = {
  code: null,
  login: null,
  name: null,
  status: '1',
};

const location = {
  query: {},
};

const access = {
  user: {
    create: true,
    delete: true,
    reading: true,
    update: true,
  },
};

describe('Users', () => {
  it('Layout default page correctly', () => {
    const tree = renderer.create(
      <UsersInbox
        modelCurrentUser={() => noop}
        modelServer={() => noop}
        sort={() => noop}
        setHeader={() => noop}
        modelItems={() => noop}
        modelDelete={() => noop}
        modelAdd={() => noop}
        header={header}
        location={location}
        visibleUserAddForm={false}
        access={access}
        loading
        collapsedSiderMenu
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
