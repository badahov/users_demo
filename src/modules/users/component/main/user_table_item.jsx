import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, Button, Popconfirm} from 'antd';

import {Link} from 'react-router';

export default class UserTableItem extends Component
{
    static propTypes = {
        access: PropTypes.objectOf(PropTypes.shape({
            user: PropTypes.arrayOf(PropTypes.shape({
                delete: PropTypes.bool.isRequired,
                update: PropTypes.bool.isRequired,
            })),
        })),
        isAdmin: PropTypes.bool,
        isReprintAdmin: PropTypes.bool,
        userCode: PropTypes.number,
        userId: PropTypes.number.isRequired,
        userLogin: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
    };

    render()
    {
        const {isAdmin, isReprintAdmin, userCode, userName, userLogin, access, userId} = this.props;

        let admin = (isAdmin) ? 'Да' : 'Нет';
        let reprintAdmin = (isReprintAdmin) ? 'Да' : 'Нет';

        return (
            <tr>
                <td>{userCode}</td>
                <td>{userName}</td>
                <td>{userLogin}</td>
                <td>{admin}</td>
                <td>{reprintAdmin}</td>

                <td className="box-button">
                    <Button.Group>
                    {
                        (access.user.update)
                        ?
                            <Link className="ant-btn ant-btn-primary ant-btn-sm ant-btn-icon-only" title="Изменить" to={`/user/edit/${userId}/data`}>
                                <Icon type="edit" />
                            </Link>
                        : null
                    }
                    {
                        (access.user.delete)
                        ?
                            <Popconfirm
                                title="Удалить пользователя?"
                                onConfirm={() => this.props.onDeleteUser(userId)}
                                okText="Да"
                                cancelText="Нет"
                                placement="left"
                                zIndex={1050}
                            >
                                <Button type="primary" size="small" icon="delete" />
                            </Popconfirm>
                        : null
                    }
                    </Button.Group>
                </td>
            </tr>
        )
    }
}