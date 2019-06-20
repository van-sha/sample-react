import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as CompanyParsers from './CompanyParsers.js';
import * as UsersActions  from '../users/UserActions.js';

const CompaniesReducer = handleActions({
	/* LOAD CATEGORIES WHEN USERS DATA IS LAODED */
	[UsersActions.usersLoaded]: (state, action) => {
		const { users } = action.payload;
		const companiesList = CompanyParsers.companiesDataParsers(users, state);
		return companiesList;
	}
	
}, Map());

export default CompaniesReducer;
