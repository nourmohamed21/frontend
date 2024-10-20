<template>

  <body class="layout-top-nav  light-skin theme-primary theme-sky">
    <div class="wrapper " style="height: 100vh !important;width: 100vw;overflow: hidden;">
      <div class="h-p100 content-wrapper">
        <div class="content-wrapper-before"></div>
        <div class="row align-items-center justify-content-md-center h-p100">
          <div class="col-12">
            <div class="row justify-content-center no-gutters">
              <div class="col-lg-5 col-md-5 col-12">
                <div class="transparent-box rounded10 shadow-lg ribbon-box p-5">
                  <div class="ribbon-two "><span class="bg-info ">ITEX</span></div>
                  <div class="content-top-agile p-20 pb-0">
                    <span class="text-info h1">LOGIN</span>
                  </div>
                  <div class="p-40">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
                        </div>
                        <input type="text" class="form-control pl-15 bg-transparent" placeholder="Username"
                          v-model="username" name="username" form="login" validate-error="Username is required"
                          required>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
                        </div>
                        <input type="password" class="form-control pl-15 bg-transparent" placeholder="Password"
                          v-model="password" validate-error="Password is required" form="login" required
                          @keyup.enter="login">
                      </div>
                    </div>
                    <div class="fog-pwd text-right">
                          <a @click="forgetPass" class="hover-warning"><i class="ion ion-locked"></i> Forgot password?</a><br>
                        </div>
                    <div class="row">
                      <!-- /.col -->
                      <div class="col-6">
                       
                      </div>
                      <div class="col-12 text-center ">
                        <button type="button"
                          class="waves-effect waves-light btn transparent-box text-dark  mb-5  mt-10 "
                          style="width: 100%;" @click="login">Submit</button>
                      </div>
                      <!-- /.col -->
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <CopyRight></CopyRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>

<script>

import config from '@/config/app';
import auth from '@/models/auth';
import { Info } from '@/plugins/Alert';
import Api from '@/plugins/Api';
import validate from '@/plugins/Validate';
import CopyRight from '@/components/system/CopyRight.vue';

export default {
  components:{
    CopyRight
  },

  data() {
    return {
      username: '',
      password: '',

    };
  },
  mounted() {
    this.getCurrentDate();

  },
  methods: {
    forgetPass() {
      Info('Relax and try to remember!');
    },
    getCurrentDate() {
      const date = new Date();
      const options = { year: 'numeric' };
      this.currentYear = date.toLocaleDateString(undefined, options);
    },
    login() {
      validate('login', () => {
        const form = {
          'username': this.username,
          'password': this.password
        };

        Api.post(`${config.apiTokenUrl}`, form, (res) => {
          auth.setToken(res.access_token ?? res.token);
          this.$router.push('/home');
        });

      });
    }
  }
};

</script>