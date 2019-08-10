import {getMenuTemplate} from './components/menu';
import {getSearchTemplate} from './components/search';
import {getFilterTemplate} from './components/filter';

import {getBoardContainerTemplate} from './components/board-container';
import {getCardTemplate} from './components/card';

const renderMarkup = (place, parentContainer, markup) => {
  parentContainer.insertAdjacentHTML(place, markup);
};

const container = document.querySelector(`.main__control.container`);
const mainContainer = document.querySelector(`.main`);

renderMarkup(`beforeend`, container, getMenuTemplate());

renderMarkup(`beforeend`, mainContainer, getSearchTemplate());

renderMarkup(`beforeend`, mainContainer, getFilterTemplate());

renderMarkup(`beforeend`, mainContainer, getBoardContainerTemplate());

const tasksContainer = document.querySelector(`.board__tasks`);
const CARDS_AMOUNT = 3;
for (let i = 0; i < CARDS_AMOUNT; i++) {
  renderMarkup(`beforeend`, tasksContainer, getCardTemplate());
}
