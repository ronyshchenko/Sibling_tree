'use strict';

let treeUl = document.getElementsByTagName('ul')[0];
let treeLis = treeUl.getElementsByTagName('li');

for (let i = 0; i < treeLis.length; i++) {
  let li = treeLis[i];
  let span = document.createElement('span');
  
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

let tree = document.getElementsByTagName('ul')[0];

tree.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'SPAN') {
    return; // клик был не на заголовке
  }

  let li = target.parentNode; // получить родительский LI
  let childrenContainer = li.getElementsByTagName('ul')[0];

  if (!childrenContainer) return; // потомков нет -- ничего не надо делать
  childrenContainer.hidden = !childrenContainer.hidden;
}