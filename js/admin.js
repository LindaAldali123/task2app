$(document).ready(
  function(){
 
postData('https://buildingtask.herokuapp.com/api/admin/index', { token:localStorage.getItem("token")})    
.then(data => {
    data.map(el => {
        //console.log(data);
        if(el.approverd==false){ 
          console.log(el); 
      $(' .propContent').append( `
      <section>
      <div class="Secheader"> 
      <img src="img/user2.png" />				
      <h6>أحمد ربايعة</h6>
      <span class="Usermail" >AhmadRab@gmail.com</span>
  </div>
  <p>
      <label>اسم صاحب العقار:</label>
      <span class="lab1"> أحمد حسن ابراهيم ربايعة</span>
  </p>
  
  <p>
      <label>رقم الهاتف:</label>
  
      <span class="lab2"> 059567398001</span>
  </p>
  
  <p>
      <label>المدينة:</label>
  
      <span class="lab3">`+el.city+`</span>
  </p>
  
  <p>
      <label>البلد:</label>
  
      <span class="lab4"> `+el.town+`</span>
  </p>
  
  <p>
      <label>نوع العقار:</label>
  
      <span class="lab5">`+el.type+` </span>
  </p>
  
  <p>
      <label>اسم العقار:</label>
  
      <span class="lab6">` +el.name+`</span>
  </p>
  
  <p>
      <label>الوصف:</label>
  
      <span class="lab7">` +el.city+` - `+el.town+`<br>
          `+el.description+`</span>
          <br>
          <button class="reject" >رفض</button>
          <button class="emphasis" onclick="setId(`+el.id+`)">تأكيد</button> <br>` 
      +
    `
          <span class="time">
              <i class="fa fa-clock-o"></i> 2:40 PM
          </span>

          <span class="day">
              <i class="fa fa-history"></i> 2/5/2019
          </span> </section>`);
}
    })
  })

  .catch((error) => console.error(error));
     
});
//
function setId(id1)
{localStorage.setItem("buildingid", id1);
console.log(localStorage.getItem("buildingid"));

postData('https://buildingtask.herokuapp.com/api/admin/approve',  {id:localStorage.getItem("buildingid"),token:localStorage.getItem("token")})
.then(data => {
alert("approved successfuly"); // JSON data parsed by `response.json()` call
location.reload(); 
}).catch(function(error){console.error(error);});

}

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

