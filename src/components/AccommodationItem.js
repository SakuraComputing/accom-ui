import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class AccommodationItem extends React.Component {


    list(data) {

        if(!data) return;

        const children = (facilities) => {
            if (facilities) {
                return <ul>{ this.list(facilities)}</ul>
            }
        };

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
                {/*{this.props.type ? <div>{this.props.type.name}</div> : ''}*/}
                <ul>
                    { this.list(this.props.facilities) ? this.list(this.props.facilities) : ''}
                    { this.props.children }
                </ul>
            </div>
        )
    }
};

export default AccommodationItem;