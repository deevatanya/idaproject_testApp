<template>
  <div>
    <Basket />
    <Header />
    <Subheader :products="products" />
    <div class="container">
      <Menu />
      <div class="item_list">
        <Item v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      products: [],
      storeProducts: [],
      basketVisible: false,
      overflowHidden: false,
    };
  },
  mounted() {
    this.$axios.get('/api/product').then(res => {
      this.products = res.data.filter(product => product.category === 1);
      this.storeProducts = res.data;
    });
  },
};
</script>
