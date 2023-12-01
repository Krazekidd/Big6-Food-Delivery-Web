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

function showForm() {
  // Populate userChoice with a form
  const formHtml = `
      <form>
          <label for="specialOccasion"><b>Type of Gift Card:</b></label>
          <div>
              <input type="checkbox" id="virtual" name="specialOccasion" value="virtual">
              <label for="virtual">Virtual</label>
          </div>
          <div>
              <input type="checkbox" id="physical" name="specialOccasion" value="physical">
              <label for="physical">Physical</label>
          </div>

          <label for="specialOccasion"><b>Special Occassion:</b></label>
          <div>
              <input type="checkbox" id="birthday" name="specialOccasion" value="birthday">
              <label for="birthday">Birthday</label>
          </div>
          <div>
              <input type="checkbox" id="Wedding" name="specialOccasion" value="Wedding">
              <label for="Wedding">Wedding</label>
          </div>
          <div>
              <input type="checkbox" id="holidays" name="specialOccasion" value="holidays">
              <label for="holidays">Holidays</label>
          </div>

          <label for="other">Other:</label>
          <input type="text" id="other" name="other" required>

          <label for="possible fonts"><b>Possible Fonts:</b></label>
          <div>
              <input type="checkbox" id="dramatic" name="specialOccasion" value="dramatic">
              <label for="dramatic">Dramatic</label>
          </div>
          <div>
              <input type="checkbox" id="cursive" name="specialOccasion" value="cursive">
              <label for="cursive">Cursive</label>
          </div>

          <label for="other">Other:</label>
          <input type="text" id="other" name="other" required>




          <button type="submit">Submit</button>
      </form>
  `;
  document.getElementById('userChoice').innerHTML = formHtml;
}