function clicked (){
	var user = document.getElementById("loginUser");
	var pass = document.getElementById("loginPass");

	if (user.value === localStorage['user']) { 
        if(pass.value === localStorage['pass']){
            window.location.assign("dashboard.html"); 
        }  else {
            alert("Password incorrect!!");
        }
	}else{
        alert("Username or password not valid!!");
    }
}

function registerUser(){
	if ('localStorage' in window && window['localStorage'] !== null) {   //confirm if browser can use localstorage
        var firstName = document.getElementById("firstName").value;
        if (firstName != ''){ 
            var lastName = document.getElementById("lastName").value;
            if (lastName != ''){
                var username = document.getElementById("username").value; 
                if (username != ''){
                    var password = document.getElementById("password").value;
                    if (password != ''){
                        var accountType = parseInt(document.getElementById("accountType").value);
                        
                        localStorage['username'] = username;
                        localStorage['password'] = password;
                        localStorage['firstName'] = firstName;
                        localStorage['lastName'] = lastName;
                        localStorage['balance'] = 0;
                        switch(accountType){
                            case 0:
                                localStorage['accountType'] = "Savings";
                                break;
                            case 1:
                                localStorage['accountType'] = "Investment";
                                break;
                            case 2:
                                localStorage['accountType'] = "Checking";
                                break;    
                            case 3:
                                localStorage['accountType'] = "Current";
                                break;    
                        }
                        window.location.assign("dashboard.html"); 
                    }else{
                        alert("Password cannot be left empty. Please fill in valid Password")
                    }
                }else{
                    alert("Username cannot be left empty. Please fill in valid Username")
                }
            }else{
                alert("Last Name field cannot be left empty. Please fill in valid Last Name.")    
            }
        }else{
            alert("First Name field cannot be left empty. Please fill in valid First Name.")
        }
    }else{
        alert("Account Information could not be stored. Please use a HTML5 compatible browser.")
    }
}

function deposit(){
	var amount = parseInt(document.getElementById("depositAmount").value);
	if (!isNaN(amount)){
		if (amount > 0){
			localStorage['balance'] += amount;
			alert("Deposit Successful!! Your new account balance is " + localStorage['balance']);
		}else{
			alert("Negative values not allowed.")
		}
	}else{
		alert("Amount entry is not a number!");
	}
}

function withdraw(){
	var amount = parseInt(document.getElementById("withdrawAmount").value);
	if (!isNaN(amount)){
		if (amount > 0){
			if (amount <= localStorage['balance']){
				localStorage['balance'] -= amount;
				alert("Withdrawal Successful!! Your new account balance is " + localStorage['balance']);
			}else{
                alert("Your account balance is too low. Please deposit funds to meet up with withdrawal.");
			}
		}else{
			alert("Negative values not allowed.")
		}
	}else{
		alert("Amount entry is not a number!");
	}
}
function transferFunds(){
    var accname = document.getElementById("transferAccName").value;
    var accno = parseInt(document.getElementById("transferAccNo").value);
    var amount = parseInt(document.getElementById("transferAmount").value);
    var password = document.getElementById("transferPass").value
    
    if (!isNaN(accno)){  // confirm if entry is a number
        if (!isNaN(amount)){
            if (password === localStorage['password']){
                if (amount > 0 && localStorage['balance'] >= amount){
                    var promptValue = confirm("Are you sure you want to transfer "+ amount + " to " + accname + " [" + accno + "]?");
                    if (promptValue){
                    	localStorage['balance'] -= amount;
                    	alert("Payment Successful");
                    } 
                }else{
                    alert("Your account balance is too low. Please deposit funds to meet up with transfer.");
                }
            }else{
                alert("Password is invalid");
            }
        }else{
            alert("Amount entry is not a number!");
        }
    }else{
        alert("Account number entry is not a number!");
    }
}


function welcomeUser(){
}

function displayBalance(){
    document.write("<p>Hello, " + localStorage['firstName'] + ", Your account balance is " + localStorage['balance'] + ".</p>");
}

function logout (){
	 confirm("LOGOUT??");
}
	







