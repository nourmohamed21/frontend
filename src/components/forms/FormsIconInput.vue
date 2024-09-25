<template>
    <div class="mui-container">
        <input 
            :id="id"
            :type="type"
            :placeholder="placeholder"
            class="mui-input  text-center form-control"
            v-model="inputValue"
            />
        <label v-if="label" :for="id" class="text-field__label">{{ label }}</label>
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
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        inputValue: this.value
      };
    },
    watch: {
      inputValue(newValue) {
        this.$emit('input', newValue);
      }
    }
  };
  </script>
  
  <style scoped>
  .mui-container {
	position: relative;
	/* margin: 20px; */
  }

  .mui-container input {
	width: 100%;
	padding: 10px 14px;
	border: 1px solid #000;
	border-radius: 4px;
	box-sizing: border-box;
	font-size: 20px;
	border: none;
	outline: none;
	/* background: transparent; */
  }

  .mui-container label {
	position: absolute;
	top: 10px;
	right: 10px;
	background: transparent;
	padding: 0 5px;
	color: #000;
	/* font-size: 18px; */
	pointer-events: none;
	transition: 0.2s ease all;
  }

  .mui-container input:focus ~ label,
  .mui-container input:not(:placeholder-shown) ~ label {
	top: -12px;
	right: 12px;
	color: #000;
	border: none;
  }
  

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
  