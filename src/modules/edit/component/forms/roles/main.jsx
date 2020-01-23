import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import noop from 'lodash/noop';

import {
  Form,
  Button,
  Row,
  Select,
  Col,
} from 'antd';

import Query from '../../../../app/component/core/query';

const { Option } = Select;

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

class UserRolesFormModel extends Component {
  constructor(props) {
    super(props);

    const ReactQueryObject = new Query({
      pointApi: 'interface-users/role-select',
    });

    ReactQueryObject.send().then((result) => {
      const option = map(result, (item) => (<Option key={item.id}>{item.title}</Option>));

      this.setState({
        options: option,
      });

      return option;
    }).catch(() => noop);

    this.state = {
      options: [],
      selected: [],
    };
  }

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

        const rules = map(values.roles, (item) => ({ id: Number(item) }));

        values.roles = rules;

        submit(values);
      }
    });
  };

  handleSelectedChange = (value) => {
    this.setState({
      selected: value,
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { options, selected } = this.state;

    return nextState.options !== options
      || nextState.selected !== selected;
  };

  render() {
    const {
      form: {
        getFieldDecorator,
      },
    } = this.props;
    const { options } = this.state;

    return (
      <Row>
        <Col span={24}>
          <Form
            labelCol={formItemLayout.labelCol}
            wrapperCol={formItemLayout.wrapperCol}
            onSubmit={this.handleSubmit}
          >
            <Row gutter={16} style={{ marginBottom: '50px' }}>
              <Form.Item label="Выбор ролей" hasFeedback>
                {getFieldDecorator('roles', {
                  // rules: [
                  //     { required: true, message: 'Пожалуйста, выберите роль' }
                  // ],
                })(
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Пожалуйста, выберите роли"
                    onChange={this.handleSelectedChange}
                  >
                    {options}
                  </Select>,
                )}
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

UserRolesFormModel.propTypes = {
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

export default UserRolesFormModel;
