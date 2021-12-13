<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <router-link class="" to="/index/home"
          ><a class="navbar-brand" href="#"
            ><h4 class="font-weight-bold">多肉植物</h4></a
          ></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/index/shop"
                ><h5>商店</h5></router-link
              >
            </li>
          </ul>

          <div class="my-2 my-lg-0">
            <router-link class="btn my-2 my-sm-0" to="/admin/products"
              ><span style="color: #e5e5e5"
                ><i class="fas fa-user-lock fa-2x"></i></span
            ></router-link>
            <router-link
              class="btn my-2 my-sm-0 position-relative"
              to="/index/cart"
            >
              <span style="color: #e5e5e5"
                ><i class="fas fa-shopping-cart fa-2x"></i></span
              ><span
                class="
                  position-absolute
                  top-20
                  start-90
                  translate-middle
                  badge
                  rounded-pill
                  bg-secondary
                  text-light
                "
                >{{ watchCart }}</span
              >
            </router-link>
          </div>
          <!-- <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
        </div>
      </nav>
    </header>
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