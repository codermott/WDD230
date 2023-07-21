// Function to format the date and time
function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  
  // Function to update the last modified time and date in the HTML
  function updateLastModified() {
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = formatDate(lastModifiedDate);
    lastModifiedElement.textContent = `Last modified: ${formattedDate}`;
  }
  
  // Call the function to update the last modified time and date when the page is loaded
  window.addEventListener("DOMContentLoaded", updateLastModified);
  