export async function getArt() {
  const promise = fetch(
    `https://api.artic.edu/api/v1/artworks?fields=title,artist_display,image_id&limit=100`
  );
  const response = await promise;
  //   if (response.status === 404) {
  //     return [];
  //   }
  const data = await response.json();

  const randomNum = getRandomNum(100);

  const result = data.data[randomNum];

  console.log(result);

  return result;
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
