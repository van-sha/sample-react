import { Record } from 'immutable';

const Company = Record({
    name: null,
    catchPhrase: null,
    bs: null,
})

const InitialCompanyState = Company();

export {
    Company,
    InitialCompanyState,
}