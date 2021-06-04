import { error } from './notification';
export default {
  page: 1,
  search: '',
  per_page: 12,
  APIkey: '21940739-fa6d5cf07b3c939bed8b17dc2',
  baseURL: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q',
  async getResourse() {
    try {
      const responce = await fetch(
        `${this.baseURL}=${this.search}&page=${this.page}&per_page=${this.per_page}&key=${this.APIkey}`,
      );
      this.page += 1;

      return await responce.json();
    } catch (err) {
      throw error({
        text: `Ошибка по ${this.search} статус${responce.status}`,
        hide: true,
        delay: 3000,
      });
    }
  },
  resetPage() {
    this.page = 1;
  },
};
