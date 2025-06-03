mapboxgl.accessToken =
  "pk.eyJ1IjoibmlraS0xMjMyMiIsImEiOiJjbWI5ODRhOTAwdGV1MmlzZWdycnhqNzd0In0.BzxZP8a9fYwEubid6ZvFCQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.060982, 42.35725],
  zoom: 18,
});

document
  .getElementById("enrollment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const submitText = document.getElementById("submit-text");
    const spinner = document.getElementById("spinner");
    const successMessage = document.getElementById("success-message");

    // Show spinner
    submitText.classList.add("d-none");
    spinner.classList.remove("d-none");

    const formData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    // Simulate network delay
    setTimeout(() => {
      // Store in local storage
      const submissions = JSON.parse(localStorage.getItem("enrollments")) || [];
      submissions.push(formData);
      localStorage.setItem("enrollments", JSON.stringify(submissions));

      // Hide spinner and show success
      spinner.classList.add("d-none");
      submitText.classList.remove("d-none");
      successMessage.classList.remove("d-none");

      // Optional: reset form
      document.getElementById("enrollment-form").reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.classList.add("d-none");
      }, 3000);
    }, 1000);
  });
