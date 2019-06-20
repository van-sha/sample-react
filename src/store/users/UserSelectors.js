import { createSelector } from 'reselect';
import { toCamelCase } from '../../utils/caseFormatter.js';

const getUsers = (state) => {
	const users = state.users.list.toList().toJS();
	return users;
};

const getSortedUserList = createSelector(
	[getUsers],
	(users) => {
		const sortedUsers = users.sort((a, b) => (a.name > b.name) - (a.name < b.name));
		return sortedUsers.length > 0 ? sortedUsers : [];
	}
);

const getUserById = (state, id) => {
   const users = state.users.list;
   return users.get(id).toJS();
}
const getCompany = (state, id) => {
    const user = getUserById(state, id);
    const name = toCamelCase(user.company);
    const company = state.companies.get(name);
    return company.toJS();

}
const getUserWithCompany = createSelector(
    [getUserById, getCompany],
    (user, company) => {
        return {
            ...user,
            company: {
                ...company
            }
        }

    }
);

export {
    getSortedUserList,
    getUserWithCompany,
}
