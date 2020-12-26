$(document).ready(function() {


//Define an array to hold users as they're added in the new registration page
    var myuserArray = [];

//Authentication
    function authenticate(){

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;


        if(myuserArray.length>0){
            for(i=0; i<userArray.length; i++){
                if((un == myuserArray[i].un) && (pw == myuserArray[i].pw)){
                    alert("You're in!");
                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";
                    break;
                }
                if(i==myuserArray.length-1 || myuserArray.length==0){
                    console.log('working')
                    troubleshoot(username, password);
                }
            }
        }else{
            alert("No match found. Please Create a new Account");
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
        }

    };

    function troubleshoot(username, password){
        for(j=0; j<userArray.length; j++){
            if(username == myuserArray[j].un){
                alert("Incorrect password");
                document.getElementById('password').value = "";
                break;
            };
            if(j == myuserArray.length-1 || myuserArray.length==0){
                alert("No match found. Please Create Account a new account");
                document.getElementById('username').value = "";
                document.getElementById('password').value = "";
            };
        };
    };

});