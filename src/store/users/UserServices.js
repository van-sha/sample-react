import axios from 'axios';
import * as UsersActions  from './UserActions.js';

const getUsersData = () => {
	return (dispatch) => {
		dispatch(UsersActions.usersLoading());
        const url = 'http://jsonplaceholder.typicode.com/users';
        return axios.get(url).then((response) => {
            const users = response.data;
			dispatch(UsersActions.usersLoaded({
                users,
            }));
		}).catch((error) => {
			console.error('usersService.getUsersData(): Error: ', error);
			return dispatch(UsersActions.usersNotLoaded({
				error,
			}));
		});
	};
};

export {
    getUsersData,
}
