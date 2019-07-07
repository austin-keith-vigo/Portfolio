class SkillBar{
    constructor(width, color, id){
        this.width = width;
        this.color = color;
        this.id = id;
    }
}
var skillBars = [];

//Function called to set the width of each skill bar
function setSkillBarWidth(barID, percentage){

    //Calculate and set the width
    var barDOM = document.getElementById(barID);
    var width = 393 * percentage;
    width = width.toString() + "px";
    barDOM.style.width = "0px";
    
    //Push the new bar
    if(!skillBars.includes(barID)){
        var newBar = new SkillBar(width, "#8BB990", barID);
        skillBars.push(newBar);
    }
    
    //Set the color of the inner bar
    var skillBarsIndex = barID.charAt(barID.length - 1);
    var barMeterDOM = document.getElementById("SkillBarMeter" + skillBarsIndex.toString());
    barMeterDOM.style.backgroundColor = skillBars[skillBarsIndex].color;
    

}
/*-------------------------------------------
/* ALL THE FUNCTIONALITY BEHIND THE ANIMATING BARS */
/*-------------------------------------------*/
class Bar {
    constructor(height, margin, color, width) {
        this.height = height;
        this.color = color;
        this.margin = margin;
    }
}

//Array of bars for each side of the title
//The right bars are mirrored to the left bars
var bars = []
var colors = ["#8BB990", "#8BB990", "#8BB990", "#8BB990", "red", "blue"];

//Initialize the data of all the bars
function getBarsData(){
    var numOfBars = 11;
    var barHeight = 0;
    var paddingRight = 0;
    for (barIndex = 0; barIndex < numOfBars; barIndex++){

        //Get the height
        barHeight = Math.floor(Math.random() * (500 - 150 + 1)) + 150;
        marginRight = Math.floor(Math.random() * (12 - 3 + 1)) + 3;

        //Get the margin
        var barHeightToString = (barHeight.toString() + "px");
        var marginRightToString = (marginRight.toString() + "px");
        
        //Get the color
        var colorIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0;
        var color = colors[colorIndex];

        //Load the bars variable
        var temp = new Bar(barHeightToString,marginRightToString,color);
        bars.push(temp);
        
        //Set the outer divs for each bar
        var leftBarDOM = document.getElementById("LeftBar" + barIndex.toString());
        leftBarDOM.style.height = barHeightToString;
        leftBarDOM.style.marginRight = marginRightToString;
        
        var rightBarIndex = numOfBars - barIndex - 1;
        var rightBarDOM = document.getElementById("RightBar" + rightBarIndex.toString());
        rightBarDOM.style.height = barHeightToString;
        rightBarDOM.style.marginLeft = marginRightToString;
        
        //Set the colors of each bar
        var leftColorBarDOM = document.getElementById("LeftColorBar" + barIndex.toString());
        var rightColoBarDOM = document.getElementById("RightColorBar" + rightBarIndex.toString());
        leftColorBarDOM.style.backgroundColor = bars[barIndex].color;
        rightColoBarDOM.style.backgroundColor = bars[barIndex].color;
   }
}

/*-------------------------------------------
/* ALL THE FUNCTIONALITY BEHIND THE Popup */
/*-------------------------------------------*/
class Popup {
    constructor(title, dates, summary) {
        this.title = title;
        this.dates = dates;
        this.summary = summary;
    }
    
    newPopupData(title, dates, summary){
        this.title = title;
        this.dates = dates;
        this.summary = summary;
    }
}

//The model for the popup
var popup = new Popup("","","");

//Gets called whenever the user wants to open a popup
function openPopup(imageIndex){
    
    //Set the popup attributes
    let newTitle = dataObjects[imageIndex].title;
    let newDates = dataObjects[imageIndex].date;
    let newSummary = dataObjects[imageIndex].projectSummary;
    popup.newPopupData(newTitle, newDates, newSummary);
    
    //Update the View with the new data
    var projectTitleDOM = document.getElementById("ProjectTitle");
    var projectDatesDOM = document.getElementById("ProjectDates");
    var projectSummaryDOM = document.getElementById("ProjectSummary");
    projectTitleDOM.innerHTML = newTitle;
    projectDatesDOM.innerHTML = newDates;
    projectSummaryDOM.innerHTML = newSummary;
    
    //Open the popup
    var portfolioPopupDOM = document.getElementById("PortfolioPopup");
    portfolioPopupDOM.style.display = "block";
}

//Gets called whenever the user closes the popup
function closePopup(){
    //Close the popup
    var portfolioPopupDOM = document.getElementById("PortfolioPopup");
    portfolioPopupDOM.style.display = "none";
}

/*-------------------------------------------
/* ALL THE FUNCTIONALITY BEHIND THE Nav-Bar */
/*-------------------------------------------*/
function extendNavBar(){
    //Extend the Nav-bar
    var navBarDOM = document.getElementById("NavBarDiv");
    navBarDOM.style.width = "100vw";
    navBarDOM.style.backgroundColor = "#8BB990";
    
    //Display the buttons
    var buttons = document.getElementsByClassName("NavBarLink");
    for (buttonIndex = 0; buttonIndex < buttons.length; ++buttonIndex){
        buttons[buttonIndex].style.display = "inline";
    }
}

function closeNavBar(){
    //Hide Buttons
    var buttons = document.getElementsByClassName("NavBarLink");
    for (buttonIndex = 0; buttonIndex < buttons.length; ++buttonIndex){
        buttons[buttonIndex].style.display = "none";
    }
    
    //Close the navbar
    var navBarDOM = document.getElementById("NavBarDiv");
    navBarDOM.style.backgroundColor = "rgba(0,0,0,0)";
    navBarDOM.style.width = "40px";
    
    
}

/*-------------------------------------------
/* ALL THE FUNCTIONALITY BEHIND THE animating on scroll */
/*-------------------------------------------*/
function setWaypoint(id, animateFunction){
    var waypoint = new Waypoint({
        element: $(id),
        handler: animateFunction
    });
}

function openBanner(){
    var $banner = $(".Banner");
    $banner.animate({
        width: "50%" 
    });
}

function closeBanner(){
    var $banner = $(".Banner");
    $banner.animate({
        width: "100%" 
    });
}
