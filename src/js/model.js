import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE, DEFAULT_PAGE } from './config';
import { getJSON } from './helpers';


//State
export const state = {
    recipe: {},
    search: {
      query: '',
      results: [],
      resultsPerPage: RESULTS_PER_PAGE,
      page: DEFAULT_PAGE
    }
}

//TODO: Fetch recipe data from the forkify API
export const loadRecipe = async function(id) {

  try {

    const data = await getJSON(`${API_URL}${id}`)

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

//TODO: Fetch searched recipe data from the forkify api

export const loadSearchResults = async function(query) {
  try {
    //Push Query to State
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        sourceUrl: rec.source_url,
        image: rec.image_url
      }
    })

  } catch (error) {
    throw error;
  }
}

//TODO: Pagination 
export const getSearchResultPage = function(page = state.search.page) {
  state.search.page = page

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
}