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
    $popupContainer = $(".popup-container");
    $popupContainer.css("display", "block");
    
}

function closePopup(){
    $popupContainer = $(".popup-container");
    $popupContainer.css("display", "none");
}