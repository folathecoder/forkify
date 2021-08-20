import * as model from './model.js';
import recipeView from './views/recipeView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


//TODO: Fetch Recipe From Endpoint

const controlRecipes = async function () {

  try {
    //Extract the hash
    const id = window.location.hash.slice(1);

    //If the id does not contain any value
    if(!id) return;

    //Load spinner
    recipeView.renderSpinner();

    // Load recipe *****
    await model.loadRecipe(id);

    //Render the recipe data to the frontend 
    recipeView.render(model.state.recipe);

    //Rename the properties
  } catch (error) {
    alert(error);
  }
}

//TODO: Listen for hashchange
window.addEventListener('hashchange', controlRecipes );
//TODO: Listen for load
window.addEventListener('load', controlRecipes );