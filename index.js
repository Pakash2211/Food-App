import {getData,displayData,displayDetail} from './script/fetchdata.js';
import conatinerdata from './components/common.js';

let conatiner = document.getElementById('main_container');
conatiner.innerHTML = conatinerdata();

let  addreceipe = document.querySelector(".allreceipe");
let detail = document.querySelector(".detail");



let randomdata = async() => {
    try {
        let url = 'http://www.themealdb.com/api/json/v1/1/filter.php?a=indian';
        let data = await getData(url);
        console.log(data);
         displayData(data.meals,addreceipe);
    } catch (error) {
        console.log("locha");
    }
}
window.addEventListener("load",randomdata);

 document.querySelector(".profile").addEventListener("click",displayDetail);
