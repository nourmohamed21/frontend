<template>
  <div class="input-group">
    <div class="input-group-append">
      <span class="input-group-text"><i class="fa fa-search"></i></span>
    </div>
    <input
      type="text"
      class="form-control"
      v-model="inputValue"
      :placeholder="placeholder"
      aria-label="Search"
    />
 
  </div>
</template>

<script>
export default {
  name: 'FormsSearchInput',
  props: {
    placeholder: {
      type: String,
      default: 'بحث',
    },
    modelValue: {
      type: String,
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
  },
};
</script>
