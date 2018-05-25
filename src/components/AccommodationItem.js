import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class AccommodationItem extends React.Component {

    render() {

        const { accommodation } = this.props;
        return (
            <div>
                <h2>{this.props.name}</h2>
                { ReactHtmlParser(this.props.description)}
                {/*<div>{this.props.type}</div>*/}
                {/*<div>{this.props.facilities}</div>*/}
            </div>

        )
    }
};

export default AccommodationItem;