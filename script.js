    // Class method
    // document.getElementById('form-container').addEventListener('submit, async function(e) {
       // e.preventDefault();

       // const name = document.getElementBy Id('name).value;
       // const email = document.getElementById('email').value;
       // const password = document.getElementById('password').value;

       // send request to the server
       // const response = await fetch('/auth/register',{
            // method: 'POST',
            // headers: {
               // 'Content-Type' : 'application/json'
            // },  
            // body: JSON.stringify({ name, email, password})
       // });

       // const data = await response.json();

       // alert(data.message);

    // });


function validateForm() {
    // Clear previous errors
    document.getElementById("registrationError").innerHTML = "";

    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("registrationError").innerHTML = "Name is required.";
        return false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("registrationError").innerHTML = "Please enter a valid email address.";
        return false;
    }

    const password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("registrationError").innerHTML = "Password must be at least 8 characters long.";
        return false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("registrationError").innerHTML = "Passwords do not match.";
        return false;
    }
}


// let form = document.getElementById("loginForm")

// form.addEventListener("submit", function(event){
//     event.preventDefault(); //prevent page load on submit

//     //Validation
//     let username = form.elements['username'].value;
//     let password = form.elements['password'].value;

//     if (username && password) {
//         form.onsubmit();
//     } else {
//         alert("Please fill out te username & password field.")
//     }
// });
    