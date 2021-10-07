<template>
  <div>
    <HomeNavbar />
    <main role="main" style="padding: 7rem 0">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import HomeNavbar from "./HomeNavbar.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    HomeNavbar,
    Footer,
  },
};
</script>