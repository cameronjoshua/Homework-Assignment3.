
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 0;
  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumeric = false;
  var hasSpecial = false;

    while (length < 8 || length > 12) {
        length = prompt("Enter the desired length of your password (between 8 and  12 characters):");
      if (length < 8 || length > 12) {
        alert("Password length must be between 8 and 12 characters.");
      }
    }


  hasLowercase = confirm("Do you want to include lowercase characters in your password?");
  hasUppercase = confirm("Do you want to include uppercase characters in your password?");
  hasNumeric = confirm("Do you want to include numeric characters in your password?");
  hasSpecial = confirm("Do you want to include special characters in your password?");

  var charset = "";
  if (hasLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (hasUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (hasNumeric) {
    charset += "0123456789";
  }
  if (hasSpecial) {
    charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
