var slideIndex = 0;
productSlides();

function productSlides() {
    var i;
    var y = document.getElementsByClassName("mySlides");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"; 
    }
    sIndex++;
    if (sIndex > y.length) {sIndex = 1} 
    y[sIndex-1].style.display = "block"; 
    setTimeout(productSlides, 2500); 
}