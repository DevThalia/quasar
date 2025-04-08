<template>
    <q-tabs v-model="tab" class="text-teal">
        <q-tab name="ingredients" label="Ingredients" />
        <q-tab name="steps" label="Passos" />
    </q-tabs>

    <q-tab-panels v-model="tab">
        <q-tab-panel name="ingredients">...</q-tab-panel>
        <q-tab-panel name="steps">...</q-tab-panel>
    </q-tab-panels>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('ingredients')
</script>
