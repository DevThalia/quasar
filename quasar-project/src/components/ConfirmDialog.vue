<template>
    <q-dialog v-model="model">
        <q-card>
            <q-card-section class="text-h6">Confirmes eliminar?</q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Cancel·lar" v-close-popup />
                <q-btn flat label="Eliminar" color="red" @click="confirm" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
const model = defineModel()
const emit = defineEmits(['confirm'])

function confirm() {
    model.value = false
    emit('confirm')
}
</script>
