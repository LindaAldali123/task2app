import fetchAPI from "./fetchdata.js";
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
fetchAPI.authPost('auth/register',data)
.then((response) => response.json())
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
