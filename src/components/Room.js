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

    getRoomsAvailable() {
        let availability = Availability["rooms"].find(room => room.id === this.props.id);
        if(availability) {
            const { available }  = availability;
            return <span className="rooms-available">Rooms available: {available}</span>
        } else {
            return <th className="room-sold-out">Sold Out</th>;
        }
    }

    getprices() {
        const { supplement_price }   = this.props;

        if(supplement_price) {
            const { price: { price }} = supplement_price;
            return <div className="price">
                <th>Today's Price</th>
                { supplement_price ? supplement_price.price.price : '' }
            </div>
        } else {
            <th></th>;
        }
    }

    render() {

        console.log(this.props.description);

        return (
            <div className="room-container">
                <div className="details-container">
                    <div className="details-container__row">
                        <div className="details-container__col">
                            <th className="details-container__col__header">Room Name</th>
                            {this.props.name}
                        </div>
                        <div className="details-container__col">
                            <th className="details-container__col__header">Room Type</th>
                            {this.props.room_type_description}
                        </div>
                        <div className="details-container__col">
                            <th className="details-container__col__header">Occupancy</th>
                            <li><span>{this.props.occupancy} pers. </span>(Minimum: {this.props.min_occupancy})</li>
                        </div>
                        <div className="details-container__col">
                            { this.getRoomsAvailable() }
                        </div>
                        <div className="details-container__col">
                            { this.getprices()}
                        </div>
                    </div>
                </div>
                <div className="list-header">
                    <th>Facilities</th>
                    { this.props.facilities ? this.list(this.props.facilities) : ''}
                </div>
                <div className="room-desc">
                    {ReactHtmlParser(this.props.description)}

                </div>
                <div className="clearfix">
                    <button className="button button--reserve button--div">I'll Reserve</button>
                </div>
            </div>
        )
    }
};

export default Room;