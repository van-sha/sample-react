import React from 'react';
import PropTypes from 'prop-types';
import GridRow from './GridRow';

const GridBody = ({ data }) => {
    return (
		<tbody className='user-grid-body'>
            {
                 data.map((rowData, key) => <GridRow data={rowData} key={key} />)
            }
        </tbody>
	);

}
GridBody.propTypes = {
    data: PropTypes.array.isRequired,
};

export default GridBody;