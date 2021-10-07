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
          <li class="nav-item active">
            <router-link class="nav-link" to="/index/home"
              >GUNDAM <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">關於我</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/shop">商店</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown分類1
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">分類1</a>
              <a class="dropdown-item" href="#">分類2</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">分類3</a>
            </div>
          </li> -->
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
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
        console.log("getCart", response);
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
    this.getCart();
  },
};
</script>