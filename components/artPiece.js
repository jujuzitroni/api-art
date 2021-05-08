import { createElement } from '../utils/elements';

export function createArtPiece({ title, artist_display, image_id }) {
  return createElement('article', {
    className: 'artPiece',
    children: [
      createElement('img', {
        src: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
      }),
      createElement('h3', { innerText: title }),
      createElement('p', { innerText: artist_display }),
    ],
  });
}
