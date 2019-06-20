import { Record, Map } from 'immutable';

const Users = Record({
    loading: false,
    error: false,
    list: null,
})
const User = Record({
    id: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null,
});

const Address = Record({
    street: null,
    suite: null,
    city: null,
    zipcode: null,
    geo: null,
});

const Geo = Record({
    lat: null,
    lng: null,
});
const InitialUsersState = Users({
    list: Map(),
})
const InitialAddressState = Address({
    geo: Geo(),
});

const InitialUserState = User({
    address: InitialAddressState,
})

export {
    User,
    Address,
    Geo,
    InitialAddressState,
    InitialUserState,
    InitialUsersState,
}