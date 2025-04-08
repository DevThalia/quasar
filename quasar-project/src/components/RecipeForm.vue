<template>
    <q-form @submit="handleSubmit">
        <q-input v-model="form.name" label="Nom de la recepta" />
        <q-input v-model="form.description" label="Descripció" type="textarea" />
        <q-select v-model="form.category" :options="categories" label="Categoria" />
        <q-btn label="Guardar" type="submit" color="primary" />
    </q-form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['save'])

const categories = ['Postres', 'Vegetarià', 'Carn']

const form = ref({
    name: '',
    description: '',
    category: ''
})

function handleSubmit() {
    emit('save', { ...form.value })
    form.value = { name: '', description: '', category: '' }
}
</script>
