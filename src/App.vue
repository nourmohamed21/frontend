<template>
  
  <div id="app">
    <PageLoader></PageLoader>
    <router-view />
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'
export default {
  components:{
    PageLoader,
    
  },
  setup() {
    // useLoaderStore().showLoader();
    // Loader.showLoader();
  },
  name: 'App'
};
</script>
