// var character = {
//     name: "Eleven",
//     show: "Stranger Things",
//     portrayedBy: "Millie Bobby Brown"
// }

// const quotes = [
//     'I\'m going to my friends. I\'m going home.',
//     'Pure fuel! PURE FUEL! WOO!',
//     'See? Zoomer.',
//     'Bitchin.'
// ];
// //for petlja za izvući sve qoutes
// for (let i=0; i<quotes.length; i++){
//     console.log(quotes[i]);
// }

// //1.

// var proto1 = Object.getPrototypeOf(character);
// var proto2 = Object.getPrototypeOf(proto1);

// console.log(proto1);
// console.log(proto2);

// var rndCnt = parseInt(Math.random()*10) % 4;
// console.log(rndCnt);
// var rndVal = quotes[rndCnt];
// console.log(rndVal);


//2

function Dog(name) {
   // this.name = name || "Rex";
   if (name === undefined) {
       this.name = "Rex";
   } else{
       this.name = name;
   }
}



var dog1 = new Dog();
console.log(dog1.name);

var dog2 = new Dog("Floki");
console.log(dog2.name);