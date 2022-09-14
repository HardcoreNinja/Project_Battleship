import '../style/style.css';

function test() {
  const content = document.getElementById('content');

  content.innerHTML = 'Hello';
  content.classList.add('hello');
}

test();
