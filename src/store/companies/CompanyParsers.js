import * as CompanyModels  from './CompanyModels.js';
import { toCamelCase } from '../../utils/caseFormatter.js';

const companiesDataParsers = (users, initialState) => {

    const companiesList = users.reduce(
        ( companiesMap, user ) => {
            const { company, company: { name } } = user;
            const formattedName = toCamelCase(name);
            const userEntry  = CompanyModels.Company({
                ...company,
            });
            return companiesMap.set(formattedName, userEntry);
        },
        initialState
    );
    return companiesList;
}

export {
    companiesDataParsers,
}