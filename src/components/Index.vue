<template>
  <div>
    <HomeNavbar />
    <!-- <main role="main" style="padding: 6rem 0"> -->
    <main role="main">
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