import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultsView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//TODO: Activate Hot Module

// if(module.hot) {
//   module.hot.accept();
// }

//TODO: Fetch Individual Recipe From Endpoint

const controlRecipes = async function () {
  try {
    //Extract the hash
    const id = window.location.hash.slice(1);
 
    //If the id does not contain any value
    if (!id) return;

    //Load spinner
    recipeView.renderSpinner();

    // Load recipe *****
    await model.loadRecipe(id);

    //Render the recipe data to the frontend
    recipeView.render(model.state.recipe);

    //Rename the properties
  } catch (error) {
    recipeView.renderError();
  }
};

//TODO: Fetch Search Recipe From Endpoint

const controlSearchResults = async function() {
  try {
    resultView.renderSpinner();

    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultPage(3));

    paginationView.render(model.state.search);

  } catch (error) {
    console.log(error)
  }
}


//TODO: SUBSCRIBER FUNCTION
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();