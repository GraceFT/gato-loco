/*$(document).ready(init){
    
    $('#gamer1').keyup(validateName);
    $('#gamer2').keyup(validateNames2);
     $("#btn_gamer").on("click",validateForm);
}
function validateForm(){
    validateName();
    validateNames2();
    if(validateName()&& validateNames2()){
        
    }
}
function validateName(){
    var valName=$("#gamer1");
    var isName= false;
    if(valName.val().length > 0 && valName.val().match(/^[a-zA-Z\s]*$/)){
        $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isName=true;
    }else{
        $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name </span>');
        isName=false;
    }
    return isName;
}
function validateNames2(){
    var valName=$("#gamer2");
    var isName= false;
    if(valName.val().length > 0 && valName.val().match(/^[a-zA-Z\s]*$/)){
        $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        $("#name-container span").remove();
        isName=true;
    }else{
        $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name</span>');
        isName=false;
    }
    return isName;
}*/

