//login.js
const loginForm = document.getElementById("myform");
const loginButton = document.getElementById("login-submit");
   const em =document.getElementById('email');
  const pass =document.getElementById('pass');

 $(document).ready(function(){
   $(".w1").hide();
 });

// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',s
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

      postData('https://buildingtask.herokuapp.com/api/auth/login', { email:em.value,password:pass.value })
    .then(data => {
      console.log(data); // JSON data parsed by response.json() call
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("userdata",JSON.stringify(data));
      var user=JSON.parse(localStorage.getItem("userdata")).user || {};
     if (user.name != undefined)
    {window.location.replace("./index.html");}
else{ $(".w1").show();}
    }).catch(function(error){ 
      console.error(error);});
    }
)