var val = 1;
Object.defineProperty(global, 'c', {
    get: function () {
        return ++val;
    }
});
if (c == 2 && c == 3 && c == 4) {
    console.log('js is amazing!');
}

var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if (aﾠ == 1 && a == 2 && ﾠa == 3) {
    console.log("js is amazing!")
}

const d = {
    i: 1,
    toString: function () {
        return ++d.i;
    }
}
if (d == 2 && d == 3 && d == 4) {
    console.log("js is amazing!");
}

let e = [1, 2, 3];
e.join = e.shift;
if (e == 1 && e == 2 && e == 3) {
    console.log('js is amazing!');
}

var i = 0,
f = {
    valueOf: () => ++i
}
if (f == 1 && f == 2 && f == 3) {
    console.log('js is amazing!');
}