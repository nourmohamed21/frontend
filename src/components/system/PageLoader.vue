<template>
    <transition name="fade">
      <div
        class="loader-div "
        v-if="loaderStore.loadingRequests.length > 0"
      >
        <span class="loader">
          <img src="@/assets/logo.svg" alt="Vue.js Logo" class="loader-logo " />
        </span>
      </div>
    </transition>
  </template>
  
  <script>
  import { useLoaderStore } from '@/stores/loaderStore';
  
  export default {
    setup() {
      const loaderStore = useLoaderStore();
      return { loaderStore };
    },
  };
  </script>
  
  <style scoped>
  .loader-div {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 999999999;
    opacity: 1;
  }
  
  .loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 25vh;
  }
  
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
    will-change: transform, opacity; /* Helps with performance */
  }
  
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
  }
  
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }
  
  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #fff;
      opacity: 1;
    }
  
    50%,
    100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
    }
  }
  
  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
    }
  
    100% {
      box-shadow: 0 0 0 1rem #fff;
      opacity: 1;
    }
  }
  
  .loader-logo {
    width: 50%;
    height: 50%;
    z-index: 1;
    opacity: 0.7;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to /* .fade-leave-active in versions <2.1.8 */ {
    opacity: 0;
  }
  </style>
  