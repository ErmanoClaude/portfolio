// Add eventlistener on click for modal

// Select button to close modal and select modal
const closeButton = document.getElementById("close-button");
const modalWithBackground = document.getElementById("modal-and-background");

// Add eventlistener to close modal
closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalWithBackground.style.display = "none";
});

// Select "@" logo to add event listener to open modal
const emailLogo = document.getElementById("email-logo");

emailLogo.addEventListener("click", (event) => {
  const text = "ermano.claude@cix.csi.cuny.edu";
  event.preventDefault();
  modalWithBackground.style.display = "flex";
});

// Copy button to write to clipboard
const checkClipboard = document.getElementById("check-clipboard");
const uncheckClipboard = document.getElementById("uncheck-clipboard");

uncheckClipboard.addEventListener("click", (event) => {
  event.preventDefault();
  // Write email to clipboard
  navigator.clipboard
    .writeText("ermano.claude@cix.csi.cuny.edu")
    .then(() => {})
    .catch((error) => {
      console.log("Error Copying Text for some reason");
    });
  
  // switch the icons to show green icon   
  checkClipboard.style.display = "block";
  uncheckClipboard.style.display = "none"
  
  
  // After wait time switch icons back
  setTimeout(()=> {
    checkClipboard.style.display = "none";
    uncheckClipboard.style.display = "block";
  }, 2000)
  
  
});
