<template>
    <div class="q-pa-md">
        <q-input v-model="search" label="Buscar recepta..." />
        <q-select v-model="category" :options="categories" label="Categoria" />

        <q-table :rows="filteredRecipes" :columns="columns" row-key="id" flat bordered />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getRecipes } from 'src/services/api'

const search = ref('')
const category = ref(null)
const categories = ref(['Totes', 'Postres', 'Vegetarià', 'Carn'])

const recipes = ref([])
const columns = [
    { name: 'name', label: 'Nom', field: 'name' },
    { name: 'category', label: 'Categoria', field: 'category' }
]

onMounted(async () => {
    recipes.value = await getRecipes()
})

const filteredRecipes = computed(() =>
    recipes.value.filter(recipe =>
        recipe.name.toLowerCase().includes(search.value.toLowerCase()) &&
        (category.value === null || recipe.category === category.value)
    )
)
</script>
