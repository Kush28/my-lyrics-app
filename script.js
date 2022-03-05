const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = search.value;

  fetch("https://api.lyrics.ovh/suggest/" + searchTerm)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      showSongs(response.data);
    });
});

function showSongs(data) {
  const ulElement = document.createElement("ul");
  ulElement.className = "songs";

  data.forEach(function (song) {
    const title = song.title;
    const artistName = song.artist.name;

    const liElement = document.createElement("li");
    liElement.innerText = artistName + " - " + title;

    ulElement.append(liElement);
  });

  result.append(ulElement);
}
