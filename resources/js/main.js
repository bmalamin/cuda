$(document).ready(function(){
    
    
    
    // STICKY MENU
    
    $(".js--services-section").waypoint(function(direction){
        if(diretion == "down"){
               $("nav").addClass("sticky");
           } else{
            $("nav").removeClass("sticky");
           }
        
    });
    
    
    
    
    // MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup('container');
});