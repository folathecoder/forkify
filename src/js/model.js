import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';


//State
export const state = {
    recipe: {}
}

//Fetch recipe data from the forkify API
export const loadRecipe = async function(id) {

  try {

    const data = await getJSON(`${API_URL}/${id}`)

    //Customize the properties in the recipe object
    const {recipe} = data.data;

    //Re-assign properties and push to the state object
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };

    // console.log(state.recipe); 
  } catch (error) {
    throw error;
  }
}

console.log(state);