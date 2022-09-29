import favicon from '../resources/favicon/favicon.ico';

function createFavicon() {
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = favicon;
  link.type = 'image/x-icon';
  head.append(link);
}

createFavicon();
