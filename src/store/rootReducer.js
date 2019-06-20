import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { breakpoints } from '../utils/browserBreakpoints.js';
import UserReducer from './users/UserReducers.js';
import CompanyReducers from './companies/CompanyReducers.js';

const rootReducer = () => combineReducers({
	users: UserReducer,
	companies: CompanyReducers,
	browser: createResponsiveStateReducer(breakpoints),
});

export default rootReducer;
