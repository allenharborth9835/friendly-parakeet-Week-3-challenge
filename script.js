// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create array with the different options
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = [ " ", "!", "#", "$", "%", "&", "’", "(", ")", "+", ",", "-", ".", "/", ":" , ";", "<", "=", ">", "?", "@","[","\\",	"]",	"^", "_",	"`",	"{",	"|",	"}",	"~", "\""];
//create a function to pick a random array element
var pickRandom = function(array){
  var randomPick = Math.floor(Math.random() * array.length);
  return randomPick
}

//create a prompt to ask for length of password
var getLength = function(){
  var length = window.prompt("how long do you want your password?");
  //if password is less then 8 and more then 128 it should prompt again and must also be a number
  if(length < 8){
    window.alert("length to short please try again!");
    return getLength();
  }else if(length> 128){
    window.alert("length to long please try again!");
    return getLength();
  }else if(isNaN(length)){
    window.alert("length must be a number!");
    return getLength();
  }else{
    return length
  }
}
//create a prompt to choose what options the user wants
var getOptions = function(){
  var bulkArray = []
  var essentailArray = []
  var numOfArrays = 0
    //promp to ask if it should contain special characters
    var specialCase = window.confirm("do you want special characters?")
    if(specialCase){
      bulkArray=bulkArray.concat(specialChar)
      essentailArray=essentailArray.concat(
        specialChar[pickRandom(specialChar)]
      )
      numOfArrays ++
    }
    //prompt to ask if it should contain uppercase letters
    var upperCase = window.confirm("do you want uppercase letters?")
    if(upperCase){
      bulkArray=bulkArray.concat(upperCaseArr)
      essentailArray=essentailArray.concat(
        upperCaseArr[pickRandom(upperCaseArr)]
      )
      numOfArrays ++
    }
    //prompt to ask if it should contain lowercase letters
    var lowerCase = window.confirm("do you want lowercase letters?")
    if(lowerCase){
      bulkArray=bulkArray.concat(lowerCaseArr)
      essentailArray=essentailArray.concat(
        lowerCaseArr[pickRandom(lowerCaseArr)]

      )
      numOfArrays ++
    }
    //prompt to ask if it should contain numbers
    var numbers = window.confirm("do you want numbers?")
    if(numbers){
      bulkArray=bulkArray.concat(numbersArr)
      essentailArray=essentailArray.concat(
        numbersArr[pickRandom(numbersArr)]
      )
      numOfArrays ++
    }
    //if no category is chosen it prompts to chose at least one option
    if(numOfArrays === 0){
      window.alert("you must pick at least one category!!!")
      return getOptions()
    }else{
      return [bulkArray, essentailArray];
    }
}
//a function that must generate password
var generatePassword = function(essentailArr, bulkArr, passwordLength){
  //a blank string to store the elements of a password
  let password = "";
  //adds elments from the arrays until the password is the suffiecent length
  for(var i = 0; i!=passwordLength; i++){
    //if the elements from the essential array plus the element already 
    //choosen are the finale length of the password add those elements next
    //and pull them from the array else pull them out at random until they are
    //all used once
    if(essentailArr.length + i == passwordLength){
      var arrayNum = pickRandom(essentailArr)
      var pick = essentailArr[arrayNum]
      password = password + pick
      essentailArr.splice(arrayNum, 1)
    }else if(essentailArr.length > 0){
      if(Math.random()>= 0.5){
        var arrayNum = pickRandom(essentailArr)
        var pick = essentailArr[arrayNum]
        password = password + pick
        essentailArr.splice(arrayNum, 1)
      }else{
        var pick = bulkArr[pickRandom(bulkArr)]
        password = password + pick
      }
    }else{
      var pick = bulkArr[pickRandom(bulkArr)]
      password = password + pick
    }
  }
  //return password to be used
  return password
}
//write password to the page
function writePassword() {
  //first get length by running the getLength function
  var codeLength = getLength()
  //get the arrays by running the getOption function
  var codeArrays = getOptions()
  //divide the arrays between the main bulk array and the essential array
  var bulk = codeArrays[0]
  //the essential array holds one of each of the option and will be add
  //once in to the password to ensure the password has one of each element
  var essent = codeArrays[1]
 
  var passwordText = document.querySelector("#password")
  var password = generatePassword(essent, bulk, codeLength)
  passwordText.value = password
}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)


