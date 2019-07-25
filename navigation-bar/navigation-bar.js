var isOpen = false;
function toggleNavigationBarDisplay(){
    $navigationBar = $(".navigation-bar");
    $navigationBarButtonOpen = $("#open");
    $navigationBarButtonClose = $("#close");
    
    if (isOpen == false){
        $navigationBar.css("display","block");
        isOpen = true;
        
        

        $navigationBarButtonOpen.animate({
            opacity: "0"
        }, 200, function(){
            $navigationBarButtonClose.css("opacity","1"); 
        });

        
    }
    else{
        $navigationBar.css("display","none");
        isOpen = false;
        
        
        $navigationBarButtonClose.animate({
            opacity: "0"
        }, 200, function(){
            $navigationBarButtonOpen.css("opacity","1")
        });
    }
    

}