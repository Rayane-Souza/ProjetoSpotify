document.addEventListener("DOMContentLoaded", () => {
    const artistsData = [
      { name: "Miyeon", image: "./img/artista1.jpeg" },
      { name: "Miley Cyrus", image: "./img/artista2.jpeg" },
      { name: "Banda", image: "./img/artista4.jpeg" },
      { name: "Ariana Grande", image: "./img/img7.jpeg" },
      { name: "Camila Cabello", image: "./img/img8.jpeg" },
      { name: "Camila Cabello", image: "./img/artista5.jpeg" }
    ];
  
    const albumsData = [
      { title: "SOUR", artist: "Olivia Rodrigo", cover: "./img/img1.jpg" },
      { title: "Positions", artist: "Ariana Grande", cover: "./img/img2.jpg" },
      { title: "Sweetener", artist: "Ariana Grande", cover: "./img/img7.jpeg" },
      { title: "Album X", artist: "Pedro Felipe", cover: "./img/img3.jpg" },
      { title: "Blackpink", artist: "Blackpink", cover: "./img/img9.jpeg" },
      { title: "Sleep Album", artist: "Sleep", cover: "./img/img6.jpg" }

    ];
  
    const artistGrid = document.querySelector(".artists-grid");
    const albumsGrid = document.querySelector(".albums-grid");
  
    artistsData.forEach((artist) => {
      const artistCard = document.createElement("div");
      artistCard.classList.add("artist-card");
  
      artistCard.innerHTML = `
        <img src="${artist.image}" alt="Imagem de ${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artista</p>
      `;
      artistGrid.appendChild(artistCard);
    });
  
    albumsData.forEach((album) => {
      const albumCard = document.createElement("div");
      albumCard.classList.add("album-card");
  
      albumCard.innerHTML = `
        <img src="${album.cover}" alt="Capa do álbum ${album.title}">
        <p>${album.title}</p>
        <p>${album.artist}</p>
      `;
      albumsGrid.appendChild(albumCard);
    });
  });
  