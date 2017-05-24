function VehicleConstructor(name, wheels, passengers, speed){

	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.distance_travelled = 0;
	this.vin = createVin();

	function createVin(){
		var vin = '';
		for (var i = 0; i< 17; i+=1){
			vin += chars[Math.floor(Math.random()*35)];
		}
		return vin;
	}
}

VehicleConstructor.prototype.makeNoise = function() {
		console.log('I make noise');
		return this;
};

VehicleConstructor.prototype.updateDistanceTravelled= function(){
	this.distance_travelled += this.speed;
	return this;
};

VehicleConstructor.prototype.move = function(){
	this.updateDistanceTravelled();
	this.makeNoise();
	return this;
};

VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance_travelled);
};


var bike = new VehicleConstructor("Bike", 2, 1, 5);
bike.makeNoise = function(){
	console.log("ring ring");
	return this;
};

var sedan = new VehicleConstructor("Sedan", 4, 5, 60);
sedan.makeNoise = function(){
	console.log("Honk Honk!");
	return this;
};

var bus = new VehicleConstructor("Bus", 6, 10, 55);

bus.addPassenger = function(count) {
	this.passengers += count;
	return this;
};
bus.addPassenger(5);
console.log(bus);
