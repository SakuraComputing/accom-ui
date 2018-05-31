import React from 'react';

const facilityList = (data) => {

    if(!data) {
        return null;
    }

    return data.map((node, index) => {
        return <li key ={ node.id } label={ node.label }>
            {node.label}
        </li>
    })

};

export default facilityList;