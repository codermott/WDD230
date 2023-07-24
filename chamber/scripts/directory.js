document.addEventListener("DOMContentLoaded", function () {
  const toggleViewButton = document.getElementById("toggle-discovery-view");
  const directoryWrapper = document.querySelector(".directory-wrapper");

  // Function to fetch and display business data
  function fetchBusinessData() {
    fetch("scripts/data.json")
      .then((response) => response.json())
      .then((data) => {
        const businesses = data.businesses;
        const currentView = toggleViewButton.getAttribute("data-currentview");

        directoryWrapper.innerHTML = "";

        businesses.forEach((business) => {
          if (currentView === "tile") {
            const cardTile = document.createElement("div");
            cardTile.classList.add("card-tile");
            cardTile.innerHTML = `
              <h2>${business.name}</h2>
              <em>Founding Date: ${business.foundingDate}</em>
              <p>${business.businessType}</p>
              <a href="${business.website}" target="_blank">link to website</a>
              <ul>
                <li>Business Address: ${business.businessAddress}</li>
                <li>Contact Person: ${business.contactPerson}</li>
                <li>Phone: ${business.phone}</li>
              </ul>
            `;
            directoryWrapper.appendChild(cardTile);
          } else if (currentView === "list") {
            const cardList = document.createElement("div");
            cardList.classList.add("card-list");
            cardList.innerHTML = `<h2>${business.name}</h2>`;
            directoryWrapper.appendChild(cardList);
          }
        });
      })
      .catch((error) => console.log(error));
  }

  toggleViewButton.addEventListener("click", function () {
    const currentView = toggleViewButton.getAttribute("data-currentview");

    if (currentView === "tile") {
      toggleViewButton.innerHTML = "Switch to List View";
      toggleViewButton.setAttribute("data-currentview", "list");
    } else if (currentView === "list") {
      toggleViewButton.innerHTML = "Switch to Tile View";
      toggleViewButton.setAttribute("data-currentview", "tile");
    }

    fetchBusinessData();
  });

  fetchBusinessData();
});
