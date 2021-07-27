<template>
  <div class="basket" :class="{active: this.$parent.basketVisible}">
    <div class="basket_bg" @click="basketClose()"></div>

    <div class="basket_block">
      <div class="basket_block_header">
        <div class="basket_block_header_title">Корзина</div>
        <div class="basket_block_header_close" @click="basketClose()"></div>
      </div>
      <div v-if="this.$store.state.basketCounter > 0">
        <div class="basket_block_subtitle">
          Товары в корзине
        </div>
        <div class="basket_block_list">
          <ItemInBasket v-for="(basketProduct, id) in this.$store.state.basketProducts" :key="id" :basketProduct="basketProduct" />
        </div>
      <div class="basket_block_form">
        <BasketForm />
      </div>
      </div>
      <div v-else-if="this.activeOkMsg === true" class="basket_block_ok">
        <div class="basket_block_ok_msg">
          <img src="/ok.png" alt="ok">
          <div class="basket_block_ok_msg_title">Заявка успешно отправлена</div>
          <div class="basket_block_ok_msg_subtitle">Вскоре наш менеджер свяжется с Вами</div>
        </div>
      </div>
      <div v-else>
        <div class="basket_block_empty">Пока что вы ничего не добавили в корзину.</div>
        <button type="submit" @click="basketClose()" class="basket_btn">Перейти к выбору</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
    activeOkMsg: false,
    };
  },
  methods: {
    basketClose() {
      this.$parent.basketVisible = false;
      document.body.classList.remove('overflow_hidden');
      this.activeOkMsg = false;
    }
  }
}
</script>
