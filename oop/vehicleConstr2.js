function VehicleConstructor(name, wheels, passengers, speed){

	var self = this;

	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;


	this.makeNoise = function(){
		console.log('I make noise');
	};

	var distance_travelled = 0;
	function updateDistanceTravelled(){
		distance_travelled += self.speed;
	}

	this.move = function(){
		updateDistanceTravelled();
		this.makeNoise();
	};

	this.checkMiles = function(){
		console.log(distance_travelled);
	};

}

var bike = new VehicleConstructor("Bike", 2, 1, 5);
bike.makeNoise = function(){
	console.log("ring ring");
};


var sedan = new VehicleConstructor("Sedan", 4, 5, 60);
sedan.makeNoise = function(){
	console.log("Honk Honk!");
};

var bus = new VehicleConstructor("Bus", 6, 10, 55);

bus.addPassenger = function(count) {
	this.passengers += count;
};
bus.addPassenger(5);
