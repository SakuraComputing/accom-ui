import React from 'react';
import {withRouter} from "react-router-dom";
import facilityList from '../common/facilityList';
import ReactHtmlParser from 'react-html-parser';

export class AccommodationItem extends React.Component {

    constructor(props){
        super(props);

        this.displayRooms = this.displayRooms.bind();
    }

    displayRooms = () => {
        this.props.history.push(`/accommodation/${this.props.id}`);
    };

    render() {
        return (
            <div className="accommodation-container">
                <h3>{this.props.name}</h3>
                <div>
                    { ReactHtmlParser(this.props.description)}
                </div>
                {this.props.type ?
                    <div className="accomodation-type">
                        <span>Accomodation Type: {this.props.type.name}</span>
                    </div>
                : ''}
                { this.props.facilities ?
                    <div>Facilities
                        <small className="list-header">
                            {facilityList(this.props.facilities)}
                        </small>
                    </div>
                : ''}
                <div className="clearfix">
                    <button className="button button--div" onClick={this.displayRooms}>See our last available rooms ></button>
                </div>
            </div>
        )
    }
};

export default withRouter(AccommodationItem);