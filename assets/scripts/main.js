// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  return JSON.parse(localStorage.getItem('recipes'));
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO - Get a reference to the <main> element
  var mainref = document.querySelector('main');

  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  var rlength;
  if (recipes != null) {
    rlength = recipes.length;
  }
  else {
    rlength = 0;
  }

  for(var i = 0; i < rlength; i++) {
    var elem = document.createElement('recipe-card');
    elem.data = recipes[i];
    console.log(elem);
    mainref.append(elem);
  }
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {

  // B2. TODO - Get a reference to the <form> element
  var formRef = document.getElementsByName('new-recipe');

  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  document.addEventListener('submit', function(e) {

    e.preventDefault();
    // Steps B4-B9 will occur inside the event listener from step B3
    // B4. TODO - Create a new FormData object from the <form> element reference above
    var formData = new FormData();

    formData.append("imgSRC", formRef.elements[0].value);
    formData.append("imgAlt", formRef.elements[1].value);
    formData.append("titleTxt", formRef.elements[2].value);
    formData.append("titleLnk", formRef.elements[0].value);
    formData.append("imgSRC", formRef.elements[0].value);
    formData.append("rating", formRef.elements[0].value);
    formData.append("numRatings", formRef.elements[0].value);
    formData.append("organization", formRef.elements[0].value);
    formData.append("lengthTime", formRef.elements[0].value);
    formData.append("ingredients", formRef.elements[0].value);

    console.log(formRef.elements["imgSrc"].value);
    console.log(formData);

    // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
    //            make this easier to read), and then extract the keys and corresponding
    //            values from the FormData object and insert them into recipeObject
    var recipeObject = new Object();
    Object.assign(recipeObject, formData);


    // B6. TODO - Create a new <recipe-card> element
    var recipeElem = document.createElement('recipe-card');

    // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
    recipeElem.data = recipeObject;

    // B8. TODO - Append this new <recipe-card> to <main>
    document.querySelector('main').append(recipeElem);

    // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
    //            then save the recipes array back to localStorage
    var recipeArray = JSON.parse(localStorage.getItem('recipes'));
    recipeArray.push(recipeElem);
    console.log(recipeElem);
    saveRecipesToStorage(recipeArray);
  });

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  var buttonDelete = document.querySelector('button[type="button"]');

  // B11. TODO - Add a click event listener to clear local storage button
  buttonDelete.addEventListener("click", function() {
    // Steps B12 & B13 will occur inside the event listener from step B11
    // B12. TODO - Clear the local storage
    localStorage.clear();

    // B13. TODO - Delete the contents of <main>
    $('main').empty();
  });
}
