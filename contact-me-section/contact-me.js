function sendEmail(){
    var $userEmail = $(".user-email-text-field").val();
    var $emailBody = $(".email-body-text-field").val();

    //Reset the text fields back to default
    resetUserEmailTextField();
    resetEmailBodyTextField();

    //Fill in the template and send the email
    var template_params = {
   "subject": $userEmail,
   "body": $emailBody
    }
//
    var service_id = "default_service";
    var template_id = "contact_form";
    emailjs.send(service_id, template_id, template_params);
}

//function activateUserEmailTextField(){
//    var $userEmail = $(".user-email-text-field");
//    clearUserEmailTextField();
//    $userEmail.css("border-color","black", "border-style", "solid", "border-width", "1px");
//}
//
//function activateEmailBodyTextField(){
//    var $emailBody = $(".email-body-text-field");
//    $emailBody.val("");
//    $emailBody.css("border-color","black", "border-style", "solid", "border-width", "5px");
//}
//
function resetUserEmailTextField(){
    var $userEmail = $(".user-email-text-field");
    $userEmail.val("")
}

function resetEmailBodyTextField(){
    var $emailBody = $(".email-body-text-field");
    $emailBody.val("");
}
//
//function clearUserEmailTextField(){
//    var $userEmail = $(".user-email-text-field");
//    $userEmail.val("");
//}
//
//function clearEmailBodyTextField(){
//    var $emailBody = $(".email-body-text-field");
//    $emailBody.val("");
//}