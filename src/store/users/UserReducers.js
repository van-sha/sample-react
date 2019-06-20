import { handleActions } from 'redux-actions';
import * as UsersParsers from './UserParsers.js';
import * as UsersActions  from './UserActions.js';
import * as UsersModels  from './UserModels.js';

const UsersReducer = handleActions({
	[UsersActions.usersLoading]: (state) => {
		return state.merge({
			loading: true,
		});
	},
	/* ALL USERS */
	[UsersActions.usersLoaded]: (state, action) => {
		const { users } = action.payload;
		const usersList = UsersParsers.usersListParsers(users);
		const newUsersState = state.merge({
			loading: false,
			list: usersList
		});
		return newUsersState;
	},
	[UsersActions.usersNotLoaded]: (state) => {
		return state.merge({
			loading: false,
			error: true,
		});
	},
	
}, UsersModels.InitialUsersState);

export default UsersReducer;
