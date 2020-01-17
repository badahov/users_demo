import { Form } from 'antd';
import UserAddFormModel from './main';

export default Form.create({
  name: 'user_add_form',
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        ...props.sourceTitle,
        value: props.sourceTitle,
      }),
    };
  },
})(UserAddFormModel);
