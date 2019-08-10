import {getSortFiltersTemplate} from './sort.js';
import {getTasksContainerTemplate} from './tasks-container.js';
import {getLoadMoreButtonTemplate} from './load-more-button';

export const getBoardContainerTemplate = () => {
  return `
    <section class="board container">
      ${getSortFiltersTemplate()}
      ${getTasksContainerTemplate()}
      ${getLoadMoreButtonTemplate()}
    </section>`;
};
