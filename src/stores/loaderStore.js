// stores/loaderStore.js
import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    // isLoading: false,
    loadingRequests:[],
  }),
  actions: {
    add(name){
      this.loadingRequests.push(name);
    },
    remove(name){
      this.loadingRequests = this.loadingRequests.filter(request => request !== name);
    }
  }
});
