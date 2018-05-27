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

        console.log(this.props.id);
        console.log(this.props.name);

        return (
            <div>
                <h2>{this.props.name}</h2>
                { ReactHtmlParser(this.props.description)}
                {this.props.type ? <div><h4>Accomodation Type</h4><ul>{this.props.type.name}</ul></div> : ''}
                <ul>
                    <h4>Facilities</h4>
                    { this.props.facilities ? this.list(this.props.facilities) : ''}
                    { this.props.children }
                </ul>
                <button className="button" onClick={this.displayRooms}>See our last available rooms ></button>
            </div>
        )
    }
};

export default withRouter(AccommodationItem);