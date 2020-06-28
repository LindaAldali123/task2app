//search.js
const searchButton = document.getElementById("sub");
const city=document.querySelector("#city");
const town=document.querySelector(".town");
const propType=document.querySelector(".propType");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();


    const max=document.querySelector("#maxp").value;
    const min=document.querySelector("#minp").value;
    // console.log(max + " " + min);
    
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
//  console.log(maxPr.value); 
// city:city.value,town:town.value,type:propType.value,max_price:max,min_price:min
  postData('https://buildingtask.herokuapp.com/api/search', { city:city.value,town:town.value,type:propType.value,max_price:max,min_price:min })    
.then(data => {
  var result='';
  for (var x in data ) {
    // console.log(data[x]);
    if(data[x].name!= undefined && data[x].price!=undefined)
    {
    result+='اسم العقار :'+ data[x].name+' السعر: '+data[x].price+'\r\n';}}
      if (result !='') alert(result); // JSON data parsed by response.json() call
    }).catch(function(error){console.error(error);});
});


 