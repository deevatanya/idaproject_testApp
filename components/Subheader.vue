<template>
  <div class="subheader">
    <div class="subheader_title">Каталог</div>
    <div class="sort">
      <div class="sort_title" @click="optionVisible = !optionVisible">
          Сортировать по:
          <div class="sort_title_value" ref="sortValue"> </div>
          <div class="sort_title_img">
            <img src="/Vector.png" alt="vector" />
          </div>
      </div>
      <div class="sort_option" :class="{ active: optionVisible }">
          <div class="sort_option_value" @click="onSort($event)">По цене</div>
          <div class="sort_option_value"  @click="onSort($event)">По популярности</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      optionVisible: false,
    };
  },
  methods: {
    onSort({ target }) {
      if (target.innerHTML === 'По цене') {
      console.log(this.$refs.sortValue, target);
      this.$props.products.sort((a, b) => a.price - b.price)
      this.$refs.sortValue.textContent = 'цене'
      } else {
        this.$props.products.sort((a, b) => b.rating - a.rating)
        this.$refs.sortValue.textContent = 'популярности'
      }
      this.optionVisible = !this.optionVisible
    },
  },
  props: ['products'],
};
</script>
