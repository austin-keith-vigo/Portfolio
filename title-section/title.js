/*--------------------------------*/
/* JS file for title elements*/
/*--------------------------------*/
class Bar {
    constructor(height, margin, color) {
        this.height = height;
        this.color = color;
        this.margin = margin;
    }
}

//Array of bars for each side of the title
//The right bars are mirrored to the left bars
var bars = []
var colors = ["#8BB990", "#8BB990", "#8BB990", "#8BB990", "red", "blue"];

function getBarsData(){
    var numOfBars = 12;
    var barHeight = 0;
    var margin = 0;
    
    var maxBarHeight = 500;
    var minBarHeight = 150;
    var maxMargin = 12;
    var minMargin = 3;
    for (barIndex = 0; barIndex < numOfBars; barIndex++){
        
        //Get the height and the padding
        barHeight = Math.floor(Math.random() * (maxBarHeight - minBarHeight + 1)) + minBarHeight;
        margin = Math.floor(Math.random() * (maxMargin - minMargin + 1)) + minMargin;
        barHeight = (barHeight.toString() + "px");
        margin = (margin.toString() + "px");
        
        //Get the color
        var colorIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0;
        var color = colors[colorIndex];
        
        //Load the bars variable
        var newBar = new Bar(barHeight,margin,color);
        bars.push(newBar);
        
        //Set the DOMS for the left and right bars
        var leftBarDOM = document.getElementById("left-animating-bar-box-" + barIndex.toString());
        leftBarDOM.style.marginRight = margin;
        leftBarDOM.style.backgroundColor = color;
        
        var rightBarIndex = numOfBars - barIndex - 1;
        var rightBarDOM = document.getElementById("right-animating-bar-box-" + rightBarIndex.toString());
        rightBarDOM.style.marginLeft = margin;
        rightBarDOM.style.backgroundColor = color;
        
    }
}

function animateBarsDown(){
    
    //Animate all the bars down
    for (barIndex = 0; barIndex < bars.length; barIndex++){
        var rightBarIndex = bars.length - barIndex - 1;
        var rightBarID = "#" + "right-animating-bar-box-" + rightBarIndex.toString();
        var leftBarID = "#" + "left-animating-bar-box-" + barIndex.toString();

        var $leftBar = $(leftBarID);
        var $rightBar = $(rightBarID);

        $leftBar.animate({
            height: bars[barIndex].height
        },{
            duration: 1000
        });

        $rightBar.animate({
            height: bars[barIndex].height
        },{
            duration: 1000
        });
    }
}

function animateTitleNameBannerDown(){
    
    $titleNameBanner = $(".title-name-banner");
    $titleNameBanner.animate({
        top: "50%"
    },{
        duration: 1000
    });
}

function resetBarHeight(){
    for (barIndex = 0; barIndex < bars.length; barIndex++){
        var rightBarIndex = bars.length - barIndex - 1;
        var rightBarID = "#" + "right-animating-bar-box-" + rightBarIndex.toString();
        var leftBarID = "#" + "left-animating-bar-box-" + barIndex.toString();

        var $leftBar = $(leftBarID);
        var $rightBar = $(rightBarID);
        
        $leftBar.css("height","0px");
        $rightBar.css("height","0px");
        
    }
}

function resetTitleNameBanner(){
    $titleNameBanner = $(".title-name-banner");
    $titleNameBanner.css("top", "0%");
}

