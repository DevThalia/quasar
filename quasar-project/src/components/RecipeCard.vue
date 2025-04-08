<template>
    <q-card class="my-card">
        <q-card-section>
            <div class="row items-center q-gutter-sm">
                <q-avatar>
                    <img :src="recipe.image" />
                </q-avatar>
                <div>
                    <div class="text-h6">{{ recipe.name }}</div>
                    <div class="text-caption text-grey">{{ recipe.category }}</div>
                </div>
            </div>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn label="Veure" @click="$emit('view', recipe.id)" />
        </q-card-actions>
    </q-card>
</template>

<script setup>
defineProps(['recipe'])
defineEmits(['view'])
</script>
