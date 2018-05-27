import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export class AccommodationItem extends React.Component {

    constructor(props){
        super(props);
        
        this.displayRooms = this.displayRooms.bind();
    }



    displayRooms = () => {
        this.props.history.push('/rooms');
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
            <div>
                <h2>{this.props.name}</h2>
                { ReactHtmlParser(this.props.description)}
                {this.props.type ? <ul>{this.props.type.name}</ul> : ''}
                <ul>
                    { this.props.facilities ? this.list(this.props.facilities) : ''}
                    { this.props.children }
                </ul>
                <button className="button" onClick={this.displayRooms}>See our last available rooms ></button>
            </div>
        )
    }
};

export default AccommodationItem;