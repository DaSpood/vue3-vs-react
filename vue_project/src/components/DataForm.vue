<script setup>
import { ref } from "vue";

const props = defineProps(["onSubmit"]);

const firstname = ref("");
const lastname = ref("");
const age = ref(0);

const prepareSubmit = () => {
    if (firstname.value.trim() === "" || lastname.value.trim() === "" || age.value < 0) {
        alert("Invalide");
        return;
    }
    props.onSubmit({
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
    });
    firstname.value = "";
    lastname.value = "";
    age.value = 0;
}
</script>

<template>
    <label for="lastname-input">Nom: </label>
    <input type="text" id="lastname-input" v-model="lastname" />
    <br />
    <br />
    <label for="firstname-input">Prenom: </label>
    <input type="text" id="firstname-input" v-model="firstname" />
    <br />
    <br />
    <label for="age-input">Age: </label>
    <input type="number" id="age-input" v-model="age" />
    <br />
    <br />
    <button @click="() => prepareSubmit()">Envoyer</button>
</template>

<style scoped>

</style>
