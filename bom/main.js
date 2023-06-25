const inputElement = document.getElementById("favchap");
const buttonElement = document.getElementById("addChapterBtn");
const listElement = document.getElementById("list");

buttonElement.addEventListener("click", function() {
  if (inputElement.value.trim() !== "") {
    const liElement = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    liElement.textContent = inputElement.value;

    liElement.appendChild(deleteButton);

    listElement.appendChild(liElement);

    deleteButton.addEventListener("click", function() {
      liElement.remove();
    });

    inputElement.focus();

    inputElement.value = "";
  }
});