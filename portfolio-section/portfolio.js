class Popup{
    constructor(title, projectSummary, imageFilepaths){
        this.title = title;
        this.projectSummary = projectSummary;
        this.imageFilepaths = imageFilepaths;
        this.currentImageIndex = 0;
    }
}

var popup = new Popup(vusarData.title,vusarData.projectSummary,vusarData.imageFilepaths);

function setPopupAttributes(index){

    popup.title = dataObjects[index].title;
    popup.projectSummary = dataObjects[index].projectSummary;
    //Sets it to the first image
    popup.imageFilepaths = dataObjects[index].imageFilepaths;
    
    $popupTitle = $(".popup-title");
    $popupTitle.text(popup.title);
    $popupSummary = $(".popup-summary");
    $popupSummary.html(popup.projectSummary);
    $popupImage = $(".popup-image");
    $popupImage.attr("src", popup.imageFilepaths[popup.currentImageIndex]);

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
//    $popupContainer.css("display", "block");
    $popupContainer.animate({
        top: "0px"
    },{
        duration: 200
    })


}

function closePopup(){
    $popupContainer = $(".popup-container");
//    $popupContainer.css("display", "none");
    $popupContainer.css("top", "-2000px");
    
    //enable scroll

}

function nextImage(){
    popup.currentImageIndex = popup.currentImageIndex + 1;
    
    if(popup.currentImageIndex == popup.imageFilepaths.length){
        console.log("reset");
        popup.currentImageIndex = 0;
    }
    
    $popupImage = $(".popup-image");
    $popupImage.attr("src", popup.imageFilepaths[popup.currentImageIndex]);
    
}

function previousImage(){
    popup.currentImageIndex = popup.currentImageIndex - 1;
    
    if(popup.currentImageIndex < 0){
        popup.currentImageIndex = popup.imageFilepaths.length - 1;
    }
    
    $popupImage = $(".popup-image");
    $popupImage.attr("src", popup.imageFilepaths[popup.currentImageIndex]);
}