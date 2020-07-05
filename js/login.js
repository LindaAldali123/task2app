//login.js
import fetchAPI from "./fetchdata.js";
const loginForm = document.getElementById("myform");
// const loginButton = document.getElementById("login-submit");
const em = document.getElementById('email');
const pass = document.getElementById('pass');
async function onSubmit(e){
    e.preventDefault();
    const data={
        email:em.value,
        password: pass.value
    };
     fetchAPI.authPost("auth/login",data)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // JSON data parsed by response.json() call
              localStorage.setItem("token", data.access_token);
              localStorage.setItem("userdata", JSON.stringify(data));
              var user = JSON.parse(localStorage.getItem("userdata")).user || {};
              if (user.name != undefined) { window.location.replace("./index.html"); }
              else { $(".errmsg").show(); }
            })
    .catch ((error) => {
        console.error("Error:",error);
    });
}
loginForm.addEventListener("submit", onSubmit);
$(document).ready(function () {
    $(".errmsg").hide();
  });