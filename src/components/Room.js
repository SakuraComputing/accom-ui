import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import facilityList from '../common/facilityList';
import Availability from '../../data/accommodation_availability_data';

export class Room extends React.Component {

    constructor(props){
        super(props);
    }

    getRoomsAvailable() {
        let availability = Availability["rooms"].find(room => room.id === this.props.id);
        if(availability) {
            const { available }  = availability;
            return <span className="rooms-available">Rooms available: {available}</span>
        } else {
            return <div className="room-sold-out">Sold Out</div>;
        }
    }

    getprices () {
        const { supplement_price }   = this.props;

        if(supplement_price) {
            const { price: { price }} = supplement_price;
            return <div className="price">
                <span>Today's Price: { supplement_price ? supplement_price.price.price : '' }</span>
            </div>
        } else {
            return <div className="room-sold-out">You missed it our last room sold out</div>;
        }
    }

    displayReserveButton() {
        let availability = Availability["rooms"].find(room => room.id === this.props.id);
        if(availability) {
            return <div className="clearfix">
                <button className="button button--reserve button--div">I'll Reserve</button>
            </div>
        } else {
            return '';
        }
    }

    render() {

        return (
            <div className="room-container">
                <div className="details-container">
                    <div className="details-container__row">
                        <div className="details-container__col">
                            <div className="details-container__col__header">Room Name</div>
                            {this.props.name}
                        </div>
                        <div className="details-container__col">
                            <div className="details-container__col__header">Room Type</div>
                            {this.props.room_type_description}
                        </div>
                        <div className="details-container__col">
                            <div className="details-container__col__header">Occupancy</div>
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
                    <div>Facilities</div>
                    { this.props.facilities ? facilityList(this.props.facilities) : <li>Only Basic Facilities Avaliable</li>}
                </div>
                <div className="room-desc">
                    *{ReactHtmlParser(this.props.description)}
                </div>
                {this.displayReserveButton()}
            </div>
        )
    }
};

export default Room;