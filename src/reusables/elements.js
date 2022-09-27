function closeModal() {
  this.style.display = 'none';
}

function blockShipBoard(gridStart, gridEnd) {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.background = 'transparent';
  overlay.style.gridRowStart = gridStart;
  overlay.style.gridRowEnd = gridEnd;
}
const createH1 = (text) => {
  const h1 = document.createElement('h1');
  h1.innerHTML = text;
  return h1;
};
const createDiv = () => document.createElement('div');
const createButton = () => document.createElement('button');
const createModal = (text) => {
  const content = document.getElementById('content');
  const bg = createDiv();
  bg.setAttribute('id', 'bgOverlay');

  const modal = createDiv();
  modal.setAttribute('id', 'modal');
  const h1 = createH1(text);
  h1.style.textAlign = 'center';
  modal.append(h1);
  bg.append(modal);
  bg.addEventListener('mousedown', closeModal);
  content.append(bg);
};
const createIcon = (iconName) => {
  const span = document.createElement('span');
  span.classList.add('material-icons');
  span.innerHTML = iconName;
  return span;
};

const createSymbol = (symbolName) => {
  const span = document.createElement('span');
  span.classList.add('material-symbols-outlined');
  span.innerHTML = symbolName;
  return span;
};

export {
  createDiv, createButton, createModal, blockShipBoard, createIcon, createSymbol, createH1,
};
