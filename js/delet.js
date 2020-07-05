import fetchAPI from "./fetchdata.js";
const del = document.querySelector('.del');
const dld =  document.querySelector("#delt");
dld.addEventListener("click", (e) => {
    e.preventDefault();
   const data= {  token:localStorage.getItem("token"), name:del.value };
   fetchAPI.authPost('owner/buildings/deleteByName',data)
   .then((response) => response.json())
    .then(data => { console.log("deleted sucsses"); // JSON data parsed by response.json() call
    alert("تم الحذف بنجاح");}).catch(function(error){console.error(error);
    alert("لا يوجد عقار بهذا الاسم");});
    })