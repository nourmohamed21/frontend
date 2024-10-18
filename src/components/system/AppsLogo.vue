<template>
    <img :src="'/public/images/System/Runs/'+imageComputed" :height="height" :width="width">
</template>
<script>
export default {
    name: 'AppsLogo',
    props: {
      height: {
        type: String,
        default: 'auto'
      },
      width: {
        type: String,
        default: 'auto'
      },
      image:{
         type: String,
        default: 'default.webp'
      }
    },
    computed:{
      imageComputed() {
        return this.image == null ? 'default.webp' : this.image;
      }
    }
}
</script>