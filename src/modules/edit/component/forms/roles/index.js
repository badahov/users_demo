import { Form } from 'antd';
import map from 'lodash/map';

import UserRolesFormModel from './main';

export default Form.create({
  name: 'user_roles_form',
  mapPropsToFields(props) {
    let roles = [];
    if (props.item.roles) {
      roles = map(props.item.roles, (item) => String(item.id));
    }

    return {
      roles: Form.createFormField({
        ...props.operator_code,
        value: roles,
      }),
    };
  },
})(UserRolesFormModel);
