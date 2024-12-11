
document.getElementById('pick-button').addEventListener('click', function() {
  const uploadInput = document.getElementById('upload');
  const photoDisplay = document.getElementById('random-photo');
  const files = uploadInput.files;

  if (files.length === 0) {
    alert('Please upload some photos first!');
    return;
  }

  // Select a random file
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFile = files[randomIndex];

  // Display the selected photo
  const reader = new FileReader();
  reader.onload = function(event) {
    photoDisplay.src = event.target.result;
  };
  reader.readAsDataURL(randomFile);
});
