function closeModal() {
  this.style.display = 'none';
}

const createDiv = () => document.createElement('div');
const createButton = () => document.createElement('button');
const createModal = (text) => {
  const content = document.getElementById('content');
  const bg = createDiv();
  bg.setAttribute('id', 'bgOverlay');

  const modal = createDiv();
  modal.setAttribute('id', 'modal');
  modal.innerHTML = text;
  bg.append(modal);
  bg.addEventListener('mousedown', closeModal);
  content.append(bg);
};

export { createDiv, createButton, createModal };
