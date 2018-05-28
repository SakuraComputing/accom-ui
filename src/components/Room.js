import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Availability from '../../data/accommodation_availability_data';

export class Room extends React.Component {

    constructor(props){
        super(props);

    }

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

    getRoomsAvailable(id) {
        // console.log(Availability["rooms"]);
        let availability = Availability["rooms"].find(room => room.id === this.props.id);
        if(availability) {
            const { available }  = availability;
            return <span>Rooms available: {available}</span>
        } else {
            return null;
        }
    }

    render() {

        return (
            <div className="content-container">
                <h4>Room Name</h4>
                {this.props.name}
                <h4>Room Type</h4>
                {this.props.room_type_description}
                <h4>Occupancy</h4>
                <li>Min: {this.props.min_occupancy}</li>
                {this.props.type ? <div><h4>Accommodation Type</h4><ul>{this.props.type.name}</ul></div> : ''}
                <h4>Description</h4>
                {ReactHtmlParser(this.props.description)}
                <ul>
                    <h4>Facilities</h4>
                    { this.props.facilities ? this.list(this.props.facilities, 'label') : ''}
                    { this.props.children }
                </ul>
                <ul>
                    <h4>Today's Price</h4>
                </ul>
                { this.getRoomsAvailable(this.props.id) }
            </div>
        )
    }
};

export default Room;