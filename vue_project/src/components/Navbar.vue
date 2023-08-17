<script setup>

</script>

<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
                <RouterLink to="/table">Tableau</RouterLink>
            </li>
            <li>
                <RouterLink to="/popup">Popup</RouterLink>
            </li>
            <li>
                <RouterLink to="/form">Formulaire</RouterLink>
            </li>
            <li>
                <RouterLink to="/broken">CSS</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    height: 100%;
    width: 100%;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #04AA6D;
}
</style>
