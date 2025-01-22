document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successOverlay = document.getElementById("success-overlay");
  const closeOverlayButton = document.getElementById("closeOverlay");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Submit the form data to Netlify
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Show the success overlay
          successOverlay.style.display = "flex";
          form.reset(); // Reset the form fields
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was an error submitting your form. Please try again.");
        console.error("Form submission error:", error);
      });
  });

  // Close the overlay
  closeOverlayButton.addEventListener("click", function () {
    successOverlay.style.display = "none";
  });
});
