import li_itemTPL from '../templates/li_item.hbs';
import refs from './refs.js';

function updateLi_item_Markup(data) {
  const markup = li_itemTPL(data);
  refs.galleryUl.insertAdjacentHTML('beforeend', markup);

  showBtnLoadMore();
}

function showBtnLoadMore() {
  refs.loadMore.classList.remove('not_visible');
}

function hideBtnLoadMore() {
  refs.loadMore.classList.add('not_visible');
}

function cleanMarkupBefore() {
  refs.galleryUl.innerHTML = '';
}

export { updateLi_item_Markup, cleanMarkupBefore, hideBtnLoadMore };
