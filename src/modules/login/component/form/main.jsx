import React from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const FormLogin = (props) => {
  const {
    authLogin,
    form: {
      getFieldDecorator,
      validateFieldsAndScroll,
      validateFields,
    },
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        authLogin(values);
      }
    });
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value) {
      validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 14, offset: 5 },
      lg: { span: 10, offset: 7 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };

  return (
    <Form
      className="form-login"
      wrapperCol={formItemLayout.wrapperCol}
      onSubmit={handleSubmit}
    >
      <Form.Item
        className="item-input-login"
      >
        {getFieldDecorator('login', {
          rules: [{ required: true, message: 'Впишите логин', whitespace: true }],
        })(<Input placeholder="Логин" />)}
      </Form.Item>
      <Form.Item
        className="item-input-password"
      >
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Впишите пароль',
            },
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input.Password placeholder="Пароль" />)}
      </Form.Item>
      <Form.Item
        wrapperCol={tailFormItemLayout.wrapperCol}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

FormLogin.propTypes = {
  form: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.func,
  ])).isRequired,
  authLogin: PropTypes.func.isRequired,
};

export default FormLogin;
