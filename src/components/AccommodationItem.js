import React from 'react';
import {withRouter} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

export class AccommodationItem extends React.Component {

    constructor(props){
        super(props);

        this.displayRooms = this.displayRooms.bind();
    }

    displayRooms = () => {
        this.props.history.push(`/accommodation/${this.props.id}`);
    };

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
            <div className="accommodation-container">
                <h2>{this.props.name}</h2>
                { ReactHtmlParser(this.props.description)}
                    {this.props.type ?
                        <div className="accomodation-type">
                            <span>Accomodation Type: {this.props.type.name}</span>
                        </div>
                    : ''}
                { this.props.facilities ?
                    <div>Facilities
                        <small className="list-header">
                            {this.list(this.props.facilities)}
                        </small>
                    </div>
                : ''}
                <button className="button" onClick={this.displayRooms}>See our last available rooms ></button>
            </div>
        )
    }
};

export default withRouter(AccommodationItem);