import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(
      (this._data.results.length + 1) / this._data.resultsPerPage
    );
    console.log(numPages);

    //Page 1, there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
            <button class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `;
    }
    //Last page
    if (curPage === numPages && numPages > 1) {
      return `
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
            `;
    }
    //Other pages
    if (curPage < numPages) {
      return `
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
            <button class="btn--inline pagination__btn--next">
                <spanPage ${curPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `;
    }
    //Page 1, there are no other pages
    return 'only 1 page';
  }
}

export default new PaginationView();
