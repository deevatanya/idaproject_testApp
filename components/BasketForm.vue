<template>
  <div>
    <form class="basket_form" @submit.prevent="onSubmit()"  >
      <div class="basket_form_title">Оформить заказ</div>
      <input type="text" v-model="userName" placeholder="Ваше имя" required>
      <masked-input mask="\+\7 (111) 111-11-11" v-model="phone" placeholder="Телефон" required />
      <input type="text" v-model="address" placeholder="Адрес" required>
      <button type="submit" class="basket_btn">Отправить</button>
    </form>

  </div>
</template>

<script>
import MaskedInput from 'vue-masked-input';
export default {
  data: function () {
    return {
    userName: null,
    phone: null,
    address: null,
    };
  },
  components: {
    MaskedInput,
  },
  methods: {
    onSubmit() {
      let info = {
        name: this.userName,
        phone: this.phone,
        address: this.address,
        products: this.$store.state.basketProducts,
      };
      this.$store.commit('addOrder', info);

      this.$parent.activeOkMsg = true;
    }
  }
}
</script>

