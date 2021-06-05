import apiService from './apiService';
import { error, alert } from './notification';
import {
  updateLi_item_Markup,
  cleanMarkupBefore,
  hideBtnLoadMore,
} from './updateMarkup';
import refs from './refs';

refs.searcForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.search = form.elements.query.value;
  cleanMarkupBefore();
  form.reset();

  apiService.resetPage();
  apiService.getResourse().then(data => {
    const mach = data.hits.length;
    if (mach === 0) {
      error(`На Ваш запрос
      ${apiService.search}
      найдено ${mach} 
      картинок`);
      hideBtnLoadMore();
      return;
    }

    alert({
      text: `Ваш запрос ${apiService.search}  
      обработан успешно!
      Найдено
      ${data.total} картинок`,
      hide: true,
      delay: 3500,
    });
    updateLi_item_Markup(data);

    if (mach < 12) {
      hideBtnLoadMore();
    }
  });
});

refs.loadMore.addEventListener('click', e => {
  
  apiService.getResourse().then(data => {
    const mach = data.hits.length;
    alert({
      text: `Ваш запрос ${apiService.search}  
      обработан успешно`,
      hide: true,
      delay: 2500,
    });

    updateLi_item_Markup(data);
    e.target.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    });
    
    if (mach < 12) {
      error(`На Ваш запрос
      ${apiService.search}
      больше картинок нет `);
      hideBtnLoadMore();
    }
  });
});

