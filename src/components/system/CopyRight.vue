<template>
    <p style="font-size: medium;
     text-shadow: 
                1px 1px 0 rgba(0, 0, 0, 0.47), /* Top-left */
                 1px 1px 0 rgba(0, 0, 0, 0.47), /* Top-right */
                1px  1px 0 rgba(0, 0, 0, 0.47), /* Bottom-left */
                 1px  1px 0 rgba(0, 0, 0, 0.47); /* Bottom-right */" class="text-light"><img src="!/images/System/loader.png" style="height: 4vh;"> Copyright ©
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