<template>
    <div class="blurred-box p-3 text-center">
        <img src="/public/images/System/maintenance.png"  >
        <h3>404</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentYear: null
        }
    },
    mounted() {
        this.getCurrentDate();
    },
    methods: {
        getCurrentDate() {
            const date = new Date();
            const options = { year: 'numeric' };
            this.currentYear = date.toLocaleDateString(undefined, options);
        },
    }
}
</script>