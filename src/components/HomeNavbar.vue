<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link class="" to="/index/home"
        ><img src="@/assets/Haro.jpg" width="50px" alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item mr-5">
            <router-link class="nav-link" to="/index/home"
              ><h5 class="text-primary font-weight-bold">GUNDAM</h5>
              <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><h5 class="font-weight-bold">關於我</h5></a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/shop"
              ><h5 class="font-weight-bold">商店</h5></router-link
            >
          </li>
        </ul>
        <div class="my-2 my-lg-0">
          <router-link class="btn my-2 my-sm-0" to="/admin/products"
            ><span style="color: #444"
              ><i class="fas fa-user-lock fa-2x"></i></span
          ></router-link>
          <router-link
            class="btn my-2 my-sm-0 position-relative"
            to="/index/cart"
          >
            <span style="color: #444"
              ><i class="fas fa-shopping-cart fa-2x"></i></span
            ><span
              class="
                position-absolute
                top-20
                start-90
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
              >{{ watchCart }}</span
            >
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HomeNavbar",
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        console.log(response);
      });
    },
  },
  computed: {
    watchCart() {
      const vm = this;
      let cartNum = [];
      cartNum = this.cart.carts;
      if (cartNum != undefined && cartNum.length >= 1) {
        return cartNum.length;
      } else {
        return 0;
      }
    },
  },
  created() {
    const vm = this;
    vm.getCart();

    vm.$bus.$on("cart:num", () => {
      vm.getCart();
    });
  },
};
</script>