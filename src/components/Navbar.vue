<template>
  <div>
    <!-- <header
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-primary" href="#">
        <router-link class="text-decoration-none" to="/index/home"
          ><h5>GUNDAM</h5></router-link
        ></a
      >
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <a class="nav-link px-3" href="#" @click.prevent="signout">登出</a>
        </div>
      </div>
    </header> -->
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

          <a class="nav-link px-3" href="#" @click.prevent="signout">登出</a>
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
  name: "Navbar",
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.APIPATH}/logout`;
      this.$http.post(url).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/signin");
        }
      });
    },
  },
};
</script>