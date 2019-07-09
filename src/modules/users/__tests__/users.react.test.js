'use strict';

import React from 'react';
import UsersMain from '../main';
import UserAddForm from '../component/main/user_add_form';

import { configure, mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Users', () => {
    it('Layout Index correctly', () => {
        const tree = renderer.create(<UsersMain />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('UserAddForm correctly', () => {
        const UserAddFormComponent = shallow(<UserAddForm
            title="Добавить пользователя"
            visible={true}
        />);
        expect(UserAddFormComponent).toMatchSnapshot();
    });
});
