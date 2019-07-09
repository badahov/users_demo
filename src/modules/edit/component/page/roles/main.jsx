import React, {Component} from "react";

import {Form, Button, Row, Select, Col} from 'antd';
const { Option } = Select;

import ReactQuery from 'modules/app/component/core/query';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
};

class UserRolesFormModel extends Component
{
    constructor(props)
    {
        super(props);

        let ReactQueryObject = new ReactQuery({
            pointApi: 'interface-users/role-select',
        });

        ReactQueryObject.send().then((result) => {
            let option = [];
            result.map((item) => {
                option.push(<Option key={item.id}>{item.title}</Option>);
            });

            this.setState({
                options: option,
            });
        });

        this.state = {
            options: [],
            selected: []
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.operator_id = Number(this.props.user_id);

                let rules = [];
                values.roles.map((item) => {
                    rules.push({id: Number(item)});
                });

                values.roles = rules;

                this.props.actionEdit(values);
            }
        });
    };

    handleSelectedChange = value => {
        this.setState({
            selected: value,
        });
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.options !== this.state.options || nextState.selected !== this.state.selected;
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Row>
                <Col span={24}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Row gutter={16} style={{marginBottom:'50px'}}>
                            <Form.Item label="Выбор ролей" hasFeedback>
                                {getFieldDecorator('roles', {
                                    // rules: [
                                    //     { required: true, message: 'Пожалуйста, выберите роль' }
                                    // ],
                                })(<Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Пожалуйста, выберите роли"
                                    onChange={this.handleSelectedChange}
                                >
                                    {this.state.options}
                                </Select>)}
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
    name: 'user_roles_form',
    mapPropsToFields(props) {
        let roles = [];
        if (props.item.roles) {
            props.item.roles.map((item) => {
                roles.push(String(item.id));
            });
        }

        return {
            roles: Form.createFormField({
                ...props.operator_code,
                value: roles,
            }),
        };
    },
})(UserRolesFormModel);
