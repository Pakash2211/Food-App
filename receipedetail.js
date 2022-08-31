import {getData} from './script/fetchdata.js';
import conatinerdata from './components/common.js';

let conatiner = document.getElementById('main_container');
conatiner.innerHTML = conatinerdata();

let all = document.querySelector(".alldetail");

let displayAll = (data) =>{
    let title = document.createElement("h1");
    title.innerText = data.strMeal;
      let img = document.createElement("img");
      img.src= data.strMealThumb;
  
      let cate = document.createElement("p");
      cate.innerText =  "Category: " + data.strCategory;

      let area = document.createElement("p");
      area.innerText = "Area: " + data.strArea;
    
      let div1 = document.createElement("div");
       let need  = document.createElement("h3");
       need.innerText = "Ingredients : " + data.strMeal;

        let item1 = document.createElement('p');
        if(data.strIngredient1 != ""){
            item1.innerText = data.strIngredient1
        }
        let item2 = document.createElement('p');
        if(data.strIngredient2 != ""){
            item2.innerText = data.strIngredient2
        }



        let item3 = document.createElement('p');
        if(data.strIngredient3 != ""){
            item3.innerText = data.strIngredient3
        }


        let item4 = document.createElement('p');
        if(data.strIngredient4 != ""){
            item4.innerText = data.strIngredient4
        }

        let item5 = document.createElement('p');
        if(data.strIngredient5 != ""){
            item5.innerText = data.strIngredient5
        }

        
        let item6 = document.createElement('p');
        if(data.strIngredient6!= ""){
            item6.innerText = data.strIngredient6
        }

        
        let item7 = document.createElement('p');
        if(data.strIngredient7 != ""){
            item7.innerText = data.strIngredient7
        }

        
        let item8 = document.createElement('p');
        if(data.strIngredient8 != ""){
            item8.innerText = data.strIngredient8
        }

        
        let item9 = document.createElement('p');
        if(data.strIngredient9 != ""){
            item9.innerText = data.strIngredient9
        }

        
        let item10 = document.createElement('p');
        if(data.strIngredient10 != ""){
            item10.innerText = data.strIngredient10
        }
 
        let item11 = document.createElement('p');
        if(data.strIngredient11 != ""){
            item11.innerText = data.strIngredient11
        }


 
        let item12 = document.createElement('p');
        if(data.strIngredient12 != ""){
            item12.innerText = data.strIngredient12
        }
        let item13 = document.createElement('p');
        if(data.strIngredient13 != ""){
            item13.innerText = data.strIngredient13
        }

     
        let item14 = document.createElement('p');
        if(data.strIngredient14 != ""){
            item14.innerText = data.strIngredient14
        }

        let item15 = document.createElement('p');
        if(data.strIngredient15 != ""){
            item15.innerText = data.strIngredient15
        }

        div1.append(need,item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item12,item13,item14,item15);

       
       let describ =  document.createElement("p");
       describ.innerText =  "Description: " + data.strInstructions;

       let yt = document.createElement("p");
       yt.innerText = "Youtube link: " + data.strYoutube;
      all.append(title,img,cate,area,div1,describ,yt);

}











let ReceipeDetail = async() =>{
    try {
        let id = localStorage.getItem("reciepeId");
        let data = await getData(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log(data.meals[0]);
        displayAll(data.meals[0]);
    } catch (error) {
        console.log(error);
    }
   
}

window.addEventListener("load",ReceipeDetail);