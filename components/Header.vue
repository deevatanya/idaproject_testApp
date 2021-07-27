<template>
  <div class="header">
    <div class="header_name">TestList</div>
    <div class="header_cart" @click="basketActive">
      <div class="header_cart_count">{{ this.$store.state.basketCounter }}</div>
      <img src="/cart.svg" alt="shopping cart">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    basketActive() {
      this.$parent.basketVisible = !this.$parent.basketVisible;
      document.body.classList.add('overflow_hidden');
    },
  }
}
</script>
