// Function to validate email input on a form
function validateEmail(event) {
    // Get email input element
    var emailInput = document.getElementById("email");
    // Get trimmed email value
    var email = emailInput.value.trim();
    // Regular expression for email validation
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Get form and form show elements
    var form = document.getElementById("form");
    var formShow = document.getElementById("form-show");

    // Check if the email is invalid
    if (!regex.test(email)) {
        alert("Invalid email. Please enter a valid email address.");
    } else {
        // Hide the form and show the form show element
        form.className = "hide";
        formShow.classList.remove("hide");
        // Prevent the form from submitting
        event.preventDefault();
    }
}

// Function to show hidden text based on a given number
function showText(num) {
    var hiddenText = document.getElementById("hiddenText" + num);
    var hiddenButton = document.getElementById("viewmore" + num)
    hiddenText.style.display = "block";
    hiddenButton.style.display = "block";
    hiddenButton.style.width = "130px";
}

// Function to hide text based on a given number
function hideText(num) {
    var hiddenText = document.getElementById("hiddenText" + num);
    var hiddenButton = document.getElementById("viewmore" + num)

    // Check if text should be in "View less" state
    if (hiddenText.innerText === "View less") {
        hiddenText.style.display = "block";
        hiddenButton.style.display = "block";
        hiddenButton.style.width = "130px";
    } else {
        // Hide the text and button
        hiddenText.style.display = "none";
        hiddenButton.style.display = "none";
    }
}

// Function to toggle content (change view more to view less and vice versa)
function toggleContent(num) {
    var button = document.getElementById("hiddenText" + num);
    var icon1 = `<i class="fa-solid fa-caret-down me-1"></i>`;
    var icon2 = `<i class="fa-solid fa-caret-up me-1"></i>`;

    // Toggle between "View more" and "View less" based on button text
    if (button.innerText === "View more") {
        button.innerHTML = icon2 + "View less";
    } else {
        button.innerHTML = icon1 + "View more";
    }
}

// Function to toggle accordion on smaller screens
function toggleAccordion() {
    var viewmore = document.getElementsByClassName("viewmore");
    var collapse = document.getElementsByClassName("collapse");
    var masonry = document.getElementById("job-container");

    // Check if the screen width is less than 992px
    if (window.innerWidth < 992) {
        // Show all items, add 'show' class to collapse elements, and update masonry attribute
        for (var i = 0; i < 6; i++) {
            viewmore[i].removeAttribute('id');
            collapse[i].removeAttribute('id');
            collapse[i].classList.add("show");
        }
        masonry.setAttribute('data-masonry', '{"percentPosition": true }');
    }
}

// Variable to store the previous window width
var previousWidth = window.innerWidth;

// Function to check and refresh the page if the window width crosses 992px
function checkAndRefresh() {
    var currentWidth = window.innerWidth;

    // Check if the window width has crossed 992px boundary
    if ((previousWidth < 992 && currentWidth >= 992) || (previousWidth >= 992 && currentWidth < 992)) {
        location.reload();
    }

    // Update the previousWidth variable
    previousWidth = currentWidth;
}

// Initial toggleAccordion call to handle initial screen width
toggleAccordion();

// Event listeners for window resize and page load to handle responsive behavior
window.addEventListener('resize', toggleAccordion);
window.addEventListener('resize', checkAndRefresh);
window.addEventListener('DOMContentLoaded', checkAndRefresh);
