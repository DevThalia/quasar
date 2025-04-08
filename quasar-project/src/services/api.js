import axios from 'axios'
const apiUrl = 'http://localhost:3000/recipes'

export const getRecipes = async () => (await axios.get(apiUrl)).data
export const getRecipeById = async (id) => (await axios.get(`${apiUrl}/${id}`)).data
export const addRecipe = async (recipe) => (await axios.post(apiUrl, recipe)).data
export async function updateRecipe(id, updatedData) {
  const res = await fetch(`http://localhost:3000/recipes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
  return await res.json()
}
export const deleteRecipe = async (id) => (await axios.delete(`${apiUrl}/${id}`)).data
