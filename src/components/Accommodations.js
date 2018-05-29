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
            page: 1,
            number_iterations: 2
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page) {
        const renderedAccommodations = this.state.accommodations.slice((page - 1) * this.state.number_iterations, (page -1) * this.state.number_iterations + this.state.number_iterations);
        this.setState({ page, renderedAccommodations});
    }

    componentDidMount() {
        const accommodations = data["accommodations"];
        this.setState({ accommodations, renderedAccommodations: accommodations.slice(0,this.state.number_iterations), total: accommodations.length})
    }

    render() {

        const { page, total, renderedAccommodations } = this.state;

        return(
            <div className="accommodations">
                <div className="content-container">
                    <div className="row">
                        <div className="col-md-1this.state.number_iterations">
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
                                margin={this.state.number_iterations}
                                page={page}
                                count={Math.ceil(total / this.state.number_iterations)}
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
