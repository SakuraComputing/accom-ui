import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import facilityList from '../common/facilityList';

export class Rooms extends React.Component {

    constructor(props) {
        super(props);
        this.getRooms = this.getRooms.bind(this);
    }

    getRooms() {
        const [ { rooms } ] = this.props.accommodations.filter(accommodation => accommodation.id === parseInt(this.props.match.params.id));
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
const mapStateToProps = (state) =>  ({
   accommodations: state.accommodations
});
export default connect(mapStateToProps, null)(Rooms);