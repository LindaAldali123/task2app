const na = document.querySelector('#name');

const eml = document.querySelector('#em');

const pas =  document.querySelector('#pass');
const re =  document.querySelector('#pp');

const form =  document.querySelector("form");

async function onSubmitData(evt){
  evt.preventDefault();
  if(pas.value===re.value){
  const data={
    name:na.value,
    email:eml.value,
    password:pas.value,
  };
  await fetch("https://buildingtask.herokuapp.com/api/auth/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },body:JSON.stringify(data)
  })
  .then(
    (response) => response.json(),
  )
  .then((data) =>{ console.log(data.access_token);
     localStorage.setItem("token", data.access_token);
     localStorage.setItem("userdata",JSON.stringify(data));
      var user=JSON.parse(localStorage.getItem("userdata")).user || {};
     console.log(user.name);
  window.location.replace("./index.html");})
  .catch((error) => console.log(error));
}else{
  $(".w1").show();

}
}
form.addEventListener("submit",onSubmitData);

/*
const na = document.getElementById('name').textContent;

const eml =document.getElementById('email').textContent;

const pas = document.getElementById('pass');
const re = document.getElementById('pp');
const send = document.getElementById("#send");
const form = document.getElementById("mform");


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://buildingtask.herokuapp.com/api/auth/register')
  .then(data => {
    console.log(data); // JSON data parsed by response.json() call
    dataPost(send.value);
    send.addEventListener("click", (evt) => {
      let event = evt.target.value;
      dataPost(event);
    });
      function dataPost(properties){
      if(form.re.value==form.pas.value){
        if(form.pas.value.length>6){
      na.value = JSON.stringify(data);
      eml.value = JSON.stringify(data);
      pas.value = JSON.stringify(data);
     
      data.properties.name.push(na);
      data.properties.email.push(eml);
      data.properties.password.push( pas);

      window.location.replace("../login.html");}else{
        alert("Error: Password must contain at least six characters!");
        return false;
      }
    }

      else
      {
         alert("The repeat password not applay password");
        return false;}
      }
       
 
  })
  .catch((error) => console.error(error));
  */