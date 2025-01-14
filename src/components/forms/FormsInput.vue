<template>
  <div class="mui-container mb-3">
    <input :type="type" :placeholder="placeholder" class="mui-input  text-center form-control blurred-box"
      v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <label v-if="label" class="text-field__label text-light">{{ label }}</label>
  </div>
</template>

<script>
export default {

  name: 'FormsInput',
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },

    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  inheritAttrs: false, // Ensures $attrs are applied only to the input
};
</script>

<style scoped>
.mui-container {
  position: relative;
  /* margin: 20px; */
}

.mui-container input {
  width: 100%;
  /* padding: 10px 14px; */
  /* border: 1px solid #000; */
  border-radius: 4px;
  box-sizing: border-box;
  /* font-size: 20px; */
  /* border: none; */
  outline: none;
  /* background: transparent; */
}

.dark-skin .mui-container input::placeholder {
  color: #ffffff51;
  font-size: large;
  transition: color 0.2s ease; /* Optional smooth transition */
}

.light-skin .mui-container input::placeholder {
  color: #2a2a2a51;
  font-size: smaller;
  transition: color 0.2s ease; /* Optional smooth transition */
}
.mui-container input:focus::placeholder {
  /* color: #fff ; */
  opacity: 0;
}


.mui-container label {
  position: absolute;
  top: 10px;
  right: 10px;
  /* background: white; */
  padding: 0 5px;
  color: #000;
  /* font-size: 18px; */
  pointer-events: none;
  border-radius: 1rem;
  transition: 0.2s ease all;
}

.mui-container input:focus~label,
.mui-container input:not(:placeholder-shown)~label {
  top: -25px;
  right: 0%;
  /* color: #000; */
  border: none;
}

/* .mui-container input:focus{
    border-top: none;
  } */

.mui-container .currency {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
  color: #000;
  pointer-events: none;
}

.mui-container input.mui-input {
  padding-right: 30px;
}
</style>