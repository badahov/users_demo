import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Button,
  Row,
  Input,
  List,
  Drawer,
  Col,
  Icon,
  Popconfirm,
} from 'antd';

const ButtonGroup = Button.Group;

const { Search } = Input;

class UserAddFormModel extends Component {
  constructor(props) {
    super(props);

    const { visible } = props;

    this.state = {
      visible,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, actionAdd } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        delete values.confirm;

        actionAdd(values);
      }
    });
  };

  onRoleEditAction = (ev, id) => {
    const parent = ev.target.parentElement.parentElement.parentElement.parentElement;
    const listRoleItemId = parent.querySelector(`.link-role-name-${id}`);
    const inputRoleName = parent.querySelector(`.input-role-name-${id}`);
    const btnRoleEdit = parent.querySelector(`.btn-role-edit-${id}`);
    const btnRoleDelete = parent.querySelector(`.btn-role-delete-${id}`);
    const btnRoleSave = parent.querySelector(`.btn-role-save-${id}`);

    listRoleItemId.style.display = 'none';
    inputRoleName.style.display = 'inline';

    btnRoleEdit.style.display = 'none';
    btnRoleDelete.style.display = 'none';

    if (btnRoleSave) {
      btnRoleSave.setAttribute('style', 'display: inline;');
    }
  };

  onRoleDelete = (id) => {
    const { actionDelete, onRoleSelect } = this.props;
    actionDelete({ id }, (json) => {
      onRoleSelect(0);

      return json;
    });
  };

  onRoleEdit = (ev, id, name) => {
    const { actionEdit } = this.props;

    const parent = ev.target.parentElement.parentElement.parentElement.parentElement;

    actionEdit({
      id,
      name,
    }, (json) => {
      if (json.status === 'ok' && json.result) {
        const listRoleItemId = parent.querySelector(`.link-role-name-${id}`);
        const inputRoleName = parent.querySelector(`.input-role-name-${id}`);
        const btnRoleEdit = parent.querySelector(`.btn-role-edit-${id}`);
        const btnRoleDelete = parent.querySelector(`.btn-role-delete-${id}`);
        const btnRoleSave = parent.querySelector(`.btn-role-save-${id}`);

        listRoleItemId.style.display = 'inline';
        inputRoleName.style.display = 'none';

        btnRoleEdit.style.display = 'inline';
        btnRoleDelete.style.display = 'inline';

        if (btnRoleSave) {
          btnRoleSave.setAttribute('style', 'display: none;');
        }

        // btnRoleSave ? btnRoleSave.style.display = 'none' : null;
      }

      return json;
    });
  };

  shouldComponentUpdate = (nextProps) => {
    const { visible } = this.props;
    if (visible !== nextProps.visible) {
      this.setState({
        visible: nextProps.visible,
      });
    }

    return true;
  };

  render() {
    const {
      title,
      form: {
        getFieldDecorator,
      },
      onClose,
      roleList,
      onRoleSelect,
    } = this.props;

    const { visible } = this.state;

    // console.log(this.props);

    return (
      <Drawer
        title={title}
        width={550}
        onClose={onClose}
        visible={visible}
        zIndex={1050}
      >
        <Row style={{ marginBottom: '20px' }}>
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
              style={{ marginTop: '10px' }}
              bordered
              dataSource={roleList}
              renderItem={(item) => (
                <List.Item
                  className={`list-role-item list-role-item-${item.id}`}
                  actions={(item.editable) ? [
                    <ButtonGroup key="btn-g-1">
                      <Button
                        className={`btn-role-edit btn-role-edit-${item.id}`}
                        onClick={(ev) => this.onRoleEditAction(ev, item.id)}
                        size="small"
                        icon="edit"
                      />
                      <Popconfirm
                        title="Удалить роль?"
                        onConfirm={() => this.onRoleDelete(item.id)}
                        okText="Да"
                        cancelText="Нет"
                        placement="left"
                        zIndex={1050}
                      >
                        <Button
                          className={`btn-role-delete btn-role-delete-${item.id}`}
                          size="small"
                          icon="delete"
                        />
                      </Popconfirm>
                    </ButtonGroup>,
                  ] : null}
                >
                  <Button
                    onClick={() => onRoleSelect(item.id)}
                    className={`link-role-name link-role-name-${item.id}`}
                    style={{ width: '100%' }}
                  >
                    {item.name}
                  </Button>
                  <Search
                    className={`input-role-name input-role-name-${item.id}`}
                    placeholder="Название новой роли"
                    enterButton={<Icon type="save" />}
                    size="small"
                    defaultValue={item.name}
                    onSearch={(value, event) => this.onRoleEdit(event, item.id, value)}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Drawer>
    );
  }
}

UserAddFormModel.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  actionAdd: PropTypes.func.isRequired,
  actionDelete: PropTypes.func.isRequired,
  actionEdit: PropTypes.func.isRequired,
  onRoleSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.func,
  ])).isRequired,
  roleList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    editable: PropTypes.number.isRequired,
  })).isRequired,
};

export default UserAddFormModel;
