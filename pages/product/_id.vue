<template>
  <div>
    <div class="rn-breadcrumb-inner ptb--30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h5 class="title text-center text-md-start">Product Details</h5>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-list">
              <li class="item"><a href="/" class="">Home</a></li>
              <li class="separator"><i class="feather-chevron-right"></i></li>
              <li class="item current">Product Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="product-details-area rn-section-gapTop">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="product-tab-wrapper rbt-sticky-top-adjust">
              <div class="pd-tab-inner">
                <div class="nav rn-pd-nav rn-pd-rt-content nav-pills">
                  <button
                    v-for="item in imageList"
                    :id="`v-pills-${item.id}-tab`"
                    :key="item.id"
                    class="nav-link"
                    :class="{ active: imageCurrent === item.url }"
                    type="button"
                    @click="changeImage(item.url, `v-pills-${item.id}-tab`)"
                  >
                    <span class="rn-pd-sm-thumbnail"
                      ><img
                        width="164"
                        height="164"
                        :src="item.url"
                        alt="Nft_Profile"
                    /></span>
                  </button>
                </div>
                <div class="tab-content rn-pd-content">
                  <transition name="fade" appear>
                    <div
                      v-if="imageCurrent"
                      :class="classTab"
                      role="tabpanel"
                      aria-labelledby="v-pills-0-tab"
                    >
                      <div class="rn-pd-thumbnail">
                        <img :src="imageCurrent" alt="Nft_Profile" />
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
            <div class="rn-pd-content-area">
              <div class="pd-title-area">
                <h4 class="title">Preatent</h4>
                <div class="pd-react-area">
                  <div class="heart-count">
                    <i class="feather-heart"></i><span>322</span>
                  </div>
                  <div class="count">
                    <div
                      class="share-btn share-btn-activation dropdown"
                      @click="showMore"
                    >
                      <button class="icon" :class="{ show: statusMore }">
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                        :class="{ show: statusMore }"
                      >
                        <button
                          v-for="item in optionShare"
                          :key="item.value"
                          type="button"
                          class="btn-setting-text share-text"
                          @click="chooseShare(item.value)"
                        >
                          {{ item.text }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span class="bid">
                Height bid <span class="price">0.244wETH</span></span
              >
              <h6 class="title-name">#22 Portal , Info bellow</h6>
              <div class="catagory-collection">
                <div class="catagory">
                  <span>
                    Catagory <span class="color-body">10% royalties</span></span
                  >
                  <div class="top-seller-inner-one">
                    <div class="top-seller-wrapper">
                      <div class="thumbnail">
                        <a href="/author/1" class=""
                          ><img src="/img/client-2.png" alt="Nft_Profile"
                        /></a>
                      </div>
                      <div class="top-seller-content">
                        <a href="/author/1" class=""
                          ><h6 class="name">Brodband</h6></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collection">
                  <span>Collections</span>
                  <div class="top-seller-inner-one">
                    <div class="top-seller-wrapper">
                      <div class="thumbnail">
                        <a href="/author/2" class=""
                          ><img src="/img/client-2.png" alt="Nft_Profile"
                        /></a>
                      </div>
                      <div class="top-seller-content">
                        <a href="/author/2" class=""
                          ><h6 class="name">Brodband</h6></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                aria-current="page"
                href="/product/1#"
                class="router-link-active router-link-exact-active btn btn-primary-alta"
                >Unlockable content included</a
              >
            </div>
          </div>
        </div>
        <div class="rn-new-items rn-section-gapTop">
          <div class="container">
            <div class="row mb--30 align-items-center">
              <div class="col-12"><h3 class="title mb--0">Recent View</h3></div>
            </div>
            <div class="row g-5">
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay">
                  <div class="card-thumbnail">
                    <a href="/product/1" class=""
                      ><img src="/img/portfolio-01.jpg" alt="Preatent" /></a
                    ><!----><!---->
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a href="/author/1" class="avatar" data-tooltip="Jone lee"
                        ><img src="/img/client-1.png" alt="Jone lee" /></a
                      ><a
                        href="/author/2"
                        class="avatar"
                        data-tooltip="Jone lee"
                        ><img src="/img/client-2.png" alt="Jone lee" /></a
                      ><a
                        href="/author/3"
                        class="avatar"
                        data-tooltip="Nisat Tara"
                        ><img src="/img/client-3.png" alt="Nisat Tara" /></a
                      ><a
                        aria-current="page"
                        href="/#"
                        class="router-link-active router-link-exact-active more-author-text"
                        >9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                      >
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share</button
                        ><button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="/product/1" class=""
                    ><span class="product-name">Preatent</span></a
                  ><span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <i class="feather-heart"></i
                      ><span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay">
                  <div class="card-thumbnail">
                    <a href="/product/1" class=""
                      ><img src="/img/portfolio-01.jpg" alt="Preatent" /></a
                    ><!----><!---->
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a href="/author/1" class="avatar" data-tooltip="Jone lee"
                        ><img src="/img/client-1.png" alt="Jone lee" /></a
                      ><a
                        href="/author/2"
                        class="avatar"
                        data-tooltip="Jone lee"
                        ><img src="/img/client-2.png" alt="Jone lee" /></a
                      ><a
                        href="/author/3"
                        class="avatar"
                        data-tooltip="Nisat Tara"
                        ><img src="/img/client-3.png" alt="Nisat Tara" /></a
                      ><a
                        aria-current="page"
                        href="/#"
                        class="router-link-active router-link-exact-active more-author-text"
                        >9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                      >
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share</button
                        ><button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="/product/1" class=""
                    ><span class="product-name">Preatent</span></a
                  ><span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <i class="feather-heart"></i
                      ><span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay">
                  <div class="card-thumbnail">
                    <a href="/product/1" class=""
                      ><img src="/img/portfolio-01.jpg" alt="Preatent" /></a
                    ><!----><!---->
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a href="/author/1" class="avatar" data-tooltip="Jone lee"
                        ><img src="/img/client-1.png" alt="Jone lee" /></a
                      ><a
                        href="/author/2"
                        class="avatar"
                        data-tooltip="Jone lee"
                        ><img src="/img/client-2.png" alt="Jone lee" /></a
                      ><a
                        href="/author/3"
                        class="avatar"
                        data-tooltip="Nisat Tara"
                        ><img src="/img/client-3.png" alt="Nisat Tara" /></a
                      ><a
                        aria-current="page"
                        href="/#"
                        class="router-link-active router-link-exact-active more-author-text"
                        >9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                      >
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share</button
                        ><button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="/product/1" class=""
                    ><span class="product-name">Preatent</span></a
                  ><span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <i class="feather-heart"></i
                      ><span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rn-new-items rn-section-gapTop">
          <div class="container">
            <div class="row mb--30 align-items-center">
              <div class="col-12">
                <h3 class="title mb--0">Related Item</h3>
              </div>
            </div>
            <div class="row g-5">
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay">
                  <div class="card-thumbnail">
                    <a href="/product/1" class=""
                      ><img src="/img/portfolio-01.jpg" alt="Preatent" /></a
                    ><!----><!---->
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a href="/author/1" class="avatar" data-tooltip="Jone lee"
                        ><img src="/img/client-1.png" alt="Jone lee" /></a
                      ><a
                        href="/author/2"
                        class="avatar"
                        data-tooltip="Jone lee"
                        ><img src="/img/client-2.png" alt="Jone lee" /></a
                      ><a
                        href="/author/3"
                        class="avatar"
                        data-tooltip="Nisat Tara"
                        ><img src="/img/client-3.png" alt="Nisat Tara" /></a
                      ><a
                        aria-current="page"
                        href="/#"
                        class="router-link-active router-link-exact-active more-author-text"
                        >9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                      >
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share</button
                        ><button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="/product/1" class=""
                    ><span class="product-name">Preatent</span></a
                  ><span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <i class="feather-heart"></i
                      ><span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay">
                  <div class="card-thumbnail">
                    <a href="/product/1" class=""
                      ><img src="/img/portfolio-01.jpg" alt="Preatent" /></a
                    ><!----><!---->
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a href="/author/1" class="avatar" data-tooltip="Jone lee"
                        ><img src="/img/client-1.png" alt="Jone lee" /></a
                      ><a
                        href="/author/2"
                        class="avatar"
                        data-tooltip="Jone lee"
                        ><img src="/img/client-2.png" alt="Jone lee" /></a
                      ><a
                        href="/author/3"
                        class="avatar"
                        data-tooltip="Nisat Tara"
                        ><img src="/img/client-3.png" alt="Nisat Tara" /></a
                      ><a
                        aria-current="page"
                        href="/#"
                        class="router-link-active router-link-exact-active more-author-text"
                        >9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                      >
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share</button
                        ><button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="/product/1" class=""
                    ><span class="product-name">Preatent</span></a
                  ><span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <i class="feather-heart"></i
                      ><span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay">
                  <div class="card-thumbnail">
                    <a href="/product/1" class=""
                      ><img src="/img/portfolio-01.jpg" alt="Preatent" /></a
                    ><!----><!---->
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a href="/author/1" class="avatar" data-tooltip="Jone lee"
                        ><img src="/img/client-1.png" alt="Jone lee" /></a
                      ><a
                        href="/author/2"
                        class="avatar"
                        data-tooltip="Jone lee"
                        ><img src="/img/client-2.png" alt="Jone lee" /></a
                      ><a
                        href="/author/3"
                        class="avatar"
                        data-tooltip="Nisat Tara"
                        ><img src="/img/client-3.png" alt="Nisat Tara" /></a
                      ><a
                        aria-current="page"
                        href="/#"
                        class="router-link-active router-link-exact-active more-author-text"
                        >9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="feather-more-horizontal"></i>
                      </button>
                      <div
                        class="share-btn-setting dropdown-menu dropdown-menu-end"
                      >
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share</button
                        ><button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="/product/1" class=""
                    ><span class="product-name">Preatent</span></a
                  ><span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <i class="feather-heart"></i
                      ><span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      imageList: [
        {
          id: 1,
          url: "/img/portfolio-01.jpg",
        },
        {
          id: 2,
          url: "/img/portfolio-02.jpg",
        },
        {
          id: 3,
          url: "/img/portfolio-03.jpg",
        },
      ],
      optionShare: [
        {
          value: 1,
          text: "Share",
        },
        {
          value: 2,
          text: "Report",
        },
      ],
      imageCurrent: null,
      classTab: null,
      more: null,
      statusMore: null,
      transition: null,
    };
  },
  watch: {
    more() {
      this.statusMore = !this.statusMore;
    },
  },
  created() {
    if (this.imageList.length) {
      this.imageCurrent = this.imageList[0].url;
    }
  },
  mounted() {},
  methods: {
    changeImage(url, className) {
      this.imageCurrent = null;
      setTimeout(() => {
        this.imageCurrent = url;
      }, 200);
      this.classTab = className;
    },
    showMore() {
      this.statusMore = !this.statusMore;
    },
    chooseShare(val) {
      this.more = val;
      this.statusMore = false;
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
