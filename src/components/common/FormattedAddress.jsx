import React from 'react';
import PropTypes from 'prop-types';

const FormattedAddress = ({ address }) => {
    const { street, suite, city, zipcode } = address;
    const addressLine1 = `${suite}, ${street}`;
    const addressLine2 = `${city} ${zipcode}`;
    return (
        <div className="address">
            <div>{addressLine1}</div>
            <div>{addressLine2}</div>
        </div>
    );
}
FormattedAddress.propTypes = {
	address: PropTypes.object.isRequired,
};

export default FormattedAddress