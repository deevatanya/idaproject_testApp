<template>
  <div class="menu">
    <div
      class="menu_item"
      @click="onMenu(category.id, $event)"
      v-for="category in categories"
      :key="category.id"
      ref="menuItems"
      :class="{ 'active': category.id === 1 }"
      >
        {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      categories: [],
    };
  },
  mounted() {
      this.$axios.get('/api/product-category').then(res => {
      this.categories = res.data;
    });
  },
  methods: {
    onMenu(id, { target }) {
      this.$refs['menuItems'].forEach(el => el.classList.remove('active'))
      target.classList.add('active')
      this.$parent.products = this.$parent.storeProducts.filter(product => product.category === id)
    },
  },
}
</script>
