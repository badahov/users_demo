import { Form } from 'antd';

import UserRolesFormModel from './main';

export default Form.create({
  name: 'user_roles_form',
  mapPropsToFields(props) {
    let roles = [];
    if (props.item.roles) {
      roles = props.item.roles.map((item) => {
        return String(item.id);
      });
    }

    return {
      roles: Form.createFormField({
        ...props.operator_code,
        value: roles,
      }),
    };
  },
})(UserRolesFormModel);
