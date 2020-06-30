$(document).ready(function(){
  $(".price2").hide();
$(".about").change(function(){
 var opSelect = $(this).find(":selected").val();
  
  if(opSelect=="فنادق") {
      $(".price2").show(1000);
      $(".pr").hide();
  }
  else {
       $(".pr").show(1000);
       $(".price2").hide(1000);
  }
});
});