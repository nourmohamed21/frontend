<template class="hold-transition light-skin text-center">
  <div class="container h-p100">
    <div class="row align-items-center justify-content-md-center h-p100">
      <div class="col-12">
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-5 col-md-5 col-12">
            <div class="bg-white rounded30 shadow-lg ribbon-box">
              <div class="ribbon-two ribbon-two-dark "><span>Login</span></div>
              <div class="content-top-agile p-20 pb-0">
                <h2 class="text-secondary">ITEX</h2>
              </div>
              <div class="p-40">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
                    </div>
                    <input type="text" class="form-control pl-15 bg-transparent" placeholder="Username" name="username"
                      form="login_form">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
                    </div>
                    <input type="password" class="form-control pl-15 bg-transparent" placeholder="Password"
                      name="password" form="login_form">
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="checkbox">
                      <input type="checkbox" id="basic_checkbox_1">
                      <label for="basic_checkbox_1">Remember Me</label>
                    </div>
                  </div>
                  <!-- /.col -->
                  <div class="col-6">
                    <div class="fog-pwd text-right">
                      <a onclick="Alert('Relax and try to remember!')" class="hover-warning"><i
                          class="ion ion-locked"></i> Forgot pwd?</a><br>
                    </div>
                  </div>
                  <div class="col-12 text-center">
                    <button type="button" class="waves-effect waves-light btn mb-5 bg-gradient-danger mt-10" @click="login">Submit</button>
                  </div>
                  <!-- /.col -->
                </div>
              </div>
            </div>
            <div class="text-center">
              <p class="text-muted "><img src="../../public/images/System/icon.ico" style="height: 5vh;" > Copyright ©  {{currentYear}} | <b > ITEX System </b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoaderStore } from '@/stores/loaderStore';


// import InputForm from '../components/forms/InputForm.vue';
export default {

  data() {
    return {
      username: '',
      password: '',
      currentYear:new Date('')
    };
  },
  mounted() {
    this.getCurrentDate();
  },
  methods: {
    getCurrentDate() {
      const date = new Date();
      const options = { year: 'numeric' };
      this.currentYear = date.toLocaleDateString(undefined, options);
    },
    login() {
      // Dummy token
      useLoaderStore().showLoader();
      // const token = 'dummy-token';
      // localStorage.setItem('token', token);
      // this.$router.push({ name: 'Home' });
    }
  }
};

</script>