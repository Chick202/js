//Given a string, check if it's a palindrome

function palindrome(str1){
  
  var str2 = '';
  
  str1 = str1.replace(/\W/g, '').toLowerCase();
  str2 = str1.split('').reverse().join('');
  
  if(str1.toLowerCase() == str2)
  {
    console.log("Is a palindrome");
  }
  
  else{
    console.log("Is not a palindrome");
  }
  
  
}

//var s = "Red rum, sir, is murder"
//var s = "Anita lava la tina";
//s = "Hannah"
var s = "Programcreek is awesome"
//s = "Diana"
palindrome(s);
