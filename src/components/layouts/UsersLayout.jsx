import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class UsersLayout extends PureComponent {
	static propTypes = {
        children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.element,
			PropTypes.string,
		]),
		isLoading: PropTypes.bool,
        isError: PropTypes.bool,
        users: PropTypes.array,
        getUsers: PropTypes.func.isRequired,
	};
    static defaultProps = {
		isLoading: true,
        isError: false,
        users: null,
        children: null,
	}

	componentDidMount() {
        const { users } = this.props;
        if (!users || !users.length) {
            this.props.getUsers();
        }
    }
    render() {
		const { children, isError, isLoading, users } = this.props;
        if (isError) {
            return <div>Error Loading Users data....</div>;
        }
        if (isLoading) {
            return <div>Loading Users data....</div>;
        }
		return (
			<div className='users-layout'>
                { (users && users.length > 0)
                    ? <div> {children} </div>
                    : null
                }
			</div>
		);
	}
}

export default UsersLayout;