import fetchAPI from "./fetchdata.js";
$(".about").change(function(){
  var opSelect = $(this).find(":selected").val();
  const cit = document.querySelector('.city');
  const tow = document.querySelector('.town');
  const bout =  document.querySelector('.about');
  const nam =  document.querySelector('.namef');
  const des =  document.querySelector('.description');
  const form =  document.querySelector("form");
  let price=0 ;
   if(opSelect=="فنادق") {
   price =  document.querySelector('#p');}
    else { price =  document.querySelector('#pri');}
async function onSubmitData(evt){
  evt.preventDefault();
  const data={
    token:localStorage.getItem("token"),
      name:nam.value,
      city:cit.value,
      town:tow.value,
      type:bout.value, 
      price:price.value, 
      description:des.value,
    };
fetchAPI.authPost("owner/buildings/store",data)
  .then((response) => response.json() )
  .then((data) => {
    alert("added successfuly"); // JSON data parsed by `response.json()` call
location.reload(); 
    })
  .catch((error) => console.log(error));}
form.addEventListener("submit",onSubmitData);
})  