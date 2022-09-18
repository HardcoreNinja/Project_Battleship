const createDiv = () => document.createElement('div');

const createBoard = () => {
  const boardContainer = createDiv();
  boardContainer.setAttribute('id', 'boardContainer');
  return boardContainer;
};
// eslint-disable-next-line import/prefer-default-export
export { createDiv, createBoard };
