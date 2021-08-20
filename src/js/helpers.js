//Functions that should be constant and re-used across the project 
//This will allow us to easily change the data without diggin through all the project file

import { TIMEOUT_SEC } from './config.js';

//TODO: Timeout Function: This will prevent the fetch process the from running indefinitely incase of network error
// A timeout function will set a fixed time for a fetch to occur before triggering a rejection

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
};

export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await res.json();
    
        //Custom Error 
        if (!res.ok) throw new Error(`${recipe.status} 🤦‍♂️ Recipe data could not be fetched from the server. Please try again later!`)

        return data;
    } catch (error) {
        alert(error);
    }
}