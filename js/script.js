var hotel = {
    // Object properties
    name: 'P O P P Y',
    rooms: 25,
    booked: 3,
    gym: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

//-----------------

// Define a constructor function template for hotels
function Hotel(name, rooms, booked) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var Dublin = new Hotel('Dublin', 20, 3);
var London = new Hotel('London', 15, 5);
var Chicago = new Hotel('Chicago', 30, 2);
var NY = new Hotel('New York', 50, 39);

var details1 = Dublin.name + ' TICKETS: ';
    details1 += Dublin.checkAvailablity();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = London.name + ' TICKETS: ';
    details2 += London.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = Chicago.name + ' TICKETS: ';
    details3 += Chicago.checkAvailablity();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

var details4 = NY.name + ' TICKETS: ';
    details4 += NY.checkAvailablity();
var elHotel4 = document.getElementById('hotel4');
elHotel4.textContent = details4;