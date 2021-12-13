<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- Process -->
    <div class="m-5" v-if="!order.is_paid">
      <div class="d-flex justify-content-around pt-2">
        <h5 class="">STEP 01</h5>
        <h5 class="">STEP 02</h5>
        <h5 class="">STEP 03</h5>
      </div>
      <div class="progress" style="height: 15px">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style="width: 100%"
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

    <!-- paysuccess -->
    <h5 class="text-center" v-if="order.is_paid">
      <i class="fas fa-clipboard-check fa-2x m-5 text-secondary center"
        >付款完成</i
      >
    </h5>

    <div class="my-5 row justify-content-center">
      <form class="col-md-8" @submit.prevent="payOrder">
        <table class="table">
          <thead>
            <th class="col-8 text-center">品名</th>
            <th class="col-2 text-center">數量</th>
            <th class="col-2 text-center">單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle text-right">{{ item.qty }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-danger">確認付款</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.order = response.data.order;
        console.log(response);
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response.data.success) {
          vm.$bus.$emit("cart:num");
          vm.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
  },
};
</script>