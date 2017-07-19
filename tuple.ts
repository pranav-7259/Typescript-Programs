var tup1 = [10, "Abc" , true]
console.log(tup1[1])
console.log(tup1.length)
for(var v of tup1)
    console.log(v)

tup1[2] = false

var [i1 , i2 , i3] = tup1
console.log("The string is " + tup1[1])
