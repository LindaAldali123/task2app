$(document).ready(function(){ 
	// Fetch Last 6 Buildings
	!(async function () {
		await fetch("https://buildingtask.herokuapp.com/api/index")
		  .then((response) => response.json())
		  .then((data) => {
		
							  for (var x in data ) {
								  //console.log(data);
								$('.building-row').append( `				
								<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 " data-aos="fade-up-left">
								  <div class="box ban ">
									
									<img src="img/post.jpg" alt="...">
									<div class="body">
									  <h3 class="Buildname"> `+data[x].name+`</h3>
									  <p class="BuildAddress">`+data[x].city+` - `+data[x].town+`</p>
									  <p class="text text-center BuildDesc">
									 ` +data[x].description+`
									  </p>
									  <a class="hvr-bounce-in" data-toggle="modal" data-target="#Reserv"><button>حجز</button></a>
						  
									  <a class="hvr-bounce-in" data-toggle="modal" data-target="#Message">
										<button>رسالة</button></a>
						  
									  <a class="hvr-bounce-in" data-toggle="modal" data-target="#Worning">
										<button>ابلاغ</button></a>
									</div>
								  </div>
								</div>`);
								
							  }
							  var userdata=JSON.parse(localStorage.getItem("userdata"));
							  if(userdata !=null)
							  var user=userdata.user || {};
							  if( user!=null && user.name=='admin'){
								$("#adm").show();
							}
	  
		  })
		  .catch((error) => console.error(error));
	  })();
	 });

	 //Logout
	 const logoutButton = document.getElementById("logout");
	 logoutButton.addEventListener("click", (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		localStorage.removeItem("userdata");
		window.location.replace("./login.html");});