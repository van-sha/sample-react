import { connect } from 'react-redux';
import { UserDetails } from '../../components/userDetail/UserDetails.jsx';
import { getUserWithCompany } from '../../store/users/UserSelectors.js';

function mapStateToProps(state, ownProps) {
    const { match } = ownProps;
	const userId = match.params.userId;
	const user = userId ? getUserWithCompany(state, parseInt(userId)) : null;
	// const userObject = user ? user.toObject() : null
    return {
		user,
	};
}

export default connect(mapStateToProps)(UserDetails);
