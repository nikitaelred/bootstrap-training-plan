AOS.init();

 document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      email: document.getElementById("inputEmail4").value,
      password: document.getElementById("inputPassword4").value,
      address: document.getElementById("inputAddress").value,
      city: document.getElementById("inputCity").value,
      state: document.getElementById("inputState").value,
      zip: document.getElementById("inputZip").value,
      check: document.getElementById("gridCheck").checked,
    };

    // Show spinner and disable button
    const submitBtn = document.getElementById("submitBtn");
    const spinner = document.getElementById("spinner");
    const submitText = document.getElementById("submitText");

    submitBtn.disabled = true;
    spinner.classList.remove("d-none");
    submitText.textContent = "Submitting...";

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("formData", JSON.stringify(formData));
        document.getElementById("message").innerHTML = `
          <div class="alert alert-success" role="alert">
            Form submitted successfully!
          </div>
        `;
        document.getElementById("myForm").reset();
      })
      .catch((error) => {
        document.getElementById("message").innerHTML = `
          <div class="alert alert-danger" role="alert">
            Error: ${error.message}
          </div>
        `;
      })
      .finally(() => {
        // Re-enable button and hide spinner
        submitBtn.disabled = false;
        spinner.classList.add("d-none");
        submitText.textContent = "Sign in";
      });
  });