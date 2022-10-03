<template>
  <div class="popup-mobile-menu" :class="activeClass ? 'active' : ''">
    <div class="inner">
      <div class="header-top">
        <div class="logo logo-custom-css">
          <a href="/" class="logo-light"
            ><img src="/img/logo.png" alt="nft-logo" /></a
          ><a href="/" class="logo-dark"
            ><img src="/img/logo-dark.png" alt="nft-logo"
          /></a>
        </div>
        <div class="close-menu">
          <button class="close-button" @click="closeNavbar">
            <i class="feather-x"></i>
          </button>
        </div>
      </div>
      <nav>
        <ul class="mainmenu">
          <li class="has-droupdown has-menu-child-item">
            <a
              aria-current="page"
              href="/index-09#"
              class="router-link-active router-link-exact-active nav-link its_new"
              >Home</a
            >
          </li>
          <li class="">
            <a href="/about" class="nav-link its_new">About</a
            ><!----><!---->
          </li>
          <li class="has-droupdown has-menu-child-item">
            <a
              aria-current="page"
              href="/index-09#"
              class="router-link-active router-link-exact-active nav-link its_new"
              >Explore</a
            >
          </li>
          <li class="with-megamenu">
            <a
              aria-current="page"
              href="/index-09#"
              class="router-link-active router-link-exact-active nav-link its_new"
              >Pages</a
            ><!---->
          </li>
          <li class="has-droupdown has-menu-child-item">
            <a
              aria-current="page"
              href="/index-09#"
              class="router-link-active router-link-exact-active nav-link its_new"
              >Blog</a
            >
          </li>
          <li class="">
            <a href="/contact" class="nav-link its_new">Contact</a
            ><!----><!---->
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mobile",
  data() {
    return {
      active: this.$store.state.header.openNavBar,
    };
  },
  computed: {
    activeClass() {
      return this.$store.state.header.openNavBar;
    },
  },
  methods: {
    closeNavbar() {
      this.$store.dispatch("header/setNavbar", false);
      // this.active = false;
    },
  },
};
</script>

<style scoped></style>
