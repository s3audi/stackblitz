const content = [
  {
    text: ['Metin 1', 'Metin 2', 'Metin 3'],
    image: 'https://via.placeholder.com/300/ff7f7f/ffffff',
  },
  {
    text: ['Yeni Metin 1', 'Yeni Metin 2', 'Yeni Metin 3'],
    image: 'https://via.placeholder.com/300/7f7fff/ffffff',
  },
  {
    text: ['Başka Metin 1', 'Başka Metin 2', 'Başka Metin 3'],
    image: 'https://via.placeholder.com/300/7fff7f/ffffff',
  },
];

function changeContent(index) {
  const textDiv = document.getElementById('text');
  const imageElement = document.getElementById('image');

  // Metinleri değiştir
  textDiv.innerHTML = content[index].text
    .map((line) => `<p>${line}</p>`)
    .join('');

  // Fotoğrafı değiştir
  imageElement.src = content[index].image;
}
