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
                  <button id="v-pills-0-tab" class="nav-link" type="button">
                    <span class="rn-pd-sm-thumbnail"
                      ><img
                        width="164"
                        height="164"
                        src="/img/portfolio-11.jpg"
                        alt="Nft_Profile"
                    /></span>
                  </button>
                  <button id="v-pills-1-tab" class="nav-link" type="button">
                    <span class="rn-pd-sm-thumbnail"
                      ><img
                        width="164"
                        height="164"
                        src="/img/portfolio-11.jpg"
                        alt="Nft_Profile"
                    /></span>
                  </button>
                  <button id="v-pills-2-tab" class="nav-link" type="button">
                    <span class="rn-pd-sm-thumbnail"
                      ><img
                        width="164"
                        height="164"
                        src="/img/portfolio-11.jpg"
                        alt="Nft_Profile"
                    /></span>
                  </button>
                </div>
                <div class="tab-content rn-pd-content">
                  <div
                    id="v-pills-home-0"
                    class=""
                    role="tabpanel"
                    aria-labelledby="v-pills-0-tab"
                  >
                    <div class="rn-pd-thumbnail">
                      <img src="/img/portfolio-11.jpg" alt="Nft_Profile" />
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
  name: "Id",
};
</script>

<style scoped></style>
