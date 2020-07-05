import fetchAPI from "./fetchdata.js";
const searchButton = document.getElementById("sub");
const city=document.querySelector("#city");
const town=document.querySelector(".town");
const propType=document.querySelector(".propType");
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const max=document.querySelector("#maxp").value;
    const min=document.querySelector("#minp").value;
    const data={ city:city.value,town:town.value,type:propType.value,max_price:max,min_price:min };
  fetchAPI.authPost('search',data)  
  .then((response) => response.json())  
.then(data => {
  var result='';
  for (var x in data ) {
    if(data[x].name!= undefined && data[x].price!=undefined)
    {result+='اسم العقار :'+ data[x].name+' السعر: '+data[x].price+'\r\n';}}
      if (result !='') alert(result);
    }).catch(function(error){console.error(error);});
});


 