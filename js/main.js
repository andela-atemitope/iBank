function clicked (){
	var user = document.getElementById("loginUser");
	var pass = document.getElementById("loginPass");

	if (user.value === localStorage['username']) { 
        if(pass.value === localStorage['password']){
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
                var email = document.getElementById("email").value;
                if (email != ''){
                	var username = document.getElementById("username").value; 
                	if (username != ''){
	                    var password = document.getElementById("password").value;
	                    if (password != ''){
	                    	var confirmPassword = document.getElementById("confirmPassword").value;
	                    	if (password === confirmPassword){
	                    		var accountType = parseInt(document.getElementById("accountType").value);
		                        localStorage['username'] = username;
		                        localStorage['password'] = password;
		                        localStorage['email'] = email;
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
	                    		alert("Passwords do not match. Please confirm entries, and try again.")
	                    	}
	                    }else{
	                        alert("Email field cannot be left empty. Please fill in valid email.")
	                    }
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
			var balance = parseInt(localStorage['balance']);
			balance += amount;
			alert("Deposit Successful!! Your new account balance is " + balance);
			localStorage['balance'] = balance;
            window.location.assign("dashboard.html");
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
			var balance = parseInt(localStorage['balance']);
			if (amount <= balance){
				balance -= amount;
				alert("Withdrawal Successful!! Your new account balance is " + balance);
				localStorage['balance'] = balance;
                window.location.assign("dashboard.html");
			}else{
                alert("Your account balance is too low. Please deposit funds to meet up with withdrawal.");
			}
		}else{
			alert("Negative values not allowed.");
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
            	var balance = parseInt(localStorage['balance']);
                if (balance >= amount){
                    var promptValue = confirm("Are you sure you want to transfer "+ amount + " to " + accname + " [" + accno + "]?");
                    if (promptValue){
                    	balance -= amount;
                    	alert("Payment Successful");
                    	localStorage['balance'] = balance;
                        window.location.assign("dashboard.html");
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
    document.write("<p> Hello, " + localStorage['firstName'] + "</p><br />");
}

function displayBalance(){
    document.write("<p>Your account balance is " + localStorage['balance'] + ".</p>");
}

function logout(){
  	if (confirm("LOGOUT??"))
		window.location.assign("index.html");
}

function returntoDash(){
    window.location.assign("dashboard.html");
}
	
function editFunction(){
	document.getElementById("firstNameProfile").value = localStorage['firstName'];
	document.getElementById("lastNameProfile").value = localStorage['lastName'];
	document.getElementById("emailProfile").value = localStorage['email'];
}

function saveProfile(){
	var firstName = document.getElementById("firstNameProfile").value;
	var lastName = document.getElementById("lastNameProfile").value;
	var email = document.getElementById("emailProfile").value;
	var password = document.getElementById("passwordProfile").value;
	var confirmPassword = document.getElementById("confirmPasswordProfile").value;

	if (firstName != '')
		localStorage['firstName'] = firstName;

	if (lastName != '')
		localStorage['lastName'] = lastName;

	if (email != '')
		localStorage['email'] = email;

	if (password != ''){
		if (confirmPassword === password)
			localStorage['password'] = password;
		else
			alert("Passwords do not match. Please confirm entries and try again.")
	}
	alert("Profile successfully saved.");
	window.location.assign("dashboard.html");
}





