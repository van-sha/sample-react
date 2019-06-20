import React from 'react';
import PropTypes from 'prop-types';
import UserGrid from '../common/grid/UserGrid';

export const UsersList = ({ users }) => {
    const headers = ['Name', 'UserName', 'E-mail', 'Address'];
    return (
        <div className='userList'>
            <header>
                <h2>User List</h2>
            </header>
            <UserGrid gridData={users} headers={headers} />
        </div>
    );
}
UsersList.propTypes = {
    users: PropTypes.array.isRequired,
};

