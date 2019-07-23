var isOpen = false;
function toggleNavigationBarDisplay(){
    $navigationBar = $(".navigation-bar");
    if (isOpen == false){
        $navigationBar.css("display","block");
        isOpen = true;
    }
    else{
        $navigationBar.css("display","none");
        isOpen = false;
    }
}