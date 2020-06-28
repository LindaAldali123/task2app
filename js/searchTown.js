
	// Start SearchProperty  
$(document).ready(function(){
    $(".city").change(function(){
        var city = $(this).children("option:selected").val();
        
        if(city=="اريحا"){
            $(".town").html("<option>اسم البلد؟</option> ");
            $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>جفتلك</option> ");
             $(".town").append("<option>الديوك</option> ");
             $(".town").append("<option>العوجا</option> ");
             $(".town").append("<option>عقبة جبر</option> ");
             $(".town").append("<option>عين السلطان</option> ");
        
        }
        else
          if(city=="الخليل"){  
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>اذنا</option> ");
             $(".town").append("<option>الشيوخ</option> ");
             $(".town").append("<option>الظاهرية</option> ");
             $(".town").append("<option>العروب</option> ");
             $(".town").append("<option>صوريف</option> ");
              $(".town").append("<option>تفوح</option> ");
              $(".town").append("<option>بيت اولا</option> ");
              $(".town").append("<option>حلحول</option> ");
              $(".town").append("<option>حارس</option> ");
        
        }
        
        else
          if(city=="القدس"){
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>ابو ديس</option> ");
             $(".town").append("<option>العيزرية</option> ");
             $(".town").append("<option>بدو</option> ");
             $(".town").append("<option>عناتا</option> ");
             $(".town").append("<option>بيت صفافا</option> ");
             
        
        }
          else
          if(city=="بيت لحم"){
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>ابو انجيم </option> ");
             $(".town").append("<option>ارطاس</option> ");
             $(".town").append("<option>الخضر</option> ");
             $(".town").append("<option>الخليفات</option> ");
             $(".town").append("<option> الدوحة</option> ");
             $(".town").append("<option> دار صلاح</option> ");
        
        }
        
             else
          if(city=="جنين"){
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>الجديدة  </option> ");
             $(".town").append("<option>الجامعة الامريكية</option> ");
             $(".town").append("<option>الجلمة</option> ");
             $(".town").append("<option>اليامون</option> ");
             $(".town").append("<option>جبع</option> ");
             $(".town").append("<option>الرملة</option> ");
        
        }
                 else
          if(city=="رام الله"){
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>الطيرة</option> ");
             $(".town").append("<option>بيتونيا</option> ");
             $(".town").append("<option>بيرزيت</option> ");
             $(".town").append("<option>بلعين</option> ");
             $(".town").append("<option>برقا</option> ");
           
        }
        
                 else
          if(city=="سلفيت"){
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>الزاوية</option> ");
             $(".town").append("<option>اسكاكا</option> ");
             $(".town").append("<option>بديت</option> ");
             $(".town").append("<option>بروقين</option> ");
             $(".town").append("<option>شركة</option> ");
             $(".town").append("<option>كفل حارس</option> ");
        $(".town").append("<option>ياسوف </option> ");
        }
        
                 else
          if(city=="طوباس"){
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>طمون</option> ");
             $(".town").append("<option>عقابة</option> ");
             $(".town").append("<option>بردلة</option> ");
             $(".town").append("<option>كردلا</option> ");
             $(".town").append("<option>مخيم الفارعة</option> ");
             
        }
        
                 else
          if(city=="طولكرم"){
              $(".town").html("<option>اسم البلد؟</option> ");
               $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>ارتاح</option> ");
             $(".town").append("<option>اكتابا</option> ");
             $(".town").append("<option>الجاروشية</option> ");
             $(".town").append("<option>الراس</option> ");
             $(".town").append("<option>بلعا</option> ");
             $(".town").append("<option>ذنابة</option> ");
        $(".town").append("<option>زيتا</option> ");
               $(".town").append("<option>سفارين</option> ");
               $(".town").append("<option>شوفة</option> ");
               $(".town").append("<option>صيدا</option> ");
               $(".town").append("<option>عتيل</option> ");
               $(".town").append("<option>البلد</option> ");
        }
        
                 else
          if(city=="نابلس"){ 
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>الاغوار</option> ");
             $(".town").append("<option>الباذان</option> ");
             $(".town").append("<option>بديا</option> ");
             $(".town").append("<option>بلاطة</option> ");
             $(".town").append("<option>بورين</option> ");
               $(".town").append("<option>حوارة</option> ");
             
        }
        else 
             if(city=="قلقيلية"){
                 $(".town").html("<option>اسم البلد؟</option> ");
                 $(".town").append("<option>المدينة</option> ");
        $(".town").append("<option>باقة الحطب</option> ");
            
             
        }
        
        else
          if(city=="غزة"){   
              $(".town").html("<option>اسم البلد؟</option> ");
              $(".town").append("<option>المدينة</option> ");
          }
        
    }); 
 });
 // End SearchProperty  






	