// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create array with different options
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = [ " ", "!", "#", "$", "%", "&", "’", "(", ")", "+", ",", "-", ".", "/", ":" , ";", "<", "=", ">", "?", "@","[","\\",	"]",	"^", "_",	"`",	"{",	"|",	"}",	"~", "\""]
//create a function to pick a random array element
var pickRandom = function(array){
  var randomPick = Math.floor(Math.random() * array.length);
  return randomPick;
}

//create a prompt to ask for length of password
var getLength = function(){
  var length = window.prompt("how long do you want your password?");
  //if password is less then 8 and more then 128 it should prompt again
  if(length < 8){
    window.alert("length to short please try again!");
    getLength();
  }else if(length> 128){
    window.alert("length to long please try again!");
    getLength();
  }else{
    console.log(length);
    return length;
  }
}
var getOptions = function(){
  let bulkArray = [];
  let essentailArray = [];
  let numOfArrays = 0;
  //promp to ask if it should contain special characters
  var specialCase = window.confirm("do you want special characters?");
  if(specialCase){
    numOfArrays ++;
    bulkArray=bulkArray.concat(specialChar);
    essentailArray=essentailArray.concat(pickRandom(specialChar));
  
  }
  //prompt to ask if it should contain uppercase letters
  var upperCase = window.confirm("do you want uppercase letters?");
  if(upperCase){
    numOfArrays ++;
    bulkArray=bulkArray.concat(upperCaseArr);
    essentailArray=essentailArray.concat(pickRandom(upperCaseArr));
  }
  //prompt to ask if it should contain lowercase letters
  var lowerCase = window.confirm("do you want lowercase letters?");
  if(lowerCase){
    numOfArrays ++;
    bulkArray=bulkArray.concat(lowerCaseArr);
    essentailArray=essentailArray.concat(pickRandom(lowerCaseArr));

  }
  //prompt to ask if it should contain numbers
  var numbers = window.confirm("do you want numbers?");
  if(numbers){
    numOfArrays ++;
    bulkArray=bulkArray.concat(numbersArr);
    essentailArray=essentailArray.concat(pickRandom(numbersArr));

  }
  //if no category is chosen it prompts to chose at least one option
  if(numOfArrays === 0){
    window.alert("you must pick at least one category!!!")
    getOptions();
  }
  return [bulkArray, essentailArray];
}
var generatePassword = function(essentailArr, bulkArr, passwordLength){
  let password = [];
  var charNum = 0;
  while(charNum != passwordLength){
    if(essentailArr.length>0){

    }else{
      var pick = pickRandom(bulkArr);
      password = password.concat(pick);
    }
  }
}
function writePassword() {
  var codeLength = getLength();
  var codeArrays = getOptions();
  var bulk = codeArrays[0];
  var essent = codeArrays[1];
  window.alert(bulk.length)
  window.alert(essent.length)
 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var password = generatePassword(essent, bulk, codeLength);
}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


