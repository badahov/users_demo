'use strict';

import React from 'react';
import RoleMain from '../main';

import { configure, mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Role', () => {
    it('Layout Index correctly', () => {
        const tree = renderer.create(<RoleMain />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
