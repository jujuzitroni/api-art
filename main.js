import './style.css';
import { createElement, removeAllChildren } from './utils/elements';

const testText = createElement('p', { innerText: 'THE BUTTON WORKS!' });

const headerElement = createElement('header', {
  className: 'hero',
  children: [
    createElement('h1', { className: 'hero-h1', innerText: 'Look at Art' }),
    createElement('p', {
      className: 'hero-text',
      innerText:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    }),
    createElement('button', {
      className: 'hero-button',
      type: 'button',
      onclick: () => {
        removeAllChildren(resultsElement);
        resultsElement.append(testText);
      },
      innerText: 'get yourself some art',
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
  ],
});

const mainElement = createElement('main', {
  className: 'main',
  children: [headerElement, resultsElement, footerElement],
});

document.querySelector('#app').append(mainElement);
