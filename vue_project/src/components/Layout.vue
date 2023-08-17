<script setup>
import { RouterView } from "vue-router";
import Navbar from "./Navbar.vue";
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    width: 100%;
}

main {
    margin-top: 48px;
    padding: 20px;
    height: fit-content;
    width: 100%;
}
</style>
