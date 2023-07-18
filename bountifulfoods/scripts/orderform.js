// JSON data containing the available fruits
const fruitsData = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Apricot" },
    { id: 3, name: "Avocado" },
    { id: 4, name: "Banana" },
    { id: 5, name: "Blackberry" },
    { id: 6, name: "Blueberry" },
    { id: 7, name: "Cherry" },
    { id: 8, name: "Dragonfruit" },
    { id: 9, name: "Durian" },
    { id: 10, name: "Feijoa" },
    { id: 11, name: "Fig" },
    { id: 12, name: "Gooseberry" },
    { id: 13, name: "Grape" },
    { id: 14, name: "GreenApple" },
    { id: 15, name: "Guava" },
    { id: 16, name: "Kiwi" },
    { id: 17, name: "Lemon" },
    { id: 18, name: "Lime" },
    { id: 19, name: "Lingonberry" },
    { id: 20, name: "Lychee" },
    { id: 21, name: "Melon" },
    { id: 22, name: "Morus" },
    { id: 23, name: "Orange" },
    { id: 24, name: "Papaya" },
    { id: 25, name: "Passionfruit" },
    { id: 26, name: "Pear" },
    { id: 27, name: "Persimmon" },
    { id: 28, name: "Pineapple" },
    { id: 29, name: "Pitahaya" },
    { id: 30, name: "Plum" },
    { id: 31, name: "Pomegranate" },
    { id: 32, name: "Raspberry" },
    { id: 33, name: "Strawberry" },
    { id: 34, name: "Tangerine" },
    { id: 35, name: "Tomato" },
    { id: 36, name: "Watermelon" },
  ];
  
  // Function to populate a select element with options
  function populateSelect(selectId, data) {
    const selectElement = document.getElementById(selectId);
    for (const fruit of data) {
      const option = document.createElement("option");
      option.value = fruit.id;
      option.textContent = fruit.name;
      selectElement.appendChild(option);
    }
  }
  
  // Function to populate all three select elements
  function populateAllSelects() {
    populateSelect("fruit1", fruitsData);
    populateSelect("fruit2", fruitsData);
    populateSelect("fruit3", fruitsData);
  }
  
  // Call the function to populate the select elements when the page is loaded
  window.addEventListener("DOMContentLoaded", populateAllSelects);
  