// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create array with different options
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
  //if password is less then 8 and more then 128 it should prompt again
  if(length < 8){
    window.alert("length to short please try again!");
    getLength();
  }else if(length> 128){
    window.alert("length to long please try again!");
    getLength();
  }else{
    return length
  }
}
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
var generatePassword = function(essentailArr, bulkArr, passwordLength){
  let password = "";
  var pass = 0;
  console.log(essentailArr)
  for(var i = 0; i!=passwordLength; i++){
    if(essentailArr.length + i == passwordLength){
      var arrayNum = pickRandom(essentailArr)
      var pick = essentailArr[arrayNum]
      password = password + pick
      essentailArr.splice(arrayNum, 1)
      //console.log(essentailArr.length)
      pass++
    }else if(essentailArr.length > 0){
      if(Math.random()>= 0.5){
        var arrayNum = pickRandom(essentailArr)
        var pick = essentailArr[arrayNum]
        password = password + pick
        essentailArr.splice(arrayNum, 1)
        //console.log(essentailArr.length)
        pass++
      }else{
        var pick = bulkArr[pickRandom(bulkArr)]
        password = password + pick
      }
    }else{
      var pick = bulkArr[pickRandom(bulkArr)]
      password = password + pick
    }
  }
  console.log(pass)
  return password
}
function writePassword() {
  var codeLength = getLength()
  var codeArrays = getOptions()
  var bulk = codeArrays[0]
  var essent = codeArrays[1]
 
  var passwordText = document.querySelector("#password")
  var password = generatePassword(essent, bulk, codeLength)
  passwordText.value = password
}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)


