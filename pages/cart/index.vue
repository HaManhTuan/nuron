<template>
  <div>
    <div class="rn-breadcrumb-inner ptb--30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h5 class="title text-center text-md-start">Nuron Cart</h5>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-list">
              <li class="item"><a href="/" class="">Home</a></li>
              <li class="separator"><i class="feather-chevron-right"></i></li>
              <li class="item current">Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-area rn-section-gapTop">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="table-title-area d-flex">
              <i class="feather-briefcase"></i>
              <h3>The cart on Nuron</h3>
            </div>
            <div class="box-table table-responsive">
              <table class="table upcoming-projects">
                <thead>
                  <tr>
                    <th><span class="text-capitalize">No</span></th>
                    <th><span class="text-capitalize">Product</span></th>
                    <th><span class="text-capitalize">Amount</span></th>
                    <th><span class="text-capitalize">Price</span></th>
                  </tr>
                </thead>
                <tbody class="ranking">
                  <tr class="color-light">
                    <td><span>1.</span></td>
                    <td>
                      <div class="product-wrapper d-flex align-items-center">
                        <a href="/product/1" class="thumbnail"
                          ><img
                            src="/img/portfolio-05.jpg"
                            alt="Nft_Profile" /></a
                        ><span>Secure 25</span>
                      </div>
                    </td>
                    <td>
                      <div class="area-price-amount row">
                        <div class="col-md-4">
                          <div class="price"><span>7,50,000</span></div>
                        </div>
                        <div class="col-md-8">
                          <div class="x-area">
                            <span class="x">x</span>
                            <input
                              type="number"
                              class="amount"
                              :value="amount"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span class="color-red">-310.63%</span></td>
                  </tr>
                  <tr class="">
                    <td><span>2.</span></td>
                    <td>
                      <div class="product-wrapper d-flex align-items-center">
                        <a href="/product/1" class="thumbnail"
                          ><img
                            src="/img/portfolio-06.jpg"
                            alt="Nft_Profile" /></a
                        ><span>Secure 25</span>
                      </div>
                    </td>
                    <td>
                      <div class="area-price-amount row">
                        <div class="col-md-4">
                          <div class="price"><span>7,50,000</span></div>
                        </div>
                        <div class="col-md-8">
                          <div class="x-area">
                            <span class="x">x</span>
                            <input
                              type="number"
                              class="amount"
                              :value="amount"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span class="color-green">+310.63%</span></td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <div class="total-area">
                        <span class="total">Total: </span>
                      </div>
                    </td>
                    <td>
                      <span class="color-red total-price">$180</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--            <nav-->
            <!--              class="pagination-wrapper"-->
            <!--              aria-label="Page navigation example"-->
            <!--            >-->
            <!--              <ul class="pagination">-->
            <!--                <li class="page-item disabled">-->
            <!--                  <a class="page-link" href=""> Previous </a>-->
            <!--                </li>-->
            <!--                <li class="page-item">-->
            <!--                  <a class="page-link active" href="">1</a>-->
            <!--                </li>-->
            <!--                <li class="page-item"><a class="page-link" href="">2</a></li>-->
            <!--                <li class="page-item"><a class="page-link" href="">3</a></li>-->
            <!--                <li class="page-item">-->
            <!--                  <a class="page-link" href=""> Next </a>-->
            <!--                </li>-->
            <!--              </ul>-->
            <!--            </nav>-->
          </div>
          <div class="col-4">
            <div class="table-title-area d-flex">
              <i class="feather-info"></i>
              <h3>Orders</h3>
            </div>
            <div class="form-wrapper-one registration-area">
              <form>
                <div class="mb-5">
                  <label for="firstName" class="form-label">First name</label
                  ><input id="firstName" type="text" />
                </div>
                <div class="mb-5">
                  <label for="sastName" class="form-label">Last name</label
                  ><input id="sastName" type="email" />
                </div>
                <div class="mb-5">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  ><input id="exampleInputEmail1" type="email" />
                </div>
                <div class="mb-5">
                  <label for="phoneNumber" class="form-label"
                    >Phone Number</label
                  ><input id="phoneNumber" type="text" />
                </div>
                <div class="mb-5">
                  <label for="addressInput" class="form-label">Address</label
                  ><textarea
                    id="addressInput"
                    name=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="mb-5">
                  <label for="notInput" class="form-label">Note</label
                  ><textarea
                    id="notInput"
                    name=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  type="button"
                  class="btn btn-primary-alta mt--30 btn-checkout"
                  @click="goToCheckout"
                >
                  Checkout <i class="feather-arrow-right"></i>
                </button>
              </form>
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
  data() {
    return {
      amount: 1,
    };
  },
  methods: {
    goToCheckout() {
      console.log("hi");
    },
  },
};
</script>

<style scoped lang="scss">
.amount {
  width: 80px;
  border: 1px solid;
  margin-left: 10px;
  text-align: center;
}
.x {
  margin: 0 10px;
}
.total-area {
  .total {
    color: var(--color-heading);
    font-size: 20px;
    text-transform: none;
  }
}
.total-price {
  font-size: 24px;
}
.btn-checkout {
  width: 100%;
}
</style>
