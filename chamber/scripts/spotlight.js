// Sample dynamic content for spotlights
const spotlightsData = [
    {
        title: "Thankful Transport",
        imgSrc: "img/Untitled-1-01.png",
        description: "\"We get it there for you!\"",
        contactInfo: "hello@thankfultransport.com | 999-999-9999 | www.website.com"
    },
    {
        title: "Code Primera",
        imgSrc: "img/Untitled-2-02.png",
        description: "An after school coding instructional program.",
        contactInfo: "contact@codeprimera.com | 999-999-9999 | www.website.com"
    },
    {
        title: "Broulims",
        description: "Local grocery store to meet your needs.",
        contactInfo: "contact@codeprimera.com | 999-999-9999 | www.website.com"
    }
];

function createSpotlights() {
    const spotlightsSection = document.getElementById("spotlightsSection");

    spotlightsData.forEach((spotlightData, index) => {
        const spotlightDiv = document.createElement("div");
        spotlightDiv.classList.add(`spotlight${index + 1}`);

        const spotlightTitle = document.createElement("h2");
        spotlightTitle.classList.add(`spotlight${index + 1}title`);
        spotlightTitle.textContent = spotlightData.title;
        spotlightDiv.appendChild(spotlightTitle);

        if (spotlightData.imgSrc) {
            const spotlightImg = document.createElement("img");
            spotlightImg.classList.add(`spotlight${index + 1}img`);
            spotlightImg.src = spotlightData.imgSrc;
            spotlightDiv.appendChild(spotlightImg);
        }

        const spotlightDesc = document.createElement("h3");
        spotlightDesc.classList.add(`spotlight${index + 1}desc`);
        spotlightDesc.textContent = spotlightData.description;
        spotlightDiv.appendChild(spotlightDesc);

        const spotlightContact = document.createElement("p");
        spotlightContact.classList.add(`spotlight${index + 1}contact`);
        spotlightContact.textContent = spotlightData.contactInfo;
        spotlightDiv.appendChild(spotlightContact);

        spotlightsSection.appendChild(spotlightDiv);
    });
}

// Call the function to create dynamic spotlights when the page loads
createSpotlights();
