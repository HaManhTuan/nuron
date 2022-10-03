<template>
  <div>
    <div class="rn-breadcrumb-inner ptb--30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h5 class="title text-center text-md-start">
              Place Bid With Filter
            </h5>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-list">
              <li class="item"><a href="/" class="">Home</a></li>
              <li class="separator"><i class="feather-chevron-right"></i></li>
              <li class="item current">Place Bid With Filter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-product-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--30 align-items-center">
          <div class="col-12">
            <h3 class="title mb--0 sal-animate">Explore Product</h3>
          </div>
        </div>
        <div class="default-exp-wrapper">
          <div class="inner">
            <SelectOption
              :label="'LIKES'"
              :data-sort="dataLikes"
              :class-name="'filter-select-option'"
            />
            <SelectOption
              :label="'Category'"
              :data-sort="dataCategory"
              :class-name="'filter-select-option'"
            />
            <div class="price--filter">
              <a class="btn btn-primary btn-small" href="#"> Filter </a>
            </div>
          </div>
        </div>
        <div class="row g-5 animate__animated animate__bounceIn">
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
                  ><a href="/author/2" class="avatar" data-tooltip="Jone lee"
                    ><img src="/img/client-2.png" alt="Jone lee" /></a
                  ><a href="/author/3" class="avatar" data-tooltip="Nisat Tara"
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
                  <i class="feather-heart"></i><span class="number">322</span>
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
                  ><a href="/author/2" class="avatar" data-tooltip="Jone lee"
                    ><img src="/img/client-2.png" alt="Jone lee" /></a
                  ><a href="/author/3" class="avatar" data-tooltip="Nisat Tara"
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
                  <i class="feather-heart"></i><span class="number">322</span>
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
                  ><a href="/author/2" class="avatar" data-tooltip="Jone lee"
                    ><img src="/img/client-2.png" alt="Jone lee" /></a
                  ><a href="/author/3" class="avatar" data-tooltip="Nisat Tara"
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
                  <i class="feather-heart"></i><span class="number">322</span>
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
                  ><a href="/author/2" class="avatar" data-tooltip="Jone lee"
                    ><img src="/img/client-2.png" alt="Jone lee" /></a
                  ><a href="/author/3" class="avatar" data-tooltip="Nisat Tara"
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
                  <i class="feather-heart"></i><span class="number">322</span>
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
                  ><a href="/author/2" class="avatar" data-tooltip="Jone lee"
                    ><img src="/img/client-2.png" alt="Jone lee" /></a
                  ><a href="/author/3" class="avatar" data-tooltip="Nisat Tara"
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
                  <i class="feather-heart"></i><span class="number">322</span>
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
                  ><a href="/author/2" class="avatar" data-tooltip="Jone lee"
                    ><img src="/img/client-2.png" alt="Jone lee" /></a
                  ><a href="/author/3" class="avatar" data-tooltip="Nisat Tara"
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
                  <i class="feather-heart"></i><span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="view-more-btn mt--50">
              <a
                class="btn btn-primary-alta btn-large"
                href="#"
                style="width: 100%"
                >View More Items</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectOption from "../../components/common/SelectOption";
import { SORT_OPTIONS, SORT_OPTIONS_LIKES } from "../../utils/constant";

export default {
  name: "Category",
  components: { SelectOption },
  data() {
    return {
      dataSort: SORT_OPTIONS,
      dataLikes: SORT_OPTIONS_LIKES,
      dataCategory: [
        {
          name: "All Category",
          value: 0,
        },
        {
          name: "Art",
          value: 1,
        },
        {
          name: "Music",
          value: 2,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.price--filter {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 13px;
}
</style>
