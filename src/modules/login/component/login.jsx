'use strict';

import React from 'react';
import Helmet from "react-helmet";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLogin, authLoginDefault } from '../store/actions/auth';

import {
    Layout,
    Form,
    Input,
    Row,
    Col,
    Button
} from 'antd';

const { Content } = Layout;

class Login extends React.Component
{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                new Promise((resolve) => {
                    this.props.authLogin( values );
                    setTimeout(() => { resolve(true); }, 1000);
                });
            }
        });
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

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
            <Layout className="auth">
                <Helmet title="Авторизация" />
                <Content>
                    <Row className="form-box animated fadeInDown">
                        <Col span={10} offset={7}>
                            <h1 className="logo-name">VO</h1>
                            <h3>Добро пожаловать</h3>
                        </Col>
                        <Col span={10} offset={7} >
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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

                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Войти
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(Login);

export default connect(
    (state) => { return { login: state.auth.login }; },
    (dispatch) => bindActionCreators({authLogin,authLoginDefault,dispatch}, dispatch)
)(WrappedRegistrationForm);
