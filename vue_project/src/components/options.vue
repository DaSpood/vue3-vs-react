<script> // Sans `setup`, qui serait une balise a part
export default {
    // props
    props: {
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
    },

    // reactive state, exposed on `this`
    data() {
        return {
            count: 0
        };
    },

    // functions that mutate state and trigger updates
    methods: {
        increment() {
            this.count++;
        }
    },

    // watchers that react to state updates
    watch: {
        count(newCount, oldCount) {
            console.log(`Count updated from ${oldCount} to ${newCount}`);
        }
    },

    // lifecycle hooks
    mounted() {
        console.log(`The initial count is ${this.count}.`);
    }
};
</script>

<template>
    <button @click="increment">Count is: {{ count }}</button>
</template>
