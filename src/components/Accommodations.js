import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccommodationItem from'./AccommodationItem';
import { getAccommodations } from '../actions/accommodations';
import data from '../../data/accommodation_data';

export class Accommodations extends React.Component {

    componentDidMount() {
        // this.props.getAccommodations();
    }

    render() {
        const { accommodations, loading } = this.props.accommodation;

        let accommodationItem;

        if(data.accommodations.length > 0) {
            accommodationItem = data.accommodations.map(accommodation => (
                <AccommodationItem key={accommodation.name} {...accommodation}/>
            ))
        } else {
            accommodationItem = <h4>No accommodations found....... </h4>
        }

        return(
            <div className="accommodations">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Accommodations</h1>
                            <p className="lead text-center">
                                Browse Accommodations
                            </p>
                            {accommodationItem}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Accommodations.propTypes = {
    getAccommodations: PropTypes.func.isRequired,
    accommodation: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    accommodation: state.accommodation
});

export default connect(mapStateToProps, { getAccommodations })(Accommodations);
