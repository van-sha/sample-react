import { Map } from 'immutable';
import * as UsersModels  from './UserModels.js';

const addressParser = (address) => {
    const { geo } = address;
    return UsersModels.Address({
        ...address,
        geo: geo ? UsersModels.Geo(geo) : UsersModels.Geo(),
    });
};

const usersListParsers = (users) => {

    const usersList = users.reduce(
        ( userMap, user ) => {
            const { id, address, company } = user;
            const userEntry  = UsersModels.User({
                ...user,
                company: company
                    ? company.name
                    : null,
                address: address
                    ? addressParser(address)
                    : UsersModels.InitialAddressState,
            });
            return userMap.set(id, userEntry);
        },
        Map()
    );
    return usersList;
}

export {
    usersListParsers
}