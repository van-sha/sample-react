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
   const user = users.get(id)
   return user ? user.toJS() : null;
}
const getCompany = (state, id) => {
    const user = getUserById(state, id);
    if (!user) {
        return null;
    }
        const name = toCamelCase(user.company);
        const company = state.companies.get(name);
        return company ? company.toJS(): null;

}
const getUserWithCompany = createSelector(
    [getUserById, getCompany],
    (user, company) => {
        if (!user){
            return null;
        }

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
