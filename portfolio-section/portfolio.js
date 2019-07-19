class Popup{
    constructor(title, projectSummary, imageFilepaths){
        this.title = title;
        this.projectSummary = projectSummary;
        this.imageFilepaths = imageFilepaths;
    }
}

var popup = new Popup("","","");

function setPopupAttributes(index){

    popup.title = dataObjects[index].title;
    popup.projectSummary = dataObjects[index].projectSummary;
    //Sets it to the first image
    popup.imageFilepaths = dataObjects[index].imageFilepaths[0];
    
    $popupTitle = $(".popup-title");
    $popupTitle.text(popup.title);
    $popupSummary = $(".popup-summary");
    $popupSummary.text(popup.projectSummary);
    $popupImage = $(".popup-image");
    $popupImage.attr("src", popup.imageFilepaths);

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
    
    //disable scroll
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

}

function closePopup(){
    $popupContainer = $(".popup-container");
    $popupContainer.css("display", "none");
    
    //enable scroll
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });

}