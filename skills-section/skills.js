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
    var newRatingBar = new RatingBar(rating, "#8BB990", skillName);
    ratingBars.push(newRatingBar);
}

function fillRatingBar(index){
    $ratingBar = $("#rating-bar-" + index.toString());
//    $ratingBar.css("width",ratingBars[index].width.toString() + "px");
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

