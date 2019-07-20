class RatingBar{
    constructor(width, color, skillName) {
        this.width = width;
        this.color = color;
        this.skillName = skillName;
    }
}

var ratingBars = [];

function getRatingBarData(index, percentage, skillName){
    var rating = 400 * percentage;
    var color;
    if(index == 0){
        color = "#8BB990";
    } 
    else{
        if (ratingBars[index - 1].color == "#8BB990") {
            color = "#BB6857";
        } 
        else if(ratingBars[index - 1].color == "#D4B155") {
            color = "#8BB990";
        }
        else{
            color = "#D4B155";
        }
    }
    var newRatingBar = new RatingBar(rating, color, skillName);
    $ratingBar = $("#rating-bar-" + index.toString());
    $ratingBar.css("background-color",color);
    ratingBars.push(newRatingBar);
}

function fillRatingBar(index){
    $ratingBar = $("#rating-bar-" + index.toString());
    $ratingBar.animate({
        width: ratingBars[index].width.toString() + "px"
    }, 1000, function(){
        $ratingBarName = $("#skill-name-" + index.toString());
        $ratingBarName.text(ratingBars[index].skillName);
        $ratingBarName.animate({
            opacity: "1.0"
        },500);
    });
}

function fillAllRatingBars(){
    for(ratingBarIndex = 0; ratingBarIndex < ratingBars.length; ratingBarIndex++) {
        fillRatingBar(ratingBarIndex);
    }
}

