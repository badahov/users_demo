import React, {Component} from "react";

import {Form, Button, Row, Input, Col} from 'antd';

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

class UserPasswordFormModel extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            confirmDirty: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                delete values.confirm;

                values.operator_id = Number(this.props.user_id);

                this.props.actionEdit(values);
            }
        });
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
        const { getFieldDecorator } = this.props.form;

        return (
            <Row>
                <Col span={24}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Row gutter={16} style={{marginBottom:'50px'}}>
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

export default Form.create({
    name: 'user_password_form',
    mapPropsToFields() {
        return null;
    },
})(UserPasswordFormModel);
