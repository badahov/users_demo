import React, { Component } from 'react';

import { Form, Button, Row, Input, InputNumber, Switch, Drawer } from 'antd';

const style = {
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  borderTop: '1px solid #e9e9e9',
  padding: '10px 16px',
  background: '#fff',
  textAlign: 'right',
  zIndex: 2000,
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class UserAddFormModel extends Component {
  state = {
    DrawerWidth: 550,
    DrawerZIndex: 1050,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        delete values.confirm;
        this.props.submitForm(values);
      }
    });
  };

  onClose = () => {
    this.props.onClose();
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Пароли не совпадают!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { form: {getFieldDecorator} } = this.props;

    return (
      <Drawer
        title={this.props.title}
        width={this.state.DrawerWidth}
        onClose={this.onClose}
        visible={this.props.visible}
        zIndex={this.state.DrawerZIndex}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Form.Item label="Код" hasFeedback>
              {getFieldDecorator('operator_code', {
                rules: [
                  { required: true, message: 'Пожалуйста, ввидите код пользователя' },
                ],
              })(<InputNumber style={{ width: '65%' }} min={1} placeholder="Код пользователя"/>)}
            </Form.Item>

            <Form.Item label="Имя" hasFeedback>
              {getFieldDecorator('operator_name', {
                rules: [
                  { required: true, message: 'Пожалуйста, ввидите имя пользователя' },
                ],
              })(<Input placeholder="Имя пользователя"/>)}
            </Form.Item>

            <Form.Item label="Логин" hasFeedback>
              {getFieldDecorator('operator_login', {
                rules: [
                  { required: true, message: 'Пожалуйста, ввидите логин пользователя' },
                ],
              })(<Input placeholder="Логин пользователя"/>)}
            </Form.Item>

            <Form.Item label="Пароль" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Пожалуйста, введите пароль!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password/>)}
            </Form.Item>
            <Form.Item label="Повторить пароль" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Пожалуйста, повторите пароль!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
            </Form.Item>
            <Form.Item label="Администратор">
              {getFieldDecorator('is_admin', { valuePropName: 'checked' })(<Switch/>)}
            </Form.Item>
            <Form.Item label="Перепечать">
              {getFieldDecorator('is_reprint_admin', { valuePropName: 'checked' })(<Switch/>)}
            </Form.Item>
          </Row>
          <Row style={style}>
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Закрыить
            </Button>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Row>
        </Form>
      </Drawer>
    );
  }
}

export default Form.create({
  name: 'user_add_form',
  mapPropsToFields(props) {
    return {};
  },
})(UserAddFormModel);
