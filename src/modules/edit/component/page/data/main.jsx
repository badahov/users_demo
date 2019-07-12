'use strict';

import React, { Component } from "react";

import { Form, Button, Row, Input, InputNumber, Switch, Col, Spin } from 'antd';

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

class UserDataFormModel extends Component
{
    static defaultProps = {
        item: null,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.operator_id = Number(this.props.user_id);

                this.props.actionEdit(values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        let isLoad = (this.props.item) ? false : true;

        return (
            <Spin tip="Загрузка..." size="large" spinning={isLoad}>
                <Row>
                    <Col span={24}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Row gutter={16} style={{marginBottom:'50px'}}>
                                <Form.Item label="Код" hasFeedback>
                                    {getFieldDecorator('operator_code', {
                                        rules: [
                                            { required: true, message: 'Пожалуйста, ввидите код пользователя' }
                                        ],
                                    })(<InputNumber style={{ width: '65%' }} min={0} placeholder="Код пользователя" />)}
                                </Form.Item>

                                <Form.Item label="Имя" hasFeedback>
                                    {getFieldDecorator('operator_name', {
                                        rules: [
                                            { required: true, message: 'Пожалуйста, ввидите имя пользователя' }
                                        ],
                                    })(<Input placeholder="Имя пользователя" />)}
                                </Form.Item>

                                <Form.Item label="Логин" hasFeedback>
                                    {getFieldDecorator('operator_login', {
                                        rules: [
                                            { required: true, message: 'Пожалуйста, ввидите логин пользователя' }
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
