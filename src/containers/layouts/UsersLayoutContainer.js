import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsersData } from '../../store/users/UserServices.js';
import UsersLayout from '../../components/layouts/UsersLayout.jsx';

function mapStateToProps(state, ownProps) {
    return {
		isLoading: state.users.loading,
        isError: state.users.error,
        users: state.users.list.toList().toJS(),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getUsers: bindActionCreators(getUsersData, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersLayout);