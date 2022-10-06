<template>
  <div>
    <div class="rn-breadcrumb-inner ptb--30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h5 class="title text-center text-md-start">Nuron Login</h5>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-list">
              <li class="item"><a href="/" class="">Home</a></li>
              <li class="separator"><i class="feather-chevron-right"></i></li>
              <li class="item current">Nuron Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="login-area rn-section-gapTop">
      <div class="container">
        <div class="row g-5">
          <div class="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
            <div class="form-wrapper-one">
              <h4>Login</h4>
              <ValidationObserver v-slot="formStatus" ref="form">
                <div class="mb-5">
                  <label for="exampleInputEmail1" class="form-label"
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
                      :class="{
                        'input-valid': formStatus.errors.email,
                      }"
                    />
                    <span class="input-invalid-message">
                      {{ formStatus.errors.email }}
                    </span>
                  </ValidationProvider>
                </div>
                <div class="mb-5">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <ValidationProvider
                    id="Password"
                    name="Password"
                    class="required-item"
                    mode="lazy"
                    ><input
                      id="exampleInputPassword1"
                      v-model.trim.lazy="form.password"
                      type="password"
                      :class="{
                        'input-valid': formStatus.errors.password,
                      }"
                    />
                    <span class="input-invalid-message">
                      {{ formStatus.errors.password }}
                    </span>
                  </ValidationProvider>
                </div>
                <div class="mb-5 rn-check-box">
                  <input
                    id="exampleCheck1"
                    v-model="form.is_remember"
                    type="checkbox"
                    class="rn-check-box-input"
                  /><label class="rn-check-box-label" for="exampleCheck1"
                    >Remember me leter</label
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mr--15"
                  @click="login"
                >
                  Log In</button
                ><a href="/sign-up" class="btn btn-primary-alta">Sign Up</a>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="social-share-media form-wrapper-one">
              <h6>Another way to log in</h6>
              <p>
                Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.
              </p>
              <button class="another-login login-facebook">
                <img class="small-image" src="/img/google.png" alt="" /><span
                  >Log in with Google</span
                ></button
              ><button class="another-login login-facebook">
                <img class="small-image" src="" alt="" /><span
                  >Log in with Facebook</span
                ></button
              ><button class="another-login login-twitter">
                <img class="small-image" src="/img/tweeter.png" alt="" /><span
                  >Log in with Twitter</span
                ></button
              ><button class="another-login login-linkedin">
                <img class="small-image" src="" alt="" /><span
                  >Log in with linkedin</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP_STATUS } from "../../utils/constants";
import { setCookie } from "../../utils/localStorage";

export default {
  name: "Index",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async login() {
      await this.$login(this.form)
        .then((res) => {
          if (res.data) {
            setCookie(
              "Authorization",
              res.data.access_token,
              res.data.expires_in
            );
            this.$store.dispatch(
              "auth/setCustomer",
              res.data.customer ? res.data.customer : {}
            );
            // this.$toast.success("Successfully authenticated");
            this.$router.push("/");
          }
        })
        .catch((e) => {
          if (e.response.status === HTTP_STATUS.Unprocessable && e.response) {
            this.$refs.form.errors = e.response.data.errors;
            const top = this.$refs.form.offsetTop;
            window.scrollTo(0, top);
          }
        });
    },
  },
};
</script>

<style scoped></style>
