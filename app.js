// Function to show content based on the sectionId passed in
function showContent(sectionId) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected content section
    const selectedContent = document.getElementById(sectionId);
    if (selectedContent) {
        selectedContent.style.display = 'block'; // Display the selected section
    }

    // Change the background color when a button is clicked
    document.body.style.backgroundImage = 'none'; // Remove the background image
    document.body.style.backgroundColor = '#f0f0f0'; // Change to a solid color

    // Handle services section specific functionality
    if (sectionId === 'services') {
        const serviceImages = document.querySelectorAll(".service-image");
        
        // Add 'show' class to images for animation
        serviceImages.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add("show");
            }, index * 200); // Staggered animation effect
        });
    } else {
        // Hide the services images if another section is selected
        const serviceImages = document.querySelectorAll(".service-image");
        serviceImages.forEach(img => {
            img.classList.remove("show");
        });
    }
}

// Ensure no content is shown by default on page load
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    // Set background image when the page initially loads
    document.body.style.backgroundImage = "url('images/back.jpg')"; // Set the initial background image
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
});

// Prevent form submission and keep feedback section open
function submitFeedback() {
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page reload

        // Optionally, add a confirmation message or reset the form
        alert("Thank you for your feedback!");
        feedbackForm.reset(); // Clears form fields
    });
}

// Image carousel functionality
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide += direction;

    // Loop through slides
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop back to the last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    }

    // Move the carousel
    const offset = -currentSlide * 100; // Calculate offset
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide functionality
setInterval(() => {
    moveSlide(1);
}, 3000); // Change image every 3 seconds

function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const salon = document.getElementById('salon').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;
    const comments = document.getElementById('comments').value;

    // Display a confirmation message (this can be changed to actual form submission logic)
    alert(`Appointment booked:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSalon: ${salon}\nCategory: ${category}\nDate: ${date} ${hours}:${minutes}\nComments: ${comments}`);

    // Optionally reset the form
    document.getElementById('appointmentForm').reset();
}
