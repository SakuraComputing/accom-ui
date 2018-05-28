import React from 'react';

export class Room extends React.Component {

    list(data) {

        if(!data) {
            return;
        }

        return data.map((node, index) => {
            return <li key ={ node.id } label={ node.label }>
                {node.label}
            </li>
        })
    }

    render() {

        return (
            <div>
                {this.props.type ? <div><h4>Accomodation Type</h4><ul>{this.props.type.name}</ul></div> : ''}
                <ul>
                    <h4>Facilities</h4>
                    { this.props.facilities ? this.list(this.props.facilities, 'label') : ''}
                    { this.props.children }
                </ul>
            </div>
        )
    }
};

export default Room;