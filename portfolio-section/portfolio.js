class Popup{
    constructor(title, projectSummary, imagePath){
        this.title = title;
        this.projectSummary = projectSummary;
        this.imagePath = imagePath;
    }
}

var popup = new Popup("","","");

function setPopupAttributes(index){

    popup.title = dataObjects[index].title;
    popup.projectSummary = dataObjects[index].projectSummary;
    
    $popupTitle = $(".popup-title");
    $popupTitle.text(popup.title);
    $popupSummary = $(".popup-summary");
    $popupSummary.text(popup.projectSummary);
    console.log(popup.projectSummary);

}

function animateGridCells(){
    for (gridCellIndex = 0; gridCellIndex < dataObjects.length; gridCellIndex++){
        $gridCell = $("#grid-cell-" + gridCellIndex.toString());
        $gridCell.animate({
            opacity: "1.0"
        },1000);
    }
}

function openPopup(index){
    //Set the popup attributes
    setPopupAttributes(index);
    
    //change the background
    $portfolioSection = $(".portfolio");
    $portfolioSection.css("background-color", "rgba(0,0,0,0.6)");
    
    //change the display properties
    for(gridCellIndex = 0; gridCellIndex < dataObjects.length; gridCellIndex++){
        $gridCell = $("#grid-cell-" + gridCellIndex.toString());
        $gridCell.css("display","none");
    }
    $popupContainer = $(".popup-container");
    $popupContainer.css("display", "block");
    
}

function closePopup(){
    //change the background
    $portfolioSection = $(".portfolio");
    $portfolioSection.css("background-color", "rgba(0,0,0,0)");
    
    //change the display properties
        for(gridCellIndex = 0; gridCellIndex < dataObjects.length; gridCellIndex++){
        $gridCell = $("#grid-cell-" + gridCellIndex.toString());
        $gridCell.css("display","inline");
    }
    $popupContainer = $(".popup-container");
    $popupContainer.css("display", "none");
}