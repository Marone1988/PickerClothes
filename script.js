
document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("upload");
  const pickButton = document.getElementById("pick-button");
  const randomPhoto = document.getElementById("random-photo");

  // Load saved images from localStorage
  let images = JSON.parse(localStorage.getItem("uploadedImages")) || [];

  // Display random photo from saved images
  pickButton.addEventListener("click", () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      randomPhoto.src = images[randomIndex];
    } else {
      alert("No photos available. Please upload some photos first.");
    }
  });

  // Handle file upload
  uploadInput.addEventListener("change", (event) => {
    const files = event.target.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        images.push(e.target.result);
        localStorage.setItem("uploadedImages", JSON.stringify(images));
      };
      reader.readAsDataURL(file);
    }
    alert("Photos uploaded successfully!");
  });
});
