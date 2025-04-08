<template>
    <div class="q-pa-xl bg-khaki flex flex-center column items-center text-center">
        <h1 class="text-h4 text-brown-10 q-mb-md">Benvinguda al Recetari</h1>

        <q-btn label="🍲 Veure receptes" to="/recipes" color="brown-10" class="q-mb-sm q-px-xl" unelevated glossy />

        <q-btn label="➕ Afegir recepta" to="/add" color="khaki-5" text-color="black" class="q-px-xl" flat />
    </div>
</template>

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
