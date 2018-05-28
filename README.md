# Accomodations UI

React JS 

##Task

Design and build a basic prototype listing UI for Accommodations and Rooms, similar to what you might see on booking.com, populated from the given data in the two json files.

Accommodation display should show:

•	Accommodation Name
•	Description
•	Type
•	Facilities

Room display should show:

•	Room Name
•	Room Type
•	Min & Max Occupancy
•	Description
•	Facilities
•	Price of the Room (use the supplement_price.price.price on the rules for this)
•	Number Available / Sold Out (use the availability data, which is keyed (@id) on the room_id)


Styling can be as basic and minimal as you like, you can use existing frameworks if you want.


If you feel the need you can add filtering / sorting / paging / any other useful enhancements.


```aidl
yarn install
```

##Testing

To run the unit tests run the following. (not full coverage as this is a prototype)

```aidl
yarn run test
```

##Application Start

```aidl
yarn run dev-server

localhost:8080
```

###Prototype

As this is a prototype I have not built in redux to it,It's there as a guide that it should be used on the actual application.

