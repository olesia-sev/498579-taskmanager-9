import {getEditCardTemplate} from './card-editing.js';

export const getTasksContainerTemplate = () => {
  return `
  <div class="board__tasks">
    ${getEditCardTemplate()}
  </div>`;
};
