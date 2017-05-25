
const myObj = {

    add: function (a,b){
        var ans = a+b;
        return ans;
    },

    multiply: function (a,b){
        var ans = a * b;
        return ans;
    },

    square: function (a){
        var ans = a * a;
        return ans;
    },

    random: function (a,b){
        var ans = Math.floor(Math.random()*(b-a+1))+a;
        return ans;
    }

};

module.exports = myObj;
