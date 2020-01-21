import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Button,
  Row,
  Input,
  InputNumber,
  Switch,
  Drawer,
} from 'antd';

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
  constructor(props) {
    super(props);

    this.state = {
      DrawerWidth: 550,
      DrawerZIndex: 1050,
    };
  }

  handleSubmit = (e) => {
    const { form, submitForm } = this.props;

    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        delete values.confirm;
        submitForm(values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    const { confirmDirty } = this.state;

    this.setState({
      confirmDirty: confirmDirty || !!value,
    });
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
    const { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const {
      title,
      onClose,
      visible,
      form: {
        getFieldDecorator,
      },
    } = this.props;

    const { DrawerWidth, DrawerZIndex } = this.state;

    return (
      <Drawer
        title={title}
        width={DrawerWidth}
        onClose={onClose}
        visible={visible}
        zIndex={DrawerZIndex}
      >
        <Form
          labelCol={formItemLayout.labelCol}
          wrapperCol={formItemLayout.wrapperCol}
          onSubmit={this.handleSubmit}
        >
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Form.Item label="Код" hasFeedback>
              {
                getFieldDecorator('operator_code', {
                  rules: [
                    { required: true, message: 'Пожалуйста, ввидите код пользователя' },
                  ],
                })(<InputNumber style={{ width: '65%' }} min={1} placeholder="Код пользователя" />)
              }
            </Form.Item>

            <Form.Item label="Имя" hasFeedback>
              {
                getFieldDecorator('operator_name', {
                  rules: [
                    { required: true, message: 'Пожалуйста, ввидите имя пользователя' },
                  ],
                })(<Input placeholder="Имя пользователя" />)
              }
            </Form.Item>
            <Form.Item label="Логин" hasFeedback>
              {
                getFieldDecorator('operator_login', {
                  rules: [
                    { required: true, message: 'Пожалуйста, ввидите логин пользователя' },
                  ],
                })(<Input placeholder="Логин пользователя" />)
              }
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
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Повторить пароль" hasFeedback>
              {
                getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Пожалуйста, повторите пароль!',
                    },
                    {
                      validator: this.compareToFirstPassword,
                    },
                  ],
                })(
                  <Input.Password
                    onBlur={
                      this.handleConfirmBlur
                    }
                  />,
                )
              }
            </Form.Item>
            <Form.Item label="Администратор">
              {getFieldDecorator('is_admin', { valuePropName: 'checked' })(<Switch />)}
            </Form.Item>
            <Form.Item label="Перепечать">
              {
                getFieldDecorator('is_reprint_admin', {
                  valuePropName: 'checked',
                })(<Switch />)
              }
            </Form.Item>
          </Row>
          <Row style={style}>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
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

UserAddFormModel.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserAddFormModel;
