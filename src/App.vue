<template>
  
  <div id="app">
    <PageLoader></PageLoader>
    <router-view class="fadeIn animated" />
  </div>
</template>

<script>
import PageLoader from '@/components/system/PageLoader.vue'
export default {
  components:{
    PageLoader,
  },
  setup() {
    // useLoaderStore().showLoader();
    // Loader.showLoader();
    document.body.classList.add( 'light-skin','theme-primary','theme-sky');
  },
  name: 'App'
};
</script>
