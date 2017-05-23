function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};

	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;

	vehicle.makeNoise = function(){
		console.log('I make noise');
	};

	return vehicle;
}

var bike = VehicleConstructor("Bike", 2, 1);
bike.makeNoise = function(){
	console.log("ring ring");
};

var sedan = VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise = function(){
	console.log("Honk Honk!");
};

var bus = VehicleConstructor("Bus", 6, 10);

bus.addPassenger = function(count) {
	bus.passengers += count;
};
bus.addPassenger(5);
