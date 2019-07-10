var massJoin = [1,2,3,4];
debugger;

massJoin.myJoin = function (separator) {
    var str = '';
    separator = separator || "";
    console.log(this, 'this');
    console.log(separator, 'separator');

    for (var i = 0; i < this.length - 1; i++) {
        console.log (this[i], 'this[i]');
        str += this[i] + separator;
    }

    console.log(i, 'i');

    str += this[i];
    return str;
}

massJoin.myJoin('!');

console.log(massJoin.myJoin('!'), "massJoin.myJoin('!')");




