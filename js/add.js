$(".about").change(function(){
  var opSelect = $(this).find(":selected").val();
   
   if(opSelect=="فنادق") {
const cit = document.querySelector('.city');
const tow = document.querySelector('.town');

const bout =  document.querySelector('.about');
const nam =  document.querySelector('.namef');
const des =  document.querySelector('.description');
const pric =  document.querySelector('#p');
/*const file =  document.querySelector('.fil');*/
const form =  document.querySelector("form");
let item;
async function onSubmitData(evt){
  evt.preventDefault();
  const data={
    token:localStorage.getItem("token"),
      name:nam.value,
      city:cit.value,
      town:tow.value,
      type:bout.value, 
      price:pric.value, 
      description:des.value,
    
  };
  await fetch("https://buildingtask.herokuapp.com/api/owner/buildings/store",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },body:JSON.stringify(data)
  })
  .then(
    (response) => response.json(),
  )
  .then((data) => {
    alert("added successfuly"); // JSON data parsed by `response.json()` call
location.reload(); 
    })
  .catch((error) => console.log(error));
}
form.addEventListener("submit",onSubmitData);
   }else{
    const cit = document.querySelector('.city');
    const tow = document.querySelector('.town');
    
    const bout =  document.querySelector('.about');
    const nam =  document.querySelector('.namef');
    const des =  document.querySelector('.description');
    const pric =  document.querySelector('#pri');
    /*const file =  document.querySelector('.fil');*/
    const form =  document.querySelector("form");
    let item;
    async function onSubmitData(evt){
      evt.preventDefault();
      const data={
        token:localStorage.getItem("token"),
          name:nam.value,
          city:cit.value,
          town:tow.value,
          type:bout.value, 
          price:pric.value, 
          description:des.value,
        
      };
      await fetch("https://buildingtask.herokuapp.com/api/owner/buildings/store",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },body:JSON.stringify(data)
      })
      .then(
        (response) => response.json(),
      )
      .then((data) => {
        alert("added successfuly"); // JSON data parsed by `response.json()` call
    location.reload(); 
        })
      .catch((error) => console.log(error));
    }
    form.addEventListener("submit",onSubmitData);
       
   }
  });