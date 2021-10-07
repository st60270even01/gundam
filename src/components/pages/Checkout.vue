<template>
  <div>
    <!-- Process -->
    <div class="my-5">
      <div class="progress" style="height: 15px">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 66%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex justify-content-around pt-2">
        <h5 class="">購物車</h5>
        <h5 class="">填寫資料</h5>
        <h5 class="">結帳付款</h5>
      </div>
    </div>

    <!-- checkout -->
    <div class="my-5 row justify-content-center">
      <validation-observer class="col-md-6" v-slot="{ invalid }">
        <form @submit.prevent="createOrder">
          <validation-provider
            rules="required|email"
            v-slot="{ errors, classes }"
          >
            <div class="form-group">
              <!-- 輸入框 -->
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                v-model="form.user.email"
                class="form-control"
                :class="classes"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ classes }">
            <div class="form-group">
              <!-- 輸入框 -->
              <label for="username">姓名</label>
              <input
                id="username"
                type="text"
                name="name"
                v-model="form.user.name"
                class="form-control"
                :class="classes"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">此為必填項目</span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ classes }">
            <div class="form-group">
              <!-- 輸入框 -->
              <label for="email">收件人電話</label>
              <input
                id="usertel"
                type="tel"
                v-model="form.user.tel"
                class="form-control"
                :class="classes"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">此為必填項目</span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ classes }">
            <div class="form-group">
              <!-- 輸入框 -->
              <label for="useraddress">收件地址</label>
              <input
                id="useraddress"
                type="text"
                name="address"
                v-model="form.user.address"
                class="form-control"
                :class="classes"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">此為必填項目</span>
            </div>
          </validation-provider>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name=""
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>

          <div class="text-right">
            <button class="btn btn-danger" :disabled="invalid">結帳</button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    createOrder() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      this.$http.post(api, { data: order }).then((response) => {
        console.log("訂單已建立", response);
        if (response.data.success) {
          vm.$router.push(`/home`);
        }
      });
    },
  },
};
</script>