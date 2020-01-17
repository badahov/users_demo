import { Form } from 'antd';

import UserDataFormModel from './main';

export default Form.create({
  name: 'user_data_form',
  mapPropsToFields(props) {
    return {
      operator_code: Form.createFormField({
        ...props.item.operator_code,
        value: props.item.operator_code,
      }),
      operator_name: Form.createFormField({
        ...props.item.operator_name,
        value: props.item.operator_name,
      }),
      operator_login: Form.createFormField({
        ...props.item.operator_login,
        value: props.item.operator_login,
      }),
      is_admin: Form.createFormField({
        ...props.item.is_admin,
        value: props.item.is_admin,
      }),
      is_reprint_admin: Form.createFormField({
        ...props.item.is_reprint_admin,
        value: props.item.is_reprint_admin,
      }),
    };
  },
})(UserDataFormModel);
