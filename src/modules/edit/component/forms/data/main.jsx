import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Button,
  Row,
  Input,
  InputNumber,
  Switch,
  Col,
  Spin,
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

class UserDataFormModel extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      form,
      user_id: userId,
      submit,
    } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.operator_id = Number(userId);

        submit(values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  render() {
    const {
      item,
      form: {
        getFieldDecorator,
      },
    } = this.props;

    const isLoad = (!item);

    return (
      <Spin tip="Загрузка..." size="large" spinning={isLoad}>
        <Row>
          <Col span={24}>
            <Form
              labelCol={formItemLayout.labelCol}
              wrapperCol={formItemLayout.wrapperCol}
              onSubmit={this.handleSubmit}
            >
              <Row gutter={16} style={{ marginBottom: '50px' }}>
                <Form.Item label="Код" hasFeedback>
                  {getFieldDecorator('operator_code', {
                    rules: [
                      { required: true, message: 'Пожалуйста, ввидите код пользователя' },
                    ],
                  })(
                    <InputNumber
                      style={{ width: '65%' }}
                      min={0}
                      placeholder="Код пользователя"
                    />,
                  )}
                </Form.Item>

                <Form.Item label="Имя" hasFeedback>
                  {getFieldDecorator('operator_name', {
                    rules: [
                      { required: true, message: 'Пожалуйста, ввидите имя пользователя' },
                    ],
                  })(<Input placeholder="Имя пользователя" />)}
                </Form.Item>

                <Form.Item label="Логин" hasFeedback>
                  {getFieldDecorator('operator_login', {
                    rules: [
                      { required: true, message: 'Пожалуйста, ввидите логин пользователя' },
                    ],
                  })(<Input placeholder="Логин пользователя" />)}
                </Form.Item>

                <Form.Item label="Администратор">
                  {getFieldDecorator('is_admin', { valuePropName: 'checked' })(<Switch />)}
                </Form.Item>

                <Form.Item label="Перепечать">
                  {getFieldDecorator('is_reprint_admin', { valuePropName: 'checked' })(<Switch />)}
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
      </Spin>
    );
  }
}

UserDataFormModel.propTypes = {
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
  }).isRequired,
};

export default UserDataFormModel;
