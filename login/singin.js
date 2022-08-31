let btn = document.querySelector(".btn");



// valid email or not check 
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

// valid password or not
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


// get data from json-server
let checkDetail = (obj, data) => {
    let count = 0;
    let user;
    data.map((res) => {
        if (res.email == obj.email && res.password == obj.password) {
            user = res.user;
            // for every login user-id
            count++;
        }
    })
    if (count != 0) {
let detail = {
    User:user,
    Email: obj.email,
    Password:obj.password
}

        localStorage.setItem("user",JSON.stringify(detail));
        window.location.href = "../index.html";
    } else {
        alert("Invalid detail");
    }
}



let datafetch = async(obj) => {

    try {
        let res = await fetch('http://localhost:3000/login');
        let data = await res.json();

        checkDetail(obj, data);


    } catch (error) {
        console.log(error);
    }


}



// detail check
let singUpdata = () => {
    event.preventDefault();
    let eml = document.querySelector(".eml");
    let psw = document.querySelector(".psw");

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
            password: psw.value
        }
        datafetch(obj);


        eml.value = "";
        psw.value = "";

        // window.location.href = "login.html";
    }
}

btn.addEventListener("click", singUpdata);