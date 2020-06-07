// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['!', '@', '#', '$', '%', '&', '+', '-'];
  var password = '';

  var pwLength = prompt("Select the length of your password (between 8 and 128 characters)");
  if (Number(pwLength) < 8 || Number(pwLength) > 128) {
    alert("Please pick a number bewteen 8 and 128");
  } else if (isNaN(pwLength) === true) {
    alert("You have picked a letter.  Plesae pick a number between 8 and 128");
  } else {
    console.log(typeof(pwLength));
    var allowedChars = [];
    var upperChoice = confirm("Would you like to use UPPERCASE characters?");
    if (upperChoice === true) {
      allowedChars = allowedChars.concat(uppercaseChars);
    }
    var lowerChoice = confirm("Would you like to use lowercase characters?");
    if (lowerChoice === true) {
      allowedChars = allowedChars.concat(lowercaseChars);
    }
    var numChoice = confirm("Would you like to use numbers in your password?");
    if (numChoice === true) {
      allowedChars = allowedChars.concat(numbers);
    }
    var charChoice = confirm("Would you like to use Special Charagers in your password?");
    if (charChoice === true) {
      allowedChars = allowedChars.concat(specialChars);
    }
    for (var i = 0; i < pwLength; i++) {
      var randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    document.getElementById('password').innerText = password
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
