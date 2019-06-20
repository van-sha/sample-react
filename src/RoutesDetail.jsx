import React from 'react';
import { Route } from "react-router-dom";
import UsersLayoutContainer from './containers/layouts/UsersLayoutContainer.js';
import UsersListContainer from './containers/userList/UsersListContainer.js';
import UserDetailsContainer from './containers/userDetail/UserDetailsContainer.js';

const RoutesDetail = () => {
    return (
      <div className="app-content">
        <Route
          exact
          path="/"
          render={(props) => (
            <UsersLayoutContainer>
              <UsersListContainer {...props} />
            </UsersLayoutContainer>
          )}
        />
        <Route
          exact
          path="/details/:userId"
          render={(props) => (
            <UsersLayoutContainer>
              <UserDetailsContainer {...props} />
            </UsersLayoutContainer>
            )}
        />
      </div>
    );
}
export default RoutesDetail;