import React from 'react';
import { connect } from 'react-redux';
import AccommodationItem from'./AccommodationItem';
import { getAccommodations } from '../actions/accommodations';
import data from '../../data/accommodation_data';

export class Accommodations extends React.Component {

    render() {

        let accommodationItem;

        if(data.accommodations.length > 0) {
            accommodationItem = data.accommodations.map(accommodation => (
                <AccommodationItem key={accommodation.id} {...accommodation}/>
            ))
        } else {
            accommodationItem = <h3>No accommodations found.......</h3>
        }

        return(
            <div className="accommodations">
                <div className="content-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Accommodations</h1>
                            {accommodationItem}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    accommodation: state.accommodation
});

export default connect(mapStateToProps, { getAccommodations })(Accommodations);
