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
  result.innerHTML = ""

  data.forEach(function (song) {
    const title = song.title;
    const artistName = song.artist.name;
    const albumCover = song.album.cover_big;

    const divElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const titleElement = document.createElement("h2");
    const artistElement = document.createElement("p");

    imageElement.src = albumCover;
    titleElement.innerText = title;
    artistElement.innerText = artistName;

    divElement.append(imageElement);
    divElement.append(titleElement);
    divElement.append(artistElement);

    divElement.className = "song-card";

    result.append(divElement);
  });
}
