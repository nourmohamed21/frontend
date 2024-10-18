<template>
  <div class="search-bar blurred-box">
    <span class="search-icon">
      <i class="fa fa-search ml-2"></i>
    </span>
    <input 
      type="text" 
      :placeholder="placeholder" 
      v-model="inputValue" 
    />
  </div>
</template>

<script>
export default {
  name: 'FormsSearchInput',
  props: {
    placeholder: {
      type: String,
      default: 'بحث', // Arabic for "Search"
    },
    modelValue: {
      required: true,
    },
  },
  data() {
    return {
      inputValue: this.modelValue, // Sync with modelValue prop
    };
  },
  watch: {
    inputValue(newVal) {
      this.$emit('update:modelValue', newVal); // Emit updated value for v-model
    },
    modelValue(newVal) {
      this.inputValue = newVal; // Sync prop with data
    }
  }
};
</script>

<style scoped>
.search-bar {
  border-radius: 50px;
  background-color: #eef2ff;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.search-bar input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  padding-left: 10px;
  color: #000; /* Ensure text is visible */
}

.search-bar input::placeholder {
  color: #888888; /* Light grey color for placeholder */
}

.search-bar .search-icon {
  color: #888888;
  font-size: 18px;
}
</style>
