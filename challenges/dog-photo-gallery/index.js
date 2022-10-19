let imgContainer = document.querySelector(".img-container");
let unorderedList = document.querySelector(".list");
let shuffleBtn = document.querySelector(".btn");

shuffleBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw Error(
          ` ${response.status} ${response.statusText}`
        );
      } else {
        return response.json();
      }
    })
    .then((data) => {
      imgContainer.innerHTML = `<img src="${data.message}"> `;
      unorderedList.append(imgContainer);
    })
    .catch((error) => alert("Error: " + error.message));
});
