import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {
    name:"",
    cuisine:"",
    photo: "",
    ingredients: "",
    preparation: "",
  }
    // Add the required submit and change handlers.
  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  // When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  // Add the required input and textarea form elements.
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                <input 
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  />
              </label>
            </td>
            <td>
              <label>
                <input 
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  />
              </label>
            </td>
            <td>
               <label>
                <input 
                  id="photo"
                  type="text"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                  />
              </label>  
            </td>
            <td>
               <label>
                <textarea 
                  id="ingredients"
                  type="textarea"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  />
              </label>  
            </td>
            <td>
               <label>
                <textarea 
                  id="preparation"
                  type="textarea"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  />
              </label>  
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
