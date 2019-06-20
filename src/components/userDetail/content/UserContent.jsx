import React from 'react';
import PropTypes from 'prop-types';
import GridHeader from '../../common/grid/GridHeader.jsx';
import FormattedAddress from '../../common/FormattedAddress.jsx';
import { toSentenceCase } from '../../../utils/caseFormatter.js';

const UserContent = ({ user }) => {
    const headers = ['Attribute', 'Value'];
    const contentData = Object.keys(user).map((userKey) => {
        const val = user[userKey];
        let dataValue = val;

        if (userKey === 'address') {
            dataValue =  <FormattedAddress address={val} />
        }
        if (userKey === 'company') {
            dataValue = val.name;
        }
        return {
            key: userKey,
            name: toSentenceCase(userKey),
            value: dataValue,
        }
    })
    return (
        <div className="user-content">
            <table>
                <GridHeader headers={headers} />
                <tbody>
                    {
                        contentData.map((data, key) => (
                            <tr key={key}>
                                <td>{data.name}</td>
                                <td>{data.value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    );
}

UserContent.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserContent;