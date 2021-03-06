import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getArt } from './utils/api';
import { createArtPiece } from './components/artPiece';
import { debounce } from './utils/timer';

const headerElement = createElement('header', {
  className: 'hero',
  children: [
    createElement('h1', { className: 'hero-h1', innerText: 'Look at Art' }),
    createElement('p', {
      className: 'hero-text',
      innerText:
        'Are you stressed? Do you miss museums? Look at some art! If you need a breather, let your mind wander while looking at something beautiful. Just click the button. You will be okay.',
    }),
    createElement('button', {
      className: 'hero-button',
      type: 'button',
      innerText: 'get yourself some art',
      onclick: debounce(() => {
        removeAllChildren(resultsElement);
        getArt().then((artPiece) => {
          resultsElement.append(createArtPiece(artPiece));
        });
      }, 500),
    }),
  ],
});

const resultsElement = createElement('section', {
  className: 'resultsSection',
});

const footerElement = createElement('footer', {
  className: 'footer',
  children: [
    createElement('p', {
      className: 'footer-text',
      innerText: "It's fine. This is fine.",
    }),
    createElement('p', {
      className: 'footer-text',
      innerText: 'Images and data via Art Institute of Chicago API',
    }),
  ],
});

const mainElement = createElement('main', {
  className: 'main',
  children: [headerElement, resultsElement, footerElement],
});

document.querySelector('#app').append(mainElement);
