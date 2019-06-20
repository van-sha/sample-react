import React from 'react';
import PropTypes from 'prop-types';

const GridHeader = ({ headers }) => {
    return (
		<thead className='user-grid-header'>
            <tr>
            { headers.map(
                (header, key) => <th key={key}>{header}</th>
            )}
            </tr>
        </thead>
	);

}

GridHeader.propTypes = {
	headers: PropTypes.array.isRequired,
};


export default GridHeader;