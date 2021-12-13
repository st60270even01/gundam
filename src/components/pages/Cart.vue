<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- Progress -->
    <div class="m-5">
      <div class="d-flex justify-content-around pt-2">
        <h5 class="">STEP 01</h5>
        <h5 class="">STEP 02</h5>
        <h5 class="">STEP 03</h5>
      </div>
      <div class="progress" style="height: 15px">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 33%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex justify-content-around pt-2">
        <h6 class="">購物清單</h6>
        <h6 class="">填寫資料</h6>
        <h6 class="">結帳付款</h6>
      </div>
    </div>

    <div class="py-5" v-if="cart.carts.length == 0">
      <h2 class="text-center">
        您的購物車還是空的，快去<router-link
          class="text-decoration-none font-weight-bold"
          to="/index/shop"
          >選購</router-link
        >吧!
      </h2>
    </div>

    <!-- Cart -->
    <div v-if="cart.carts.length !== 0">
      <h3 class="text-center pt-5">購物清單</h3>
      <div class="my-5 row justify-content-center container m-auto">
        <div class="my-3 mx-1 row justify-content-center">
          <table class="table">
            <thead>
              <th class="col-2"></th>
              <th class="col-6">品名</th>
              <th class="col-2">數量</th>
              <th class="col-2">單價</th>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="romoveCartItem(item.id)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="align-middle text-right">
                  {{ item.qty }}
                </td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>

          <div class="col-12">
            <div class="input-group mb-3 input-group-sm">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="coupon_code"
              />
              <div class="input-group-append" v-if="!coupon_status">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  @click="addCouponCode"
                >
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex">
              <router-link
                class="btn btn-outline-secondary btn-sm"
                to="/index/shop"
                >繼續選購</router-link
              >
              <router-link
                class="btn btn-outline-primary btn-sm ml-auto"
                to="/index/checkout"
                v-if="cart.carts.length !== 0"
              >
                下一步
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="m-5">
      <h4>
        <ul>
          <li>不接急單 可接受下面規定再下單</li>
          <li>植株皆為裸根寄送（不附盆、不附土），避免運送過程壓傷，包裝運送過程可能有徒長、掉葉斷葉或掉粉現象介意者勿下標</li>
          <li>出貨需要3~5個工作天</li>
          <li>收件後若植株有問題，請與我們聯絡</li>
          <li>植株有時會缺貨，若缺貨會退款在包裹裡，不再另行通知</li>
          <li>缺貨、寄錯、漏寄商品皆直接退款不再補寄!</li>
        </ul>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {
        carts: [],
      },
      coupon_code: "",
      coupon_status: false,
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        console.log(response);
        vm.isLoading = false;
      });
    },
    romoveCartItem(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      const vm = this;
      this.$http.delete(api).then((response) => {
        vm.getCart();
        vm.$bus.$emit("cart:num");
        console.log(response);
      });
    },
    addCouponCode() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((response) => {
        vm.coupon_status = true;
        vm.getCart();
        console.log(response);
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>