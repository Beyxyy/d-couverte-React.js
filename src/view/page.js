import React from 'react';

function getForm() {
  event.preventDefault();
  let form = document.querySelector('#form_recette');
  console.log(form.elements);
  let recette_array = Array.from(form.elements);
  console.log(recette_array);
  let recette_storage = {};
  recette_array.forEach((e) => {
    console.log(e.getAttribute('name'));
    recette_storage[e.getAttribute('name')=e.value];
    console.log(recette_storage);
  });
}

const PageComponent = () => {
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
        <input type="submit" onClick={getForm} />
      </form>
    </div>
  );
};

export default PageComponent;
