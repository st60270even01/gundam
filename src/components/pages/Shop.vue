<template>
  <div>
    <div class="container mx-auto my-5">
      <loading :active.sync="isLoading"></loading>
      <h3 class="my-2 font-weight-bold">分類</h3>
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
          <li class="nav-item" v-for="item in categoryData" :key="item.id">
            <a
              class="nav-link"
              :class="{ active: category == item }"
              @click="category = item"
              href="#"
              >{{ item }}</a
            >
          </li>
        </ul>
      </div>

      <!-- ProductCard -->
      <div class="row mt-4">
        <div
          class="col-md-6 col-lg-4 mb-4 card-deck"
          v-for="item in filterePproducts[current_page]"
          :key="item.id"
        >
          <div class="card border-0 shadow-sm">
            <div
              style="
                height: 300px;
                background-size: cover;
                background-position: top;
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
            </div>
            <div class="card-footer">
              <div
                class="d-flex justify-content-between align-items-baseline pb-2"
              >
                <!-- <div class="h5" v-if="!item.price">
                原價 {{ item.origin_price }} 元
              </div> -->
                <del class="h6" v-if="item.price !== item.origin_price"
                  >原價 {{ item.origin_price }} 元</del
                >
                <div class="h5" v-if="item.price">售價 {{ item.price }} 元</div>
              </div>
              <div class="d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="getProduct(item.id)"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.loadingItem === item.id"
                  ></i>
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click="addtoCart(item.id)"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.loadingItem === item.id"
                  ></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="productModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {{ product.title }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img :src="product.imageUrl" alt="" class="img-fluid" />
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{ product.content }}</p>
                <footer class="blockquote-footer">
                  {{ product.description }}
                </footer>
              </blockquote>
              <div class="d-flex justify-content-between align-items-baseline">
                <!-- <div class="h4" v-if="!product.price">
                原價 {{ product.origin_price }} 元
              </div> -->
                <del class="h6" v-if="product.price !== product.origin_price"
                  >原價 {{ product.origin_price }} 元</del
                >
                <div class="h5" v-if="product.price">
                  售價 {{ product.price }} 元
                </div>
              </div>
              <select name="" class="form-control mt-3" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
            <div class="modal-footer">
              <div class="text-muted text-nowarp mr-3">
                小計 <strong>{{ product.num * product.price }}</strong> 元
              </div>
              <button
                type="button"
                class="btn btn-danger"
                @click="addtoCart(product.id, product.num)"
              >
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <nav aria-label="..." class="mt-5">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            v-for="page in filterePproducts.length"
            :class="{ active: current_page === page - 1 }"
            :key="page.index"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="current_page = page - 1"
              >{{ page }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      allProducts: [],
      newData: [],
      products: [],
      product: {},
      cart: {},
      status: {
        loadingItem: "",
      },
      current_page: 0,
      category: "all",
      isLoading: false,
    };
  },
  methods: {
    getAll() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        response.data.products.forEach((item) => {
          if (item.is_enabled == true) {
            vm.allProducts.push(item);
          }
        });
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.product.num = 1; //選購預設數量
        $("#productModal").modal("show");
        console.log(response);
        vm.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
        vm.$bus.$emit("cart:num");
      });
    },
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
    categoryData() {
      const vm = this;
      var result = new Set();
      var repeat = new Set();
      vm.allProducts.forEach((item) => {
        result.has(item.category)
          ? repeat.add(item.category)
          : result.add(item.category);
      });
      return result;
    },
    filterePproducts: function () {
      const vm = this;
      vm.current_page = 0;
      let tempData = [];
      vm.newData = [];
      tempData = vm.allProducts.filter((item) => {
        if (vm.category === "all") {
          return vm.allProducts;
        } else if (vm.category === item.category) {
          return item;
        }
      });
      tempData.forEach((item, i) => {
        if (i % 9 == 0) {
          vm.newData.push([]);
        }
        const pagenum = parseInt(i / 9);
        vm.newData[pagenum].push(item);
      });
      return vm.newData;
    },
  },
  created() {
    this.getAll();
  },
};
</script>