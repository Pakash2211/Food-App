import {getData,displayData,displayDetail} from './script/fetchdata.js';
import conatinerdata from './components/common.js';



let conatiner = document.getElementById('main_container');
conatiner.innerHTML = conatinerdata();

let search = document.querySelector(".receipe_search");
let  addreceipe = document.querySelector(".allreceipe");

let searchReceipe = async() => {
    try {
        let find = search.value;
       
        let url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${find}`;

        let data = await getData(url);
        console.log(data);
        displayData(data.meals,addreceipe);
    } catch (error) {
        console.log(error);
    }
}
let timeId;
function debounce(func, delay) {
    if(timeId){
        clearTimeout(timeId);
    }
          timeId = setTimeout(() =>{
                 func();
          },delay);
 }

 search.addEventListener("input",()=>{
    debounce(searchReceipe,10);
 })

 document.querySelector(".profile").addEventListener("click",displayDetail);