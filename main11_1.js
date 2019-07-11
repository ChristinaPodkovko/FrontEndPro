var mass = [1,2,3,4];

function myPush() {
   for (var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
        console.log(this[this.length], 'this[this.length]');
    }

}


mass.myPush = myPush;

mass.myPush(1, 2);
mass.myPush(5);
//mass.myPush(2);
//mass.myPush(1);

console.log(mass, 'mass');
