<template>
    <div class="q-pa-md" style="background-color: #f5f3e7; min-height: 100vh">
        <div class="q-pa-lg q-mx-auto"
            style="max-width: 500px; background-color: #fff8e1; border-radius: 20px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)">
            <h2 class="text-h5 text-center text-brown-10 q-mb-lg">Afegir nova recepta</h2>
            <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
                <q-input v-model="form.name" label="Nom" filled color="brown" />
                <q-input v-model="form.description" label="Descripció" type="textarea" filled color="brown" />
                <q-input v-model="form.image" label="URL d’imatge" filled color="brown" />
                <q-select v-model="form.category" label="Categoria" :options="categories" filled color="brown" />
                <q-btn type="submit" label="Guardar" color="brown" class="full-width" unelevated
                    style="border-radius: 10px" />
            </q-form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { addRecipe } from 'src/services/api'
import { useRouter } from 'vue-router'

const form = ref({
    name: '',
    description: '',
    image: '',
    category: ''
})

const categories = ['Pasta', 'Vegetarià', 'Postres', 'Carn']
const router = useRouter()

async function handleSubmit() {
    await addRecipe(form.value)
    router.push('/recipes')
}
</script>
