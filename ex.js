// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// var x = "dog";

// var combinations = [x];

// x = x.split("");

// x.forEach(function(v1,i1){
//     combinations.push(v1);
//     x.forEach(function(v2,i2){
//         if(i1 == i2) return;
//         if(combinations.indexOf(v1+v2) == -1 && combinations.indexOf(v2+v1) == -1){
//             combinations.push(v1+v2);
//         }
//     });
// });
// console.log(combinations);


// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// var x = 'webmaster';

// x = x.split("");

// for(var i1 = 0; i1<x.length;i1++){
//     for(var i2 = 0; i2<x.length;i2++){
//         if(i1==i2) continue;
//         if(x[i1] < x[i2]){
//             var temp = x[i1];
//             x[i1] = x[i2];
//             x[i2] = temp;
//         }
//     }
// }
// console.log(x.join(""));



// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// var x = 'the quick brown fox';

// x = x.split(" ");

// x.forEach(function(v,i){
//     x[i] = v[0].toUpperCase() + v.substr(1,v.length);
// });

// console.log(x.join(" "));







// Write a JavaScript program to reverse the elements of a given array of integers length 3.


// var x = [3,5,9];
// var y = [];
// for(var i = x.length-1; i>=0; i--){
//     y.push(x[i]);
// }
// console.log(y);

// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.


// var x = [3,5,9,1,4,6,7];
// var y = [];

// for(var i = 1; i<x.length; i++){
//     y.push(x[i]);
// }
// y.push(x[0]);
// console.log(y);

//com número varíavel para rodar

// var x = [3,5,9,1,4,6,7];
// var y = [];
// var rotate = 3;

// for(var i = rotate; i<x.length; i++){
//     y.push(x[i]);
// }

// for(var i = 0; i<rotate; i++){
//     y.push(x[i]);
// }

// console.log(y);