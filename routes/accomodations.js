const accomodationData = require('../data/accommodation_data');

module.exports.accomodationGetAll = (req, res) => {
    console.log('Get the Accomodation List');
    res
        .status(200)
        .json( accomodationData )
};