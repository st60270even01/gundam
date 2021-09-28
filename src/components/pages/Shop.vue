<template>
  <div class="container mx-auto">
    <h5 class="my-2">分類</h5>
    <div class="my-2">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category == 'all' }"
            @click="category = 'all'"
            href="#"
            >ALL</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category == 'MG' }"
            @click="category = 'MG'"
            href="#"
            >MG</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category == 'RG' }"
            @click="category = 'RG'"
            href="#"
            >RG</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category == 'HG' }"
            @click="category = 'HG'"
            href="#"
            >HG</a
          >
        </li>
      </ul>
    </div>

    <!-- ProductCard -->
    <div class="row mt-4">
      <div
        class="col-md-6 col-lg-4 mb-4"
        v-for="item in filterePproducts"
        :key="item.id"
      >
        <div class="card border-0 shadow-sm">
          <div
            style="
              height: 200px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">
                原價 {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元
              </div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm">
              <i class="fas fa-spinner fa-spin"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto">
              <i class="fas fa-spinner fa-spin"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pagination.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getProducts(pagination.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ active: pagination.current_page === page }"
        >
          <a class="page-link" href="#" @click.prevent="getProducts(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getProducts(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      pagination: {},
      category: "all",
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
  },
  computed: {
    filterePproducts: function () {
      const vm = this;
      if (vm.category == "all") {
        return vm.products;
      } else if (vm.category == vm.category) {
        var newProducts = [];
        vm.products.forEach(function (item) {
          if (item.category == vm.category) {
            newProducts.push(item);
          }
        });
        return newProducts;
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>