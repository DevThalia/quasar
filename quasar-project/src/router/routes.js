import HomePage from 'pages/HomePage.vue'
import RecipesList from 'pages/RecipesList.vue'
import RecipeDetail from 'pages/RecipeDetail.vue'
import AddRecipe from 'pages/AddRecipe.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/recipes', component: RecipesList },
  { path: '/recipes/:id', component: RecipeDetail },
  { path: '/add', component: AddRecipe },
]

export default routes
