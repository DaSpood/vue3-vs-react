<script setup>
import { onMounted, ref, watch } from "vue";

// props
defineProps({
    propA: Number,
    propB: [String, Number],
    propC: {
        type: String,
        required: true
    },
    propD: {
        type: Number,
        default: 100
    },
    propE: {
        type: Object,
        default(rawProps) {
            return { message: 'hello' }
        }
    },
    propF: {
        validator(value) {
            return ['success', 'warning', 'danger'].includes(value)
        }
    },
    propG: {
        type: Function,
        default() {
            return 'Default function'
        }
    }
});

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
    count.value++;
}

// watchers that react to state updates
watch(count, async (newCount, oldCount) => {
    console.log(`Count updated from ${oldCount} to ${newCount}`);
});

// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
    <button @click="increment">Count is: {{ count }}</button>
</template>
