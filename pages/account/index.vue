<template>
  <div>
    <div class="rn-author-bg-area bg_image--9 bg_image ptb--150">
      <div class="container"><div class="row"></div></div>
    </div>
    <div class="rn-author-area mb--30 mt_dec--120">
      <div class="container">
        <div class="row padding-tb-50 align-items-center d-flex">
          <div class="col-lg-12">
            <div class="author-wrapper">
              <div class="author-inner">
                <div class="user-thumbnail">
                  <img src="/img/client-1.png" alt="Brodband" />
                </div>
                <div class="rn-author-info-content">
                  <h4 class="title">Brodband</h4>
                  <a
                    aria-current="page"
                    href="/author/1#"
                    class="router-link-active router-link-exact-active social-follw"
                    ><i class="feather-twitter"></i
                    ><span class="user-name">it0bsession</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-authore-profile-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="tab-wrapper-one">
              <nav class="tab-button-one">
                <div id="nav-tab" class="nav nav-tabs">
                  <button
                    id="nav-home-tab"
                    class="nav-link"
                    :class="tabActive === 'account' ? 'active' : ''"
                    type="button"
                    @click="clickTab('account')"
                  >
                    Account</button
                  ><button
                    id="nav-profile-tab"
                    class="nav-link"
                    type="button"
                    :class="tabActive === 'cart' ? 'active' : ''"
                    @click="clickTab('cart')"
                  >
                    Cart
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="tab-content rn-bid-content">
          <div
            class="tab-pane row g-5 d-flex"
            :class="tabActive === 'account' ? 'fade active show' : 'fade'"
          >
            <div class="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Account Information</h3>
              <div class="row">
                <div class="form-wrapper-one registration-area col-8">
                  <ValidationObserver v-slot="formStatus" ref="form">
                    <div class="mb-5">
                      <label for="firstName" class="form-label"
                        >First name</label
                      >
                      <ValidationProvider
                        id="firstName"
                        name="firstName"
                        class="required-item"
                        mode="lazy"
                      >
                        <input
                          v-model.trim.lazy="form.first_name"
                          :class="{
                            'input-valid': formStatus.errors.first_name,
                          }"
                          type="text"
                        />
                        <span class="input-invalid-message">
                          {{ formStatus.errors.first_name }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-5">
                      <label for="lastName" class="form-label">Last name</label>
                      <ValidationProvider
                        id="lastName"
                        name="lastName"
                        class="required-item"
                        mode="lazy"
                        ><input
                          v-model.trim.lazy="form.last_name"
                          type="text"
                          :class="{
                            'input-valid': formStatus.errors.last_name,
                          }"
                        />
                        <span class="input-invalid-message">
                          {{ formStatus.errors.last_name }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-5">
                      <label for="Phone" class="form-label">Phone</label>
                      <ValidationProvider
                        id="Phone"
                        name="Phone"
                        class="required-item"
                        mode="lazy"
                        ><input
                          v-model.trim.lazy="form.phone"
                          type="text"
                          :class="{
                            'input-valid': formStatus.errors.phone,
                          }"
                        />
                        <span class="input-invalid-message">
                          {{ formStatus.errors.phone }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-5">
                      <label for="Email" class="form-label"
                        >Email address</label
                      >
                      <ValidationProvider
                        id="Email"
                        name="Email"
                        class="required-item"
                        mode="lazy"
                        ><input
                          id="exampleInputEmail1"
                          v-model.trim.lazy="form.email"
                          type="email"
                        />
                        <span class="input-invalid-message">
                          {{ formStatus.errors.email }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="mb-5">
                      <label for="Address" class="form-label">Address</label>
                      <ValidationProvider
                        id="Address"
                        name="Address"
                        class="required-item"
                        mode="lazy"
                        ><input
                          v-model.trim.lazy="form.address"
                          type="text"
                          :class="{
                            'input-valid': formStatus.errors.address,
                          }"
                        />
                        <span class="input-invalid-message">
                          {{ formStatus.errors.address }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <button
                      style="width: 100%"
                      type="submit"
                      class="btn btn-primary mr--15"
                      @click="submitForm"
                    >
                      Update
                    </button>
                  </ValidationObserver>
                </div>
                <div class="col-4">
                  <div class="form-wrapper-one registration-area">
                    <div class="btn-area">
                      <button type="submit" class="btn btn-primary mr--15">
                        Reset Password
                      </button>
                      <button type="submit" class="btn btn-primary mr--15">
                        Logout
                      </button>
                    </div>
                    <div class="form-password">
                      <div class="mb-5">
                        <ValidationObserver
                          v-slot="formStatusPassword"
                          ref="formPassword"
                        >
                          <label for="newPassword" class="form-label"
                            >Update Password</label
                          >
                          <ValidationProvider
                            id="newPassword"
                            name="newPassword"
                            class="required-item"
                            mode="lazy"
                            ><input
                              v-model.trim.lazy="form.password"
                              type="password"
                            />
                            <span class="input-invalid-message">
                              {{ formStatusPassword.errors.password }}
                            </span>
                          </ValidationProvider>
                          <button
                            style="width: 100%; margin-top: 10px"
                            class="btn btn-primary mr--15"
                          >
                            Reset
                          </button>
                        </ValidationObserver>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane row g-5 d-flex"
            :class="tabActive === 'cart' ? 'fade active show' : 'fade'"
          >
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
                    <i class="feather-heart"></i><span class="number">322</span>
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
// import customer from "../../services/customer";

export default {
  name: "Index",
  data() {
    return {
      tabActive: "account",
      form: {},
      isResetPassword: false,
    };
  },
  computed: {
    customer() {
      return this.$store.state.auth.customer || {};
    },
    id() {
      return this.$store.state.auth.customer.id || null;
    },
  },
  created() {
    this.form = { ...this.customer };
  },
  methods: {
    clickOpenResetPassword() {
      this.isResetPassword = !this.isResetPassword;
    },
    clickTab(val) {
      this.tabActive = val;
    },
    async submitForm() {
      await this.$updateCustomer(this.id, this.form)
        .then((res) => {
          if (res.data) {
            this.$toast.success("Successfully updated", {
              duration: 3000,
            });
          }
        })
        .catch((e) => {
          this.$toast.error("Error");
        });
    },
  },
};
</script>

<style scoped lang="scss">
.btn-area {
  position: relative;
  display: flex;
  justify-content: center;
}
.form-password {
  margin-top: 40px;
  border-radius: 6px;
  padding: 40px 35px;
  border: 1px solid var(--color-border);
}
</style>
