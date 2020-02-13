import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Popconfirm } from 'antd';

import { Link } from 'react-router-dom';

const UserTableItem = (props) => {
  const {
    isAdmin,
    isReprintAdmin,
    userCode,
    userName,
    userLogin,
    access,
    userId,
    onDeleteUser,
  } = props;

  const admin = (isAdmin) ? 'Да' : 'Нет';
  const reprintAdmin = (isReprintAdmin) ? 'Да' : 'Нет';

  const { update: isUpdate, delete: isDelete } = access.user;

  const tmplButtonEdit = (isAction) => {
    if (isAction) {
      return (
        <Link
          className="ant-btn ant-btn-primary ant-btn-sm ant-btn-icon-only"
          title="Изменить"
          to={`/user/edit/${userId}/data`}
        >
          <Icon type="edit" />
        </Link>
      );
    }

    return null;
  };

  const tmplButtonDelete = (isAction) => {
    if (isAction) {
      return (
        <Popconfirm
          title="Удалить пользователя?"
          onConfirm={() => onDeleteUser(userId)}
          okText="Да"
          cancelText="Нет"
          placement="left"
          zIndex={1050}
        >
          <Button type="primary" size="small" icon="delete" />
        </Popconfirm>
      );
    }

    return null;
  };

  return (
    <tr>
      <td>{userCode}</td>
      <td>{userName}</td>
      <td>{userLogin}</td>
      <td>{admin}</td>
      <td>{reprintAdmin}</td>

      <td className="box-button">
        <Button.Group>
          { tmplButtonEdit(isUpdate) }
          { tmplButtonDelete(isDelete) }
        </Button.Group>
      </td>
    </tr>
  );
};

UserTableItem.propTypes = {
  access: PropTypes.shape({
    user: PropTypes.shape({
      delete: PropTypes.bool.isRequired,
      update: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isReprintAdmin: PropTypes.bool.isRequired,
  userCode: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  userLogin: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default React.memo(UserTableItem);
