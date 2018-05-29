import React from 'react';
import AccommodationItem from'./AccommodationItem';
import data from '../../data/accommodation_data';
import Pagination from '../common/Pagination';

export class Accommodations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accommodations: [],
            renderedAccommodations: [],
            page: 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page) {
        const renderedAccommodations = this.state.accommodations.slice((page - 1) * 2, (page -1) * 2 + 2);
        this.setState({ page, renderedAccommodations});
    }

    componentDidMount() {
        const accommodations = data["accommodations"];
        this.setState({ accommodations, renderedAccommodations: accommodations.slice(0,2), total: accommodations.length})
    }

    render() {

        const { page, total, renderedAccommodations } = this.state;

        return(
            <div className="accommodations">
                <div className="content-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Accommodations</h1>
                            <ul>
                                {
                                    renderedAccommodations.map(accommodation =>
                                    <div key={accommodation.id}>
                                        <AccommodationItem {...accommodation}/>
                                    </div>
                                    )
                                }
                            </ul>
                            <Pagination
                                margin={2}
                                page={page}
                                count={Math.ceil(total / 2)}
                                onPageChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accommodations;
