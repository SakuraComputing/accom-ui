import React from 'react';
import Room from './Room';
import facilityList from '../common/facilityList';
import data from '../../data/accommodation_data.json';

export class Rooms extends React.Component {

    getRooms() {
        let accommodation = data["accommodations"].filter(accommodation => accommodation.id === parseInt(this.props.match.params.id));
        const [ { rooms } ] = accommodation;

        let RoomItem;
        return RoomItem = rooms.map(room => (<Room key={room.id} {...room}/>))
    }

    render() {

        return (
            <div className="content-container">
                <h2>Rooms</h2>
                {this.getRooms()}
                { this.props.facilities ? facilityList(this.props.facilites) : ''}
            </div>
        )
    }
}
export default Rooms;