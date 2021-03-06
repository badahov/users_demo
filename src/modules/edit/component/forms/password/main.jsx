import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Button,
  Row,
  Input,
  Col,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
};

class UserPasswordFormModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmDirty: false,
    };
  }

  handleSubmit = (e) => {
    const {
      form,
      user_id: userId,
      submit,
    } = this.props;

    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        delete values.confirm;

        values.operator_id = Number(userId);

        submit(values);
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
      form: {
        getFieldDecorator,
      },
    } = this.props;

    return (
      <Row>
        <Col span={24}>
          <Form
            labelCol={formItemLayout.labelCol}
            wrapperCol={formItemLayout.wrapperCol}
            onSubmit={this.handleSubmit}
          >
            <Row gutter={16} style={{ marginBottom: '50px' }}>
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
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
              </Form.Item>
            </Row>
            <Row
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px 0 10px',
                background: '#fff',
                textAlign: 'left',
              }}
            >
              <Button type="primary" htmlType="submit">
                Изменить
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

UserPasswordFormModel.defaultProps = {
  item: null,
};

UserPasswordFormModel.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  user_id: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  item: PropTypes.shape({
    is_admin: PropTypes.bool.isRequired,
    is_reprint_admin: PropTypes.bool.isRequired,
    operator_code: PropTypes.number.isRequired,
    operator_id: PropTypes.number.isRequired,
    operator_login: PropTypes.string.isRequired,
    operator_name: PropTypes.string.isRequired,
    operator_token: PropTypes.string.isRequired,
  }),
};

export default UserPasswordFormModel;
