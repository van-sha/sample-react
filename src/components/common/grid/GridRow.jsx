import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import FormattedAddress from '../../common/FormattedAddress.jsx';

const GridRow = ({ data }) => {
    const { id, name, username, email, address } = data;
    const detailPageLink = `/details/${id}`;
    return (
        <tr className = "user-row">
            <td> <Link to={detailPageLink} >{name}</Link></td>
            <td>{username}</td>
            <td>{email}</td>
            <td><FormattedAddress address={address} /></td>
        </tr>
    );
}
GridRow.propTypes = {
    data: PropTypes.object.isRequired,
};

export default GridRow;