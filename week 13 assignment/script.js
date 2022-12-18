function formValidation() {
   
   let userDetails = [document.getElementById("username"), document.getElementById("password")];
   let errorMsg = document.getElementById("errorMsg");
  
   let error = 0;


   for (let i = 0; i < userDetails.length; i++) {
       const emailType = /[a-z]{3,10}@gmail|yahoo|mail|hotmail\.com|co\.uk?/;
       const passwordType =/[a-z]{3,6}/;
       
       if (userDetails[i].value === "") {
           error ++;
       }
       if (emailType.test(userDetails[0].value) && userDetails[1].value.match(passwordType) && error === 0){
           alert("Login Successful!");
       }
       else{
           errorMsg.innerHTML = ("Either one of your details is incorrect");
       }
       return;
   }
}
