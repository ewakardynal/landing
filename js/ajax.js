$(document).ready(function(){
   $("#form").submit(function() {
      if (Math.random()>0.5){
         alert("Formularz został przesłany");
      } else {
         alert("Błąd! Formularz nie został przesłany");
      }
      
      //TODO
      //   var nameVal = $("#inputName").val();
      //   var emailVal = $("#inputEmail").val();
      //   var phoneNumberVal = $("#inputPhoneNumber").val();
      //   $.post("url.url", {name: nameVal, email: emailVal, phoneNumber: phoneNumberVal}, function(result) {
      //      if (result === "1") {
      //         success();
      //      } else {
      //         failure();
      //      }
      //   });
   });
});


