function openBanner(){
    $banner = $(".self-portrait-banner");
    $banner.animate({
        left: "-50%"
    },{
        duration: 1000
    });
}

function closeBanner(){
    $banner = $(".self-portrait-banner");
    $banner.animate({
        left: "0%"
    },{
        duration: 10
    });
    
}