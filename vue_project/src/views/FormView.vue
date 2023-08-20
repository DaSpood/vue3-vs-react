<script setup>
import DataForm from "../components/DataForm.vue";
import { ref, watch } from "vue";

const submitted = ref({});
const submissionCount = ref(0);

watch(submitted, async (newValue, oldValue) => {
    if (submitted.value.firstname !== undefined
        && submitted.value.lastname !== undefined
        && submitted.value.age !== undefined) {
        submissionCount.value++;
    }
});
</script>

<template>
    <h1>Formulaire:</h1>
    <DataForm :onSubmit="(res) => submitted = res" />
    <h1>Donnees soumises:</h1>
    <p>Nom: {{ submitted.lastname }}</p>
    <p>Prenom: {{ submitted.firstname }}</p>
    <p>Age: {{ submitted.age }}</p>
    <p>Nombre de soumissions: {{ submissionCount }}</p>
</template>

<style scoped>

</style>
