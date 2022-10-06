<template>
  <div>
    <div class="rn-breadcrumb-inner ptb--30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h5 class="title text-center text-md-start">Sign Up</h5>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-list">
              <li class="item"><a href="/" class="">Home</a></li>
              <li class="separator"><i class="feather-chevron-right"></i></li>
              <li class="item current">Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="login-area rn-section-gapTop">
      <div class="container">
        <div class="row g-5">
          <div class="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
            <div class="form-wrapper-one registration-area">
              <h4>Sign up</h4>
              <ValidationObserver v-slot="formStatus" ref="form">
                <div class="mb-5">
                  <label for="firstName" class="form-label">First name</label>
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
                  <label for="Email" class="form-label">Email address</label>
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
                  <label for="newPassword" class="form-label"
                    >Create Password</label
                  >
                  <ValidationProvider
                    id="newPassword"
                    name="newPassword"
                    class="required-item"
                    mode="lazy"
                    ><input v-model.trim.lazy="form.password" type="password" />
                    <span class="input-invalid-message">
                      {{ formStatus.errors.password }}
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
                <div class="mb-5 rn-check-box">
                  <input
                    id="exampleCheck1"
                    type="checkbox"
                    class="rn-check-box-input"
                  /><label class="rn-check-box-label" for="exampleCheck1"
                    >Allow to all tearms &amp; condition</label
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mr--15"
                  @click="submitForm"
                >
                  Sign Up</button
                ><a href="/login" class="btn btn-primary-alta">Log In</a>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="social-share-media form-wrapper-one">
              <h6>Another way to sign up</h6>
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
  computed: {
    errorMessage() {
      return (errors, property) => {
        if (!errors || !Object.keys(errors).length) return "";
        return Object.prototype.hasOwnProperty.call(errors, property) &&
          errors[property].length
          ? errors[property]
          : "";
      };
    },
  },
  methods: {
    async submitForm() {
      await this.$register(this.form)
        .then((res) => {
          setCookie("Authorization", res.data.access_token);
          this.$store.dispatch(
            "auth/setCustomer",
            res.data.customer ? res.data.customer : {}
          );
          this.$toast.success("Successfully authenticated");
          this.$router.push("/");
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
