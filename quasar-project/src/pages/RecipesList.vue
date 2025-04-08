<template>
    <div class="q-pa-xl bg-khaki flex flex-center column items-center text-center">
        <q-btn label="🏠 Tornar a l'inici" color="brown" icon="home" class="q-mb-lg" @click="router.push('/')"
            unelevated style="border-radius: 10px" />

        <h2 class="text-h4 text-brown-10 q-mb-md">Llista de receptes</h2>

        <q-input v-model="search" label="Buscar recepta..." class="q-mb-md text-brown-10" :dense="true" color="khaki-5"
            clearable />

        <q-table :rows="filtered" :columns="columns" row-key="id" flat bordered>
            <template v-slot:body-cell-name="props">
                <q-td>
                    <q-btn flat @click="goToDetail(props.row.id)" class="text-brown-10">
                        {{ props.row.name }}
                    </q-btn>
                </q-td>
            </template>

            <template v-slot:body-cell-actions="props">
                <q-td>
                    <q-btn icon="delete" color="red" @click="removeRecipe(props.row.id)" class="q-mr-xs" />
                </q-td>
            </template>
        </q-table>
    </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { getRecipes, deleteRecipe } from 'src/services/api'
import { useRouter } from 'vue-router'

const search = ref('')
const recipes = ref([])
const router = useRouter()

onMounted(async () => {
    recipes.value = await getRecipes()
})

const filtered = computed(() => {
    return recipes.value.filter(r =>
        r.name.toLowerCase().includes(search.value.toLowerCase())
    )
})

const columns = [
    { name: 'name', label: 'Nom', field: 'name' },
    { name: 'category', label: 'Categoria', field: 'category' },
    { name: 'actions', label: 'Accions' }
]

function goToDetail(id) {
    router.push(`/recipes/${id}`)
}

async function removeRecipe(id) {
    await deleteRecipe(id)
    recipes.value = await getRecipes()
}
</script>

<style scoped>
.bg-khaki {
    background-color: #f0e6c1;
}

.text-brown-10 {
    color: #4e342e;
}

.q-btn {
    font-weight: 600;
    font-size: 16px;
    border-radius: 12px;
}
</style>
