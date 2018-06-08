/*function addIntegers(n){

var digits = n.toString().length;
var digitSum = new Array();
var sum = 0;
var multiplier = 1;
var divider = null;

  for (let i = 0; i < digits; i++){
    divider = digits - (i + 1);
    digitSum[i] = Math.floor(n / (10^divider));
    sum = sum + digitSum[i];
    console.log(digits);
    console.log(digitSum[i]);
    console.log(sum);
  }
  return sum;
}

console.log(105, addIntegers(105)); */
/*
var array = [3, 4, 2, 5, 6, 7];

function sumTwoSmallestNumbers(numbers) {
  var [ a, b ] = numbers.sort((a, b))
  //
  console.log(a);
  console.log(b);
  console.log(numbers.sort());
  console.log(numbers.sort(a, b));
  return a + b
}

console.log(sumTwoSmallestNumbers(array));
*/

/*
var word = "recede";

function duplicateEncode(word){
    // ...
    var char = null;
    var counter = 0;
    var newWord = new Array();

    for(let i = 0; i < word.length; i++){
      // word = [r, e, c, e, d, e];

      char = word[i];
      console.log(char);
      for(let x = 0; x < word.length; i++){
        if(char = word[x]){
          newWord[x] = "(";

        }
      }
      }
    return newWord;
  }

console.log(duplicateEncode(word))
*/
/*
String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  var string = this;
  var array = new Array();
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      array[i] = string[i].toLowerCase();
    }
    else if (string[i] === string[i].toLowerCase()){
      array[i] = string[i].toUpperCase();
    }
  }
  return array.join("");
}

String.prototype.upper = function(){
  console.log(this);

  return this.toUpperCase();
}

//console.log("ernNONkkkaaa".upper());


console.log("dkSiOPPPfiba".toAlternatingCase());
*/
/*
function squaresNeeded(grains){
  var squares = 0;
  var grains = 2^(squares);
  var squares = grains^1/#
  return
}*/
/*
var song = "WUBWUBIWUBAMWUBWUBX"
function songDecoder(song){
    var string = song.replace(/WUB/g, " ");
    var string = string.replace(/\s\s+/g, "");
  return string.trim();
}

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
} // better version

console.log(songDecoder(song));
*/
/*
function nbYear(p0, percent, aug, p) {
    // your code
    var totalPop = p0;

    for (var i = 1; totalPop < p; i++){
      totalPop = Math.floor(totalPop + ((totalPop * (percent / 100)) + aug));
      console.log(totalPop);
    }
    return i-1;
}
console.log(nbYear(1000, 2, 50, 1200));
*/
/*
function removeSmallest(numbers) {
  const array = [...numbers];
  for(let i = 0; i < array.length; i++){
    if(array[i] === Math.min(...array)){
      var index = array.indexOf(array[i]);
      array.splice(index, 1);
      return array;
    }
  }
  return numbers;
}

console.log(removeSmallest(numbers));
*/
/*
var s = "73+42=16"

function isTuringEquation(s){
  var numberToken = s.split("").reverse().join("").replace(/\W/g, " ").split(" ");
  if(Number(numberToken[2]) + Number(numberToken[1]) === Number(numberToken[0])){return true;}
  else{return false}
}

console.log(isTuringEquation(s));
*/
/*
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 10;
function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++){
    for(let x = 1; x < numbers.length; x++){
      if(Number(numbers[i]) + Number(numbers[x]) === Number(target)){
        var newArray = [i, x];
        return newArray;
      }
    }
  }
}
*/
/*
var pin = "3.4163"
function validatePIN (pin) {
  if(Number(pin) === true){
    if(pin.length === 4 || pin.length === 6) {return true;}
    else{return false;}
    }
  else{return false;}
}

console.log(validatePIN(pin));
*/
var str = casdkn;
function isValid(str){
 return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

console.log(isValid(str));