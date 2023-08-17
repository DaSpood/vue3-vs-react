<script setup>
const props = defineProps({
    title: String,
    headers: {
        type: Array,
        required: true,
    },
    entries: {
        type: Array,
        required: true,
    },
});

function PropsValid() {
    if (!props.headers || !props.entries || !Array.isArray(props.headers) || !Array.isArray(props.entries)) {
        return false;
    }
    for (const entry of props.entries) {
        if (!entry || !Array.isArray(entry) || entry.length !== props.headers.length) {
            return false;
        }
    }
    return true;
}
</script>

<template>
    <div v-if="PropsValid()">
        <h3>{{ title && title.length > 0 ? title : "Sans titre" }}</h3>
        <table>
            <thead>
            <tr>
                <th v-for="header in headers">{{ header }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="entry in entries">
                <td v-for="cellContent in entry">{{ cellContent }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <h3 v-else>Props invalides</h3>
</template>

<style scoped>
table {
    width: 400px;
    border-collapse: collapse;
}

th, td {
    padding: 4px;
}

table, th, td {
    border: 1px solid;
}
</style>
