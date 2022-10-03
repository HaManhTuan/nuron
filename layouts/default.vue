<template>
  <div id="app" class="with-particles" :class="dataTheme">
    <div>
      <!--Header-->
      <Header @changeTheme="changeTheme" />
      <!--Mobile-->
      <Mobile />
      <div class="main">
        <nuxt :key="$route.fullPath" />
      </div>
      <div>
        <!--Footer-->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Mobile from "../components/header/Mobile";
export default {
  name: "Default",
  components: { Mobile },
  data() {
    return {
      dataTheme: "active-dark-mode",
      active: null,
    };
  },
  created() {},
  methods: {
    changeTheme(val) {
      this.dataTheme = val;
    },
    openNavBar(val) {
      this.active = val;
    },
  },
};
</script>

<style scoped></style>
