import React from 'react';

class AccommodationItem extends React.Component {

    render() {

        const { accommodation } = this.props;
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.name}</h2>
                {this.props.description}
                {/*<div>{this.props.type}</div>*/}
                {/*<div>{this.props.facilities}</div>*/}
            </div>

        )
    }
};

export default AccommodationItem;