import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import UsersLayoutContainer from './containers/layouts/UsersLayoutContainer.js';
import UsersListContainer from './containers/userList/UsersListContainer.js';
import UserDetailsContainer from './containers/userDetail/UserDetailsContainer.js';
import ErrorPage from './components/common/ErrorPage.jsx';

const RoutesDetail = () => {
    return (
      <div className="app-content">
        <Switch>
          <Route
            exact
            path="/user-list"
            render={(props) => (
              <UsersLayoutContainer>
                <UsersListContainer {...props} />
              </UsersLayoutContainer>
            )}
            key="userListPage"
          />
          <Route
            exact
            path="/details/:userId"
            render={(props) => (
              <UsersLayoutContainer>
                <UserDetailsContainer {...props} />
              </UsersLayoutContainer>
              )}
            key="userDetailPage"
          />
          <Route
            exact
            path="/404"
            component={ErrorPage}
            key="404Route"
          />,
          <Redirect
            exact
            from="/"
            to="/user-list"
            key="homeNewUserRedirect"
          />
          <Redirect
            from="*"
            to="/404"
            key="404Redirect"
          />,
        </Switch>  
      </div>
    );
}
export default RoutesDetail;