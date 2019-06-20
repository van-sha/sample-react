import React from 'react';
import PropTypes from 'prop-types';
import GridHeader from './GridHeader.jsx';
import GridBody from './GridBody.jsx';

const UserGrid = ({ gridData, headers }) => {
    if (!(gridData && gridData.length) ) {
        return null;
    }
    return (
		<table className='user-grid'>
            <GridHeader headers={headers} />
            <GridBody data={gridData} />
        </table>
	);

}
UserGrid.propTypes = {
    gridData: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
};

export default UserGrid;