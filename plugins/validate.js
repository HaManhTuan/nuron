import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
// register global components
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
