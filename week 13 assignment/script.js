
function validateForm() {

    var input = [document.getElementById("username"), document.getElementById("password")];
    var errorTxt = document.getElementById("error");
    var error = 0
  for (var i = 0; i < input.length; i++) {

    
    var emailPattern = /[a-z]{3,10}@gmail|yahoo|mail|hotmail\.com|co\.uk?/;
    var passwordPattern =/[a-z]{3,6}/;

      
   
       if (input[i].value === "") {
        error ++;
    }

    
         if (emailPattern.test(input[0].value) && input[1].value.match(passwordPattern) && error === 0){
            alert("Login Successful!");
        }

        else{
            errorTxt.innerHTML = ("Enter a valid email address or password");
        }
        return;
    }
 }