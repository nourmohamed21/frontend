<template>
<button type="button" class="btn neon-button"  ><slot></slot></button>
</template>
<script>
  export default {
    inheritAttrs:true,
  };
</script>
  <style scoped>

  
  .neon-button {
    /* padding: 15px 30px; */
    /* font-size: 18px; */
    font-weight: bold;
    color: #fff;
    background: transparent;
    border: 2px solid #34aebd;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .neon-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(90deg, #34aebd, transparent, #34aebd); */
    opacity: 0.6;
    filter: blur(5px);
    z-index: -1;
    transition: all 0.3s ease;
    border-radius: 5px;
  }
  
  .neon-button:hover::before {
    opacity: 1;
    animation: neonGlow 1.5s infinite;
  }
  
  .neon-button:hover {
    background: #34aebd;
    box-shadow: 0 0 20px #34aebd, 0 0 40px #34aebd, 0 0 60px #34aebd;
  }
  
  @keyframes neonGlow {
    0% {
      box-shadow: 0 0 10px #34aebd, 0 0 20px transparent, 0 0 30px #34aebd;
    }
    50% {
      box-shadow: 0 0 20px transparent, 0 0 30px #34aebd, 0 0 40px transparent;
    }
    100% {
      box-shadow: 0 0 10px #34aebd, 0 0 20px transparent, 0 0 30px #34aebd;
    }
  }
  </style>
  