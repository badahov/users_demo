import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  Layout,
  Form,
  Input,
  Row,
  Col,
  Button,
} from 'antd';

const { Content } = Layout;

const helmetContext = {};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmDirty: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      authLogin,
      form: {
        validateFieldsAndScroll,
      },
    } = this.props;

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        authLogin(values);
      }
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const {
      form: {
        validateFields,
      },
    } = this.props;

    const { confirmDirty } = this.state;

    if (value && confirmDirty) {
      validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const {
      form: {
        getFieldDecorator,
      },
    } = this.props;

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
      <HelmetProvider context={helmetContext}>
        <Layout className="auth">
          <Helmet title="Авторизация" />
          <Content>
            <Row className="form-box animated fadeInDown">
              <Col span={10} offset={7}>
                <h1 className="logo-name">USER</h1>
                <h3>Добро пожаловать</h3>
              </Col>
              <Col span={10} offset={7}>
                <Form
                  wrapperCol={formItemLayout.wrapperCol}
                  onSubmit={this.handleSubmit}
                >
                  <Form.Item>
                    {getFieldDecorator('login', {
                      rules: [{ required: true, message: 'Впишите логин', whitespace: true }],
                    })(<Input placeholder="Логин" />)}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Впишите пароль',
                        },
                        {
                          validator: this.validateToNextPassword,
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
              </Col>
            </Row>
          </Content>
        </Layout>
      </HelmetProvider>
    );
  }
}

Login.propTypes = {
  form: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.func,
  ])).isRequired,
  authLogin: PropTypes.func.isRequired,
};

export default Form.create({ name: 'register' })(Login);
