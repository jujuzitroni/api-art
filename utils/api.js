export async function getArt() {
  //   const promise = fetch(
  //     `https://api.artic.edu/api/v1/artworks?fields=title,artist_display,image_id`
  //   );
  //   const response = await promise;
  //   if (response.status === 404) {
  //     return [];
  //   }
  //   const data = await response.json();
  //   return data;
  const testPiece = {
    title: 'Blue and Green Music',
    artist_display: "Georgia O'Keeffe\nAmerican, 1887–1986",
    image_id: '702580d8-451e-0b0c-bcc1-bac62e5f6631',
  };
  return testPiece;
}
