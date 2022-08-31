let getData = async(url) =>{
    try {
        let res = await fetch(url);
        let data = await res.json();
    
        return data;
    } catch (error) {
        console.log(error);
    }
    
    }

    let displayData = (data,parent) =>{
        parent.innerText="";
    data.map((res)=>{
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src=res.strMealThumb;
        let p = document.createElement('p');
        p.innerText = res.strMeal;
        div.append(img,p);
        parent.append(div);
        div.addEventListener("click", () =>{
            localStorage.setItem( "reciepeId",res.idMeal);
            document.location.href="showreceipedetail.html";
        }
       )
    })
    
    
    }

let displayDetail = () =>{
   
    let detail = document.querySelector(".detail");

if( detail.style.display == "flex"){
    detail.innerText="";
    detail.style.display = "none";
}else{
    detail.innerText="";
    let data = JSON.parse(localStorage.getItem("user"));
    let name = document.createElement('h3');
    name.innerText = "User Name: " + data.User;  

    let email = document.createElement('h3');
    email.innerText = "Email: " + data.Email;  
    
    let password = document.createElement('h3');
    password.innerText = "Password: " + data.Password;  
    
     detail.append(name,email,password);
     detail.style.display = "flex";

}

}




 export {getData,displayData,displayDetail};

