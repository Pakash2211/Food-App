let btn = document.querySelector(".btn");

// Email Part
let checkEml = () => {

    let eml = document.querySelector(".eml");
    let p = document.querySelector('.eml_error');
    let emailbox = document.querySelector("#emailbox");
    if (eml.value == "") {

        p.innerText = "Please enter a valid email address";

        emailbox.classList.remove("validation");

    } else {

        p.innerText = "";

        emailbox.classList.add("validation");
    }

}

// password part

let checkPsw = () => {
    let psw = document.querySelector(".psw").value;
    let p1 = document.querySelector('.pass_error');
    let passbox = document.querySelector('#passbox');
    if (psw == "") {
        p1.innerText = "Password is required";
        passbox.classList.remove("validation");
    } else {
        p1.innerText = "";
        passbox.classList.add("validation");
    }

}




// data-add in json-serve
let datafetch = async(obj) => {
    try {
        let res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        alert("successful login");
        window.location.href = "login.html";

    } catch (error) {
        console.log(err);
    }
}


// receive data and check detail
let singUpdata = () => {
    event.preventDefault();
    let eml = document.querySelector(".eml");
    let psw = document.querySelector(".psw");
    let user = document.querySelector(".user");

    if (eml.value == "" && psw.value == "") {
        let p = document.querySelector('.eml_error');
        p.innerHTML = "Enter Your Email";
        let p1 = document.querySelector('.pass_error');
        p1.innerText = "Password is required";

    } else if (eml.value == "") {
        let p = document.querySelector('.eml_error');
        p.innerText = "Enter Your Email";
    } else if (psw.value == "") {
        let p1 = document.querySelector(".pass_error");
        p1.innerText = "Password is required";
    } else if (eml.value != "" && psw.value != "") {
        let obj = {
            email: eml.value,
            password: psw.value,
            user : user.value
        }
        datafetch(obj);


        eml.value = "";
        psw.value = "";
        user.value="";

    }
}


btn.addEventListener("click", singUpdata);