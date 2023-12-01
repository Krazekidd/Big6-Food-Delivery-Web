
    // JavaScript for the slideshow 
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }
    function buybuttonClicked(){
      alert("Your Order has been Placed")
      storeCartItemsToCSV();
      var cartContent = document.getElementsByClassName("gift-card")[0];
      window.location.href = "checkout.html";
      while (gift-card.hasChildNodes()){
          cartContent.removeChild(gift-card.firstChild);
      }
      updatetotal();
  }
  