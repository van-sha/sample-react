import React from 'react';
import PropTypes from 'prop-types';
import UserContent from './content/UserContent.jsx';

export const UserDetails = ({ user }) => {
    if (!user) {
        return <div className="no-user"> User Doesn't exist</div>
    }
    return (
        <div className='userDetail'>
            <header>
                <h2> User Detail</h2>
            </header>
            <main>
                <div className='content-wrapper'>
                    <UserContent user={user} />
                </div>
            </main>
        </div>
    );
};

UserDetails.propTypes = {
    user: PropTypes.object,
};


