'use strict';

const tree = document.querySelectorAll('ul')[0];

tree.addEventListener('click', (event) => {
  let target = event.target;

  if (target.tagName != 'SPAN') {
    return;
  }

  const li = target.parentNode;
  const childrenContainer = li.querySelectorAll('ul')[0];

  if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
});