import React from 'react';
import Room from './Room';
import data from '../../data/accommodation_data.json';

export class Rooms extends React.Component {

    componentDidMount() {


    }

    list(data) {

        if(!data) {
            return;
        }

        return data.map((node, index) => {
            return <li key ={ node.id } min_occupancy={ node.min_occupancy }>
                {node.min_occupancy}
            </li>
        })
    }

    render() {

        // console.log(this.props.match.params.id);

        let accommodation = data["accommodations"].filter(accommodation => accommodation.id === parseInt(this.props.match.params.id));
        console.log(accommodation);
        //
        let RoomItem;

        if(accommodation.length > 0) {
            RoomItem = accommodation.map(accommodation => (
                <Room key={accommodation.rooms} {...accommodation}/>
            ))
        } else {
            RoomItem = <h4>No accommodations found.......</h4>
        }


        return (
            <div>
                <h1>Accom</h1>
                { this.props.rooms ? this.list(this.props.rooms) : ''}
                {/*{ this.props.}*/}
                {RoomItem}
            </div>
        )
    }
}

export default Rooms;