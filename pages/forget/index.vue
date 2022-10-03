<template>
  <div>
    <div class="rn-breadcrumb-inner ptb--30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h5 class="title text-center text-md-start">Forget Password?</h5>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-list">
              <li class="item"><a href="/" class="">Home</a></li>
              <li class="separator"><i class="feather-chevron-right"></i></li>
              <li class="item current">Forget Password?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="forget-password-area rn-section-gapTop">
      <div class="container">
        <div class="row g-5">
          <div class="offset-4 col-lg-4">
            <div class="form-wrapper-one">
              <div class="logo-thumbnail logo-custom-css mb--50">
                <a href="/" class="logo-light"><img src="" alt="nft-logo" /></a
                ><a href="/" class="logo-dark"><img src="" alt="nft-logo" /></a>
              </div>
              <div class="mb-5">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                ><input
                  id="exampleInputEmail1"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-5">
                <input
                  id="exampleCheck1"
                  type="checkbox"
                  class="rn-check-box-input"
                /><label class="rn-check-box-label" for="exampleCheck1">
                  I agree to the
                  <a href="/privacy-policy" class="">privacy policy</a></label
                >
              </div>
              <div class="mb-5">
                <button class="btn btn-large btn-primary">Send</button>
              </div>
              <span class="mt--20 notice"
                >Note: We will send a password to your email</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped></style>
