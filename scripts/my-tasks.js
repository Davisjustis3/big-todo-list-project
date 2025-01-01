// import { todoList } from '../scripts/create-new.js';


console.log(document.querySelector('.js-today-date').innerHTML);

function displayTodaysDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector('.js-today-date').innerHTML = date[1] + "/" + date[2] + "/" + date[3];
 
}
window.onload = function (){
  displayTodaysDate();
}