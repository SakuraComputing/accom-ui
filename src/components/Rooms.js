import React from 'react';
import Room from './Room';
import data from '../../data/accommodation_data.json';

export class Rooms extends React.Component {

    list(data) {

        if(!data) {
            return;
        }

        return data.map((node, index) => {
            return <li key ={ node.id } min_occupancy={ node.label }>
                {node.label}
            </li>
        })
    }

    render() {

        let accommodation = data["accommodations"].filter(accommodation => accommodation.id === parseInt(this.props.match.params.id));

        const [ { rooms } ] = accommodation;

        let RoomItem;

        if(rooms.length > 0) {
            RoomItem = rooms.map(room => (
                <Room key={room.id} {...room}/>
            ))
        } else {
            RoomItem = <h4>No rooms found.......</h4>
        }


        return (
            <div className="content-container">
                <h2>Room</h2>
                {/*{ this.props.}*/}
                {RoomItem}

                { this.props.facilities ? this.list(this.props.facilites) : ''}
            </div>
        )
    }
}
export default Rooms;