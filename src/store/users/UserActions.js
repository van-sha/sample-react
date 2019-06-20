import { createAction } from 'redux-actions';

const usersLoading = createAction('USERS_LOAD_REQUEST');
const usersLoaded = createAction('USERS_LOAD_SUCCESS');
const usersNotLoaded = createAction('USERS_LOAD_ERROR');


export {
	usersLoading,
	usersLoaded,
	usersNotLoaded,
};
