<template>
    <div class="q-pa-xl bg-khaki flex flex-center column items-center text-center" v-if="recipe">
        <q-card class="q-mb-xl" flat bordered>
            <q-img src="/images/logo.png" alt="Recepta" />
            <template v-slot:caption>
                <q-card-actions class="bg-khaki text-brown-10">
                    <q-btn label="Veure recepta" color="khaki-5" text-color="black" flat unelevated />
                </q-card-actions>
            </template>
            <q-card-section>
                <div v-if="!editing">
                    <h3 class="text-h5 text-brown-10 q-mb-md">{{ recipe.name }}</h3>
                    <p class="text-brown-10">{{ recipe.description }}</p>
                </div>
                <div v-else>
                    <q-input v-model="editableRecipe.name" label="Nom" class="q-mb-sm" />
                    <q-input v-model="editableRecipe.description" label="Descripció" type="textarea" />
                </div>
                <p class="text-brown-10"><strong>Categoria:</strong> {{ recipe.category }}</p>
            </q-card-section>

            <q-card-actions align="around">
                <q-btn v-if="!editing" label="Editar recepta" icon="edit" color="brown" flat @click="enableEdit" />
                <q-btn v-else label="Desar canvis" icon="save" color="positive" flat @click="saveChanges" />
            </q-card-actions>
        </q-card>

        <q-btn label="Tornar a la llista" to="/recipes" color="khaki-5" text-color="black" class="q-mt-md" flat
            unelevated />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getRecipeById, updateRecipe } from 'src/services/api'

const route = useRoute()
const router = useRouter()
const recipe = ref(null)
const editableRecipe = ref({ name: '', description: '' })
const editing = ref(false)

onMounted(async () => {
    recipe.value = await getRecipeById(route.params.id)
    editableRecipe.value = { name: recipe.value.name, description: recipe.value.description }
})

function enableEdit() {
    editing.value = true
}

async function saveChanges() {
    const updated = {
        ...recipe.value,
        name: editableRecipe.value.name,
        description: editableRecipe.value.description
    }
    await updateRecipe(recipe.value.id, updated)
    recipe.value = updated
    editing.value = false
    router.push('/recipes')
}
</script>

<style scoped>
.bg-khaki {
    background-color: #f0e6c1;
}

.text-brown-10 {
    color: #4e342e;
}

.q-card {
    max-width: 400px;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.q-btn {
    font-weight: 600;
    font-size: 16px;
    border-radius: 12px;
}
</style>
