var arr = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

for (i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

arr.push(100);

arr.push(["hello", "world", "JavaScript is Fun"]);
console.log(arr);

var sum = 0;
for (i = 0; i < arr.length; i++){
	if (typeof(arr[i]) === 'number'){
		sum = sum + arr[i];
	}
}

console.log(sum);

var arr2 = [1, 5, 90, 25, -3, 0];

var min = arr2[0];
for (var i = 1; i < arr2.length; i++){
	if (arr2[i] < min){
		min = arr2[i];
	}
}
console.log(min);

var avg = 0;
for (var i = 0; i < arr2.length; i++){
	avg = avg + arr2[i];
}
avg = avg/arr2.length;
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
};

for (var key in newNinja){
      console.log(key + ": " + newNinja[key]);
}
