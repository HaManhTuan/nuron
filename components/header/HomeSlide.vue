<template>
  <div class="rn-slider-area animate__animated animate__bounceIn">
    <VueSlickCarousel :arrows="false" :dots="true" :mouse-drag="false">
      <div
        class="bg_image--21 bg_image d-flex align-items-center padding-controler-slide-product justify-content-center slide slide-style-2 fullscreen_image-banner position-relative"
      >
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-7">
              <div class="inner text-start">
                <div class="top-bid-price d-flex">
                  <span class="latest-bid mr--15">Highest bid 1/20</span>
                  <div class="last-bid color-primary">0.244wETH</div>
                </div>
                <a href="/product/1" class=""
                  ><h1 class="title theme-gradient">
                    Digital Dod Glitter Worlds
                  </h1></a
                >
                <div class="product-share-wrapper lg-product-share">
                  <div class="profile-share">
                    <a href="/author/9" class="avatar" data-tooltip="mr. Davei"
                      ><img src="/img/client-9.png" alt="Nft_Profile" /></a
                    ><a
                      href="/author/10"
                      class="avatar"
                      data-tooltip="Mrs.Laumi"
                      ><img src="/img/client-10.png" alt="Nft_Profile" /></a
                    ><a href="/author/2" class="avatar" data-tooltip="Shanon"
                      ><img src="/img/client-2.png" alt="Nft_Profile" /></a
                    ><a
                      aria-current="page"
                      href="/index-09#"
                      class="router-link-active router-link-exact-active more-author-text"
                      >15+ Place Bit.
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="place-bet-area into-banner mt_md--30 mt_sm--30">
                <div class="rn-bet-create">
                  <div class="bid-list text-start winning-bid">
                    <h6 class="title">Winning bit</h6>
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="/author/7" class=""
                            ><img src="/img/client-7.png" alt="Nft_Profile"
                          /></a>
                        </div>
                        <div class="top-seller-content">
                          <span class="heighest-bid">
                            Heighest bid
                            <a href="/author/7" class="">Atif aslam</a></span
                          ><span class="count-number"> 0.115wETH </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bid-list text-start left-bid">
                    <h6 class="title">Auction has ended</h6>
                    <div class="countdown mt--15">
                      <div class="countdown-container days">
                        <span class="countdown-value">{{
                          days | twoDigits
                        }}</span
                        ><span class="countdown-heading">D's</span>
                      </div>
                      <div class="countdown-container hours">
                        <span class="countdown-value">{{
                          hours | twoDigits
                        }}</span
                        ><span class="countdown-heading">H's</span>
                      </div>
                      <div class="countdown-container minutes">
                        <span class="countdown-value">{{
                          minutes | twoDigits
                        }}</span
                        ><span class="countdown-heading">Min's</span>
                      </div>
                      <div class="countdown-container seconds">
                        <span class="countdown-value">{{
                          seconds | twoDigits
                        }}</span
                        ><span class="countdown-heading">Sec</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary mt--30"
                  data-bs-toggle="modal"
                  data-bs-target="#placebidModal"
                >
                  Place a Bid
                </button>
              </div>
              <div class="property-wrapper-flex d-flex text-start">
                <div class="rn-pd-sm-property-wrapper into-banner">
                  <h6 class="pd-property-title">Catagory</h6>
                  <div class="catagory-wrapper">
                    <div class="pd-property-inner">
                      <span class="color-body type">ZARY</span
                      ><span class="color-white value">APP</span>
                    </div>
                    <div class="pd-property-inner">
                      <span class="color-body type">SOMALIAN</span
                      ><span class="color-white value">TRIBUTE</span>
                    </div>
                    <div class="pd-property-inner">
                      <span class="color-body type">TUNA</span
                      ><span class="color-white value">PIPE</span>
                    </div>
                  </div>
                </div>
                <div class="rn-pd-sm-property-wrapper into-banner ml--30">
                  <h6 class="pd-property-title">Property</h6>
                  <div class="property-wrapper">
                    <div class="pd-property-inner">
                      <span class="color-body type">HYPE TYPE</span
                      ><span class="color-white value">CALM AF</span>
                    </div>
                    <div class="pd-property-inner">
                      <span class="color-body type">BASTARDNESS</span
                      ><span class="color-white value">C00LIO BASTARD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="tooltip-bottom-wrapper d-flex">
              <div class="share-react react d-flex">
                <div class="bid-react-area mr--15">
                  <div class="react-area">
                    <i class="feather-heart"></i><span class="number">322</span>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg_image--22 bg_image d-flex align-items-center padding-controler-slide-product justify-content-center slide slide-style-2 fullscreen_image-banner position-relative"
        data-black-overlay="5"
      >
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-7">
              <div class="inner text-start">
                <div class="top-bid-price d-flex">
                  <span class="latest-bid mr--15">Highest bid 1/20</span>
                  <div class="last-bid color-primary">0.244wETH</div>
                </div>
                <a href="/product/2" class=""
                  ><h1 class="title theme-gradient">
                    Digital Dod Glitter Worlds
                  </h1></a
                >
                <div class="product-share-wrapper lg-product-share">
                  <div class="profile-share">
                    <a href="/author/9" class="avatar" data-tooltip="mr. Davei"
                      ><img src="/img/client-9.png" alt="Nft_Profile" /></a
                    ><a
                      href="/author/10"
                      class="avatar"
                      data-tooltip="Mrs.Laumi"
                      ><img src="/img/client-10.png" alt="Nft_Profile" /></a
                    ><a href="/author/2" class="avatar" data-tooltip="Shanon"
                      ><img src="/img/client-2.png" alt="Nft_Profile" /></a
                    ><a
                      aria-current="page"
                      href="/index-09#"
                      class="router-link-active router-link-exact-active more-author-text"
                      >15+ Place Bit.
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="place-bet-area into-banner mt_md--30 mt_sm--30">
                <div class="rn-bet-create">
                  <div class="bid-list text-start winning-bid">
                    <h6 class="title">Winning bit</h6>
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="/author/7" class=""
                            ><img src="/img/client-7.png" alt="Nft_Profile"
                          /></a>
                        </div>
                        <div class="top-seller-content">
                          <span class="heighest-bid">
                            Heighest bid
                            <a href="/author/7" class="">Atif aslam</a></span
                          ><span class="count-number"> 0.115wETH </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bid-list text-start left-bid">
                    <h6 class="title">Auction has ended</h6>
                    <div class="countdown mt--15">
                      <div class="countdown-container days">
                        <span class="countdown-value">41</span
                        ><span class="countdown-heading">D's</span>
                      </div>
                      <div class="countdown-container hours">
                        <span class="countdown-value">02</span
                        ><span class="countdown-heading">H's</span>
                      </div>
                      <div class="countdown-container minutes">
                        <span class="countdown-value">28</span
                        ><span class="countdown-heading">Min's</span>
                      </div>
                      <div class="countdown-container seconds">
                        <span class="countdown-value">28</span
                        ><span class="countdown-heading">Sec</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary mt--30"
                  data-bs-toggle="modal"
                  data-bs-target="#placebidModal"
                >
                  Place a Bid
                </button>
              </div>
              <div class="property-wrapper-flex d-flex text-start">
                <div class="rn-pd-sm-property-wrapper into-banner">
                  <h6 class="pd-property-title">Catagory</h6>
                  <div class="catagory-wrapper">
                    <div class="pd-property-inner">
                      <span class="color-body type">ZARY</span
                      ><span class="color-white value">APP</span>
                    </div>
                    <div class="pd-property-inner">
                      <span class="color-body type">SOMALIAN</span
                      ><span class="color-white value">TRIBUTE</span>
                    </div>
                    <div class="pd-property-inner">
                      <span class="color-body type">TUNA</span
                      ><span class="color-white value">PIPE</span>
                    </div>
                  </div>
                </div>
                <div class="rn-pd-sm-property-wrapper into-banner ml--30">
                  <h6 class="pd-property-title">Property</h6>
                  <div class="property-wrapper">
                    <div class="pd-property-inner">
                      <span class="color-body type">HYPE TYPE</span
                      ><span class="color-white value">CALM AF</span>
                    </div>
                    <div class="pd-property-inner">
                      <span class="color-body type">BASTARDNESS</span
                      ><span class="color-white value">C00LIO BASTARD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="tooltip-bottom-wrapper d-flex">
              <div class="share-react react d-flex">
                <div class="bid-react-area mr--15">
                  <div class="react-area">
                    <i class="feather-heart"></i><span class="number">322</span>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  name: "HomeSlide",
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
  props: {
    date: null,
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      event: this.date,
      finish: false,
    };
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now;
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000);
    },
    seconds() {
      if (this.secondCount < 0) return 0;
      return this.secondCount % 60;
    },
    minutes() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60) % 60;
    },
    hours() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60) % 24;
    },
    days() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },
  mounted() {
    const _self = this;
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true;
        _self.$emit("onFinish");
      }
    }, 1000);
  },
};
</script>

<style scoped></style>
