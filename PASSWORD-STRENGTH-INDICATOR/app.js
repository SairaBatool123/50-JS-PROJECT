let passIntput = document.getElementById("passIntput");
let output = document.getElementById("output");

passIntput.addEventListener('input', () => {
    console.log(passIntput.value);
    let password = passIntput.value
    if (password.length < 8) {
        output.innerText = "Your Password is too short";
        output.style.color = "red";
    } 
    else if (password.length > 12 || password.length > 16) {
        output.innerHTML = "Your Password is long enough";
        output.style.color = "red";
    }
    else {
        if (password.search(/[a-z]/) == -1) {
            // passIntput.search(/a-z/))
            // str.search(/quick/i);
            output.innerText = "Use lowerCase letters in your password";
            output.style.color = "red";

        }
        else if (password.search(/[A-Z]/) == -1) {
            output.innerText = "Use upperCase letters in your password";
            output.style.color = "red";

        }
        else if (password.search(/[!@#\$%\^&\*\(\)_\+\-=\{\}\[\]:;"'<>,\.\?\/]/) == -1) {
            output.innerText = "Use Special Character in your password";
            output.style.color = "red";
        }
        else if (password.search(/[0-9]/) == -1) {
            output.innerText = "Use Numeric letters in your password";
            output.style.color = "red";
        }
       
        else{
            output.innerText = "Your Password is Strong!"
            output.style.color = "green";
        }
    }
})
