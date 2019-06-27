function initializeHeader() {

    document.getElementById("MainTitle").textContent = mainTitle.title;
}

initializeHeader();

for (var key in internships) {
    console.log(internships[key]);
}