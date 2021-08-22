import View from './View.js';

class ResultView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'Recipe could not be found. Please try another recipe!';
    _message = '';


    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).slice('1').join('');
    }

    _generateMarkupPreview(result) {
        return `
        <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
        </li>
        `
    }
}

export default new ResultView();