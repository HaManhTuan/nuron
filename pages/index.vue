<template>
  <div>
    <HomeSlide :date="end" />
    <div class="rn-creator-title-area rn-section-gapTop">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-lg-6 col-md-6 col-sm-6 col-12 animate__animated animate__bounceIn"
          >
            <h2 class="title mb--0">Our Best Creators</h2>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <SelectOption
              :label="'SORT BY:'"
              :data-sort="dataSort"
              :class-name="'shortby-default text-start text-sm-end'"
            />
          </div>
        </div>
        <div
          class="row g-5 mt--30 creator-list-wrapper animate__animated animate__bounceIn"
        >
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
          <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail">
                  <a href="/author/2" class=""
                    ><img src="/img/client-2.png" alt="Nft_Profile"
                  /></a>
                </div>
                <div class="top-seller-content">
                  <a href="/author/2" class=""
                    ><h6 class="name">Ms. Parkline</h6></a
                  ><span class="count-number">$2300,000</span>
                </div>
              </div>
              <a href="/author/2" class="over-link"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-market-area rn-section-gapTop">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-wrapper text-center">
              <h2>AN NURON THEME JUST FOR GAMERS</h2>
              <p class="discription">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio sed
                non. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-product-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--50 align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3 class="title mb--0 animate__animated animate__bounceIn">
              Explore Product
            </h3>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div class="view-more-btn text-start text-sm-end">
              <button
                class="discover-filter-button btn btn-primary animate__animated animate__bounceIn"
                :aria-expanded="statusFilter ? 'true' : 'false'"
                :class="statusFilter ? 'collapsed' : ''"
                @click="openFilter"
              >
                Filter <i class="feather-filter"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          id="collapseExample"
          class="default-exp-wrapper"
          :class="statusFilter ? 'collapse show' : 'collapse'"
        >
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
      </div>
    </div>
    <div class="rn-collection-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--50 align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3 class="title mb--0 sal-animate">Top Collection</h3>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div class="view-more-btn text-start text-sm-end">
              <a href="/collection" class="btn-transparent">
                VIEW ALL <i class="feather-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
            <a href="#" class="rn-collection-inner-one">
              <div class="collection-wrapper">
                <div class="collection-big-thumbnail">
                  <img src="/img/collection-lg-01.jpg" alt="1" />
                </div>
                <div class="collenction-small-thumbnail">
                  <img src="/img/download.jpeg" alt="" />
                  <img src="/img/download (1).jpeg" alt="" />
                  <img src="/img/download (2).jpeg" alt="" />
                </div>
                <div class="collection-profile">
                  <img src="/img/client-15.png" alt="" />
                </div>
                <div class="collection-deg">
                  <h6 class="title">Cubic Trad</h6>
                  <span class="items">27 Items</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
            <a href="#" class="rn-collection-inner-one">
              <div class="collection-wrapper">
                <div class="collection-big-thumbnail">
                  <img src="/img/collection-lg-01.jpg" alt="1" />
                </div>
                <div class="collenction-small-thumbnail">
                  <img src="/img/download.jpeg" alt="" />
                  <img src="/img/download (1).jpeg" alt="" />
                  <img src="/img/download (2).jpeg" alt="" />
                </div>
                <div class="collection-profile">
                  <img src="/img/client-15.png" alt="" />
                </div>
                <div class="collection-deg">
                  <h6 class="title">Cubic Trad</h6>
                  <span class="items">27 Items</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
            <a href="#" class="rn-collection-inner-one">
              <div class="collection-wrapper">
                <div class="collection-big-thumbnail">
                  <img src="/img/collection-lg-01.jpg" alt="1" />
                </div>
                <div class="collenction-small-thumbnail">
                  <img src="/img/download.jpeg" alt="" />
                  <img src="/img/download (1).jpeg" alt="" />
                  <img src="/img/download (2).jpeg" alt="" />
                </div>
                <div class="collection-profile">
                  <img src="/img/client-15.png" alt="" />
                </div>
                <div class="collection-deg">
                  <h6 class="title">Cubic Trad</h6>
                  <span class="items">27 Items</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
            <a href="#" class="rn-collection-inner-one">
              <div class="collection-wrapper">
                <div class="collection-big-thumbnail">
                  <img src="/img/collection-lg-01.jpg" alt="1" />
                </div>
                <div class="collenction-small-thumbnail">
                  <img src="/img/download.jpeg" alt="" />
                  <img src="/img/download (1).jpeg" alt="" />
                  <img src="/img/download (2).jpeg" alt="" />
                </div>
                <div class="collection-profile">
                  <img src="/img/client-15.png" alt="" />
                </div>
                <div class="collection-deg">
                  <h6 class="title">Cubic Trad</h6>
                  <span class="items">27 Items</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSlide from "../components/header/HomeSlide";
import { SORT_OPTIONS, SORT_OPTIONS_LIKES } from "../utils/constant";
import SelectOption from "../components/common/SelectOption";
export default {
  name: "IndexPage",
  components: { SelectOption, HomeSlide },
  data() {
    return {
      end: new Date("2022-10-10T16:37:00"),
      statusBest: false,
      dataSort: SORT_OPTIONS,
      dataLikes: SORT_OPTIONS_LIKES,
      dataChooseSortBest: SORT_OPTIONS[0].name,
      statusFilter: false,
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
  computed: {},
  methods: {
    chooseOptionSort(val) {
      this.statusBest = !this.statusBest;
    },
    changeOptionSortBest(val) {
      this.dataChooseSortBest = val;
      this.statusBest = false;
    },
    openFilter() {
      setTimeout(() => {
        this.statusFilter = !this.statusFilter;
      }, 500);
    },
  },
};
</script>
