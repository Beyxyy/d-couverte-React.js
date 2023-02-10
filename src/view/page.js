import React, { useState } from 'react';

const PageComponent = () => {
  const [recipes, setRecipe] = useState(
    JSON.parse(localStorage.getItem('recette')) || []
  );

  function getForm(event) {
    event.preventDefault();

    let form = document.querySelector('#form_recette');
    console.log(form.elements);
    let recette_array = Array.from(form.elements);
    console.log(recette_array);
    let recette_storage = {};
    recette_array.forEach((e) => {
      // console.log(e.getAttribute('name'));
      // console.log(e.values);
      recette_storage[e.getAttribute('name')] = e.value;
    });
    localStorage.setItem(
      'recette',
      JSON.stringify([...recipes, recette_storage])
    );
    console.log();
  }
  return (
    <div>
      <h1>Page test 1</h1>
      <p>en gros je fais un test</p>

      <form id="form_recette">
        <label>
          url img recette
          <input name="img" type="text" />
        </label>
        <label>
          description
          <input name="description" type="text" />
        </label>
        <label>
          titre
          <input name="titre" type="text" />
        </label>
        <input type="submit" name="valid" onClick={getForm} />
      </form>
    </div>
  );
};

export default PageComponent;
