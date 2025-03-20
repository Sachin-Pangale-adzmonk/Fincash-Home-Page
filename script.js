
// plans year section start
function plansInput1(value) {
  document.getElementById("rangeValue1").value = value;
}

function plansSlider1(value) {
  document.querySelector(".range").value = value;
}
// plans amount section start
function plansInput2(value) {
  document.getElementById("rangeValue2").value = value;
}

function plansSlider2(value) {
  document.querySelector(".range").value = value;
}

function showContent(section) {
  // Hide all images and questions
  document
    .querySelectorAll(".plans-year-questions p, .plans-amount-questions p")
    .forEach((el) => {
      el.classList.remove("active-content");
    });

  // Show the relevant image and question
  document
    .querySelector(`.year-${section}`)
    .classList.add("active-content");
  document
    .querySelector(`.amount-${section}`)
    .classList.add("active-content");
}

// Get all list items
const listItems = document.querySelectorAll(".plans-navbar li");

// Add click event to each list item
listItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from the currently active item
    document
      .querySelector(".plans-navbar .active-plans-text")
      .classList.remove("active-plans-text");

    // Add active class to the clicked item
    this.classList.add("active-plans-text");

    // Get the section name from the class (e.g., "Retirement" from "nav-Retirement")
    const section = this.classList[0].split("-")[1];
    showContent(section);
  });
});


function openmenu(){
    document.getElementById("mob-navbar").style.display= "block";
    document.getElementById("close-menu").style.display= "block";
    document.getElementById("open-menu").style.display= "none";
    
}
function closemenu(){
    document.getElementById("mob-navbar").style.display= "none";
    document.getElementById("close-menu").style.display= "none";
    document.getElementById("open-menu").style.display= "block";
    
}


// testimonials start



// testimonials end 