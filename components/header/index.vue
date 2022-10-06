<template>
  <header class="rn-header haeder-default header--sticky">
    <div class="container">
      <div class="header-inner">
        <div class="header-left">
          <div class="logo-thumbnail logo-custom-css">
            <nuxt-link to="/" class="logo-light"
              ><img src="/img/logo.png" alt="logo"
            /></nuxt-link>
            <nuxt-link to="/" class="logo-dark"
              ><img src="/img/logo-dark.png" alt="logo"
            /></nuxt-link>
          </div>
          <div class="mainmenu-wrapper">
            <nav class="mainmenu-nav d-none d-xl-block">
              <ul class="mainmenu">
                <li>
                  <nuxt-link to="/" class="nav-link its_new">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/category" class="nav-link its_new"
                    >Category</nuxt-link
                  >
                </li>
                <!--                <li class="has-droupdown has-menu-child-item">-->
                <!--                  <a-->
                <!--                    aria-current="page"-->
                <!--                    href="/index-05#"-->
                <!--                    class="router-link-active router-link-exact-active nav-link its_new"-->
                <!--                    >Explore</a-->
                <!--                  >-->
                <!--                  <ul class="submenu">-->
                <!--                    <li>-->
                <!--                      <a href="/explore-01" class=""-->
                <!--                        >Explore Filter <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-02" class=""-->
                <!--                        >Explore Isotop <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-03" class=""-->
                <!--                        >Explore Carousel <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-04" class=""-->
                <!--                        >Explore Simple <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-05" class=""-->
                <!--                        >Explore Place Bid <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-06" class=""-->
                <!--                        >Place Bid With Filter-->
                <!--                        <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-07" class=""-->
                <!--                        >Place Bid With Isotop-->
                <!--                        <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-08" class=""-->
                <!--                        >Place Bid With Carousel-->
                <!--                        <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-09" class=""-->
                <!--                        >Explore Style List <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-10" class=""-->
                <!--                        >Explore List Col-Two-->
                <!--                        <i class="feather-fast-forward"></i-->
                <!--                      ></a>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-11" class="live-expo"-->
                <!--                        >Live Explore-->
                <!--                        &lt;!&ndash;&ndash;&gt;</a-->
                <!--                      >-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-12" class="live-expo"-->
                <!--                        >Live Explore Carousel-->
                <!--                        &lt;!&ndash;&ndash;&gt;</a-->
                <!--                      >-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                      <a href="/explore-13" class="live-expo"-->
                <!--                        >Live With Place Bid-->
                <!--                        &lt;!&ndash;&ndash;&gt;</a-->
                <!--                      >-->
                <!--                    </li>-->
                <!--                  </ul>-->
                <!--                  &lt;!&ndash;&ndash;&gt;-->
                <!--                </li>-->
                <!--                <li class="with-megamenu">-->
                <!--                  <a-->
                <!--                    aria-current="page"-->
                <!--                    href="/index-05#"-->
                <!--                    class="router-link-active router-link-exact-active nav-link its_new"-->
                <!--                    >Pages</a-->
                <!--                  >-->
                <!--                </li>-->
                <!--                <li class="has-droupdown has-menu-child-item">-->
                <!--                  <a-->
                <!--                    aria-current="page"-->
                <!--                    href="/index-05#"-->
                <!--                    class="router-link-active router-link-exact-active nav-link its_new"-->
                <!--                    >Blog</a-->
                <!--                  >-->
                <!--                </li>-->
                <!--                <li class="">-->
                <!--                  <a href="/contact" class="nav-link its_new">Contact</a-->
                <!--                  >&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                <!--                </li>-->
              </ul>
            </nav>
          </div>
        </div>
        <div class="header-right">
          <div class="setting-option d-none d-lg-block">
            <form class="search-form-wrapper" action="#">
              <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
              />
              <div class="search-icon">
                <button><i class="feather-search"></i></button>
              </div>
            </form>
          </div>
          <div class="setting-option rn-icon-list d-block d-lg-none">
            <div class="icon-box search-mobile-icon">
              <button><i class="feather-search"></i></button>
            </div>
            <form
              id="header-search-1"
              action="#"
              method="GET"
              class="large-mobile-blog-search"
            >
              <div class="rn-search-mobile form-group">
                <button type="submit" class="search-button">
                  <i class="feather-search"></i></button
                ><input type="text" placeholder="Search ..." />
              </div>
            </form>
          </div>
          <div
            id="rbt-site-header"
            class="setting-option header-btn rbt-site-header flex-shrink-0"
          >
            <div class="icon-box">
              <a
                id="connectbtn"
                href="/connect"
                class="btn btn-primary-alta btn-small"
                >Wallet connect</a
              >
            </div>
          </div>
          <div class="setting-option rn-icon-list notification-badge">
            <div class="icon-box">
              <a href="/activity" class=""
                ><i class="feather-bell"></i><span class="badge">6</span></a
              >
            </div>
          </div>
          <div class="setting-option mobile-menu-bar d-block d-xl-none">
            <div class="hamberger">
              <button class="hamberger-button" @click="openNavbar">
                <i class="feather-menu"></i>
              </button>
            </div>
          </div>
          <div class="my_switcher setting-option">
            <ul>
              <li v-if="theme === 'active-dark-mode'">
                <a
                  href="#"
                  data-theme="light"
                  class="setColor light"
                  @click="activeTheme('active-light-mode')"
                  ><img
                    class="sun-image"
                    src="/img/sun-01.svg"
                    alt="Sun images"
                /></a>
              </li>
              <li v-if="theme === 'active-light-mode'">
                <a
                  href="#"
                  data-theme="dark"
                  class="setColor dark"
                  @click="activeTheme('active-dark-mode')"
                  ><img
                    class="Victor Image"
                    src="/img/vector.svg"
                    alt="Vector Images"
                /></a>
              </li>
            </ul>
          </div>
          <div class="setting-option rn-icon-list notification-badge">
            <div class="icon-box">
              <nuxt-link :to="login ? '/account' : '/login'">
                <i :class="login ? 'feather-user' : 'feather-log-in'"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      theme: "active-dark-mode",
      statusNavbar: false,
    };
  },
  computed: {
    login() {
      return this.$store.state.auth.customer.id || false;
    },
  },
  methods: {
    activeTheme(value) {
      this.theme = value;
      this.$emit("changeTheme", value);
      this.$store.dispatch("header/setClassTheme", value);
    },
    openNavbar() {
      this.$store.dispatch("header/setNavbar", !this.statusNavbar);
    },
  },
};
</script>

<style scoped></style>
