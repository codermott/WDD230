// Function to format the date in a human-readable format
function formatLastModified(lastModified) {
    const date = new Date(lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleString(undefined, options);
  }
  
  // Function to update the last modified element
  function updateLastModified() {
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    const formattedLastModified = formatLastModified(lastModified);
    lastModifiedElement.textContent = `Last Updated: ${formattedLastModified}`;
  }
  
  // Execute the updateLastModified function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', updateLastModified);