<template>
  <div class="calc-screen">
    <p>{{ shortValue }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    shortValue() {
      return this.value.length > 7 ? this.value.slice(-7) : this.value;
    }
  }
}
</script>