<template>
    <p style="color: #9b9b9b;font-size: medium;"><img src="!/images/System/icon.ico" style="height: 5vh;"> Copyright ©
        {{ currentYear }} | <b> ITEX System </b></p>
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