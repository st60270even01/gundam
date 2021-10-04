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
          <router-link
            class="btn btn-outline-danger my-2 my-sm-0"
            to="/admin/products"
            >管理員</router-link
          >
          <router-link
            class="btn btn-outline-success my-2 my-sm-0"
            to="/index/cart"
            >購物車</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HomeNavbar",
};
</script>