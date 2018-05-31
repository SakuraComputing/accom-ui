export default [
    {
        id: 161,
        sort_order: 500,
        type_id: 22,
        occupancy: 2,
        min_occupancy: 2,
        number_of_core_nights: 5,
        room_type_description: "Austrian Twin/Double",
        name: "Austrian Twin/Double",
        upsell: "",
        description: "<i class=\"fa fa-ticket fa-1\" aria-hidden=\"true\"></i> Festival Ticket Included &nbsp; &nbsp; &nbsp;<i class=\"fa fa-coffee fa-1\" aria-hidden=\"true\"></i> Breakfast Included",
        website_url: "http://www.hotel-eder.com/",
        facilities: [
            {
                id: 1,
                label: "En Suite"
            },
            {
                id: 6,
                label: "Bed Linen included"
            },
            {
                id: 17,
                label: "Towels included"
            },
            {
                id: 27,
                label: "Breakfast"
            }
        ],
        extras: [],
        rules: {
            mandatory: false,
            per_person: true,
            purchase_bookingflow: true,
            purchase_dashboard: true,
            minimum_nights: null,
            maximum_nights: null,
            purchase_start_date: {
                iso_value: "2017-06-28 00:00:00",
                isotz_value: "2017-06-28T00:00:00+01:00"
            },
            purchase_end_date: {
                iso_value: "2018-04-07 00:00:00",
                isotz_value: "2018-04-07T00:00:00+01:00"
            },
            available_start_date: {
                iso_value: "2018-04-09 00:00:00",
                isotz_value: "2018-04-09T00:00:00+01:00"
            },
            available_end_date: {
                iso_value: "2018-04-13 00:00:00",
                isotz_value: "2018-04-13T00:00:00+01:00"
            },
            extended_start_date: {
                iso_value: "2018-04-07 00:00:00",
                isotz_value: "2018-04-07T00:00:00+01:00"
            },
            extended_end_date: {
                iso_value: "2018-04-14 00:00:00",
                isotz_value: "2018-04-14T00:00:00+01:00"
            }
        },
        supplement_price: {
            price: {
                value: 42900,
                currency_id: 98,
                currency_iso_code: "GBP",
                currency_exponent: 2,
                price: "£429.00"
            }
        },
        per_core_night_price: {
            price: {
                value: 8580,
                currency_id: 98,
                currency_iso_code: "GBP",
                currency_exponent: 2,
                price: "£85.80"
            }
        },
        per_night_prices: [
            {
                iso_value: "2018-04-07",
                price: {
                    value: 6700,
                    currency_id: 98,
                    currency_iso_code: "GBP",
                    currency_exponent: 2,
                    price: "£67.00"
                }
            },
            {
                iso_value: "2018-04-08",
                price: {
                    value: 6700,
                    currency_id: 98,
                    currency_iso_code: "GBP",
                    currency_exponent: 2,
                    price: "£67.00"
                }
            },
            {
                iso_value: "2018-04-09"
            },
            {
                iso_value: "2018-04-10"
            },
            {
                iso_value: "2018-04-11"
            },
            {
                iso_value: "2018-04-12"
            },
            {
                iso_value: "2018-04-13"
            },
            {
                iso_value: "2018-04-14",
                price: {
                    value: 6700,
                    currency_id: 98,
                    currency_iso_code: "GBP",
                    currency_exponent: 2,
                    price: "£67.00"
                }
            }
        ],
    }
]
