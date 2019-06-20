import { connect } from 'react-redux';
import { UsersList } from '../../components/userList/UsersList.jsx';
import { getSortedUserList } from '../../store/users/UserSelectors.js';

function mapStateToProps(state) {
    return {
			users: getSortedUserList(state),
	};
}

export default connect(mapStateToProps)(UsersList);
