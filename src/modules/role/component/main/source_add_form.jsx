import React, { Component } from "react";

import { Link } from "react-router";
import { Form, Button, Row, Input, List, Drawer, Col, Icon, message, Popconfirm } from 'antd';
const ButtonGroup = Button.Group;

const { Search } = Input;

class UserAddFormModel extends Component
{
    static defaultProps = {
        visible: true,
        visibleId: null,
        successionId: null,
        operationId: null,
        inputSourceId: null,
        stageId: null,
        title: null,
    };

    constructor(props)
    {
        super(props);

        this.state = {
            visible: props.visible
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                delete values.confirm;

                this.props.actionRole('add', values);
            }
        });
    };

    onClose = () => {
        this.props.onClose();
    };

    onRoleEditAction = (ev, id) => {
        let parent = ev.target.parentElement.parentElement.parentElement.parentElement;
        let listRoleItemId = parent.querySelector(`.link-role-name-${id}`);
        let inputRoleName  = parent.querySelector(`.input-role-name-${id}`);
        let btnRoleEdit    = parent.querySelector(`.btn-role-edit-${id}`);
        let btnRoleDelete  = parent.querySelector(`.btn-role-delete-${id}`);
        let btnRoleSave    = parent.querySelector(`.btn-role-save-${id}`);

        listRoleItemId.style.display = "none";
        inputRoleName.style.display = "inline";

        btnRoleEdit.style.display = "none";
        btnRoleDelete.style.display = "none";
        btnRoleSave ? btnRoleSave.style.display = "inline" : null;
    };

    onRoleDelete = (id) => {
        this.props.actionRole('delete', {
            id: id
        }, (json) => {
            if (json.status === "ok") {
                if (json.msg) {
                    message.success(json.msg);

                    this.props.onRoleSelect(0);
                }

                if (json.result) {
                    return json.result;
                } else {
                    return true;
                }
            } else if (json.msg) {
                message.error(this._errorMsg(json.msg));
                return false;
            }
        });


    };

    onRoleEdit = (ev, id, name) => {
        let parent = ev.target.parentElement.parentElement.parentElement.parentElement;

        this.props.actionRole('edit', {
            id: id,
            name: name
        }, (json) => {
            if (json.status === "ok") {
                if (json.msg) {
                    message.success(json.msg);
                }

                if (json.result) {
                    let listRoleItemId = parent.querySelector(`.link-role-name-${id}`);
                    let inputRoleName  = parent.querySelector(`.input-role-name-${id}`);
                    let btnRoleEdit    = parent.querySelector(`.btn-role-edit-${id}`);
                    let btnRoleDelete  = parent.querySelector(`.btn-role-delete-${id}`);
                    let btnRoleSave    = parent.querySelector(`.btn-role-save-${id}`);

                    listRoleItemId.style.display = "inline";
                    inputRoleName.style.display = "none";

                    btnRoleEdit.style.display = "inline";
                    btnRoleDelete.style.display = "inline";
                    btnRoleSave ? btnRoleSave.style.display = "none" : null;

                    return json.result;
                } else {
                    return true;
                }
            } else if(json.msg) {
                message.error(this._errorMsg(json.msg));
                return false;
            }
        });
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        if (this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }

        return true;
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Drawer
                title={this.props.title}
                width={550}
                onClose={this.onClose}
                visible={this.state.visible}
                zIndex={1050}
            >
                <Row style={{marginBottom:'20px'}}>
                    <Col span={24}>
                        <Form layout="inline" onSubmit={this.handleSubmit}>
                            <Form.Item hasFeedback>
                                {getFieldDecorator('name', {
                                    // rules: [
                                    //     { required: true, message: 'Пожалуйста, ввидите код пользователя' }
                                    // ],
                                })(<Input placeholder="Название новой роли" />)}
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Добавить
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={24}>
                        <List
                            size="small"
                            style={{marginTop:'10px'}}
                            bordered
                            dataSource={this.props.roleList}
                            renderItem={item =>
                            <List.Item
                                className={`list-role-item list-role-item-${item.id}`}
                                actions={(item.editable) ? [
                                <ButtonGroup>
                                    <Button className={`btn-role-edit btn-role-edit-${item.id}`} onClick={(ev) => this.onRoleEditAction(ev, item.id)} size="small" icon="edit" />
                                    <Popconfirm
                                        title="Удалить роль?"
                                        onConfirm={() => this.onRoleDelete(item.id)}
                                        okText="Да"
                                        cancelText="Нет"
                                        placement="left"
                                        zIndex={1050}
                                    >
                                        <Button className={`btn-role-delete btn-role-delete-${item.id}`} size="small" icon="delete" />
                                    </Popconfirm>
                                </ButtonGroup>
                                ] : null}>
                                <Link onClick={(ev) => {
                                    this.props.onRoleSelect(ev, item.id)
                                }} className={`link-role-name link-role-name-${item.id}`} style={{width:'100%'}}>{item.name}</Link>

                                <Search
                                    className={`input-role-name input-role-name-${item.id}`}
                                    placeholder="Название новой роли"
                                    enterButton={<Icon type="save" />}
                                    size="small"
                                    defaultValue={item.name}
                                    onSearch={(value, event) => this.onRoleEdit(event, item.id, value)}
                                />
                            </List.Item>}
                        />
                    </Col>
                </Row>
            </Drawer>
        );
    }
}

export default Form.create({
    name: 'user_add_form',
    mapPropsToFields(props) {
        return {
            title: Form.createFormField({
                ...props.sourceTitle,
                value: props.sourceTitle,
            }),
        };
    },
})(UserAddFormModel);
