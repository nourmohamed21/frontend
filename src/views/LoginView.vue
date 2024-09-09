<template >
  <div class="bg-gradient-primary" style="height: 100vh;" >
    <div class="container h-p100 ">
    <div class="row align-items-center justify-content-md-center h-p100">
      <div class="col-12">
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-5 col-md-5 col-12">
            <div class="bg-white rounded30 shadow-lg ribbon-box">
              <div class="ribbon-two "><span class="bg-gradient-info-dark ">ITEX</span></div>
              <div class="content-top-agile p-20 pb-0">
                <h2 class="text-secondary">LOGIN</h2>
              </div>
              <div class="p-40">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
                    </div>
                    <input type="text" class="form-control pl-15 bg-transparent" placeholder="Username" v-model="username" name="username" form="login" validate-error="Username is required" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
                    </div>
                    <input type="password" class="form-control pl-15 bg-transparent" placeholder="Password" v-model="password" validate-error="Password is required" form="login" required @keyup.enter="login">
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
                      <a @click="forgetPass" class="hover-warning"><i
                          class="ion ion-locked"></i> Forgot password?</a><br>
                    </div>
                  </div>
                  <div class="col-12 text-center ">
                    <button type="button" class="waves-effect waves-light btn mb-5 bg-gradient-info-dark mt-10 " style="width: 100%;" @click="login">Submit</button>
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
</template>

<script>
import CopyRight from '@/components/system/CopyRight.vue';
import config from '@/config/app';
import auth from '@/models/auth';
import { Info } from '@/plugins/Alert';
import Api from '@/plugins/Api';
import validate from '@/plugins/Validate';

export default {
  components:{
    CopyRight,
    
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
    forgetPass(){
      Info('Relax and try to remember!');
    },
    getCurrentDate() {
      const date = new Date();
      const options = { year: 'numeric' };
      this.currentYear = date.toLocaleDateString(undefined, options);
    },
    login() {
      validate('login',()=>{
        const form={
          'username':this.username,
          'password':this.password
        };
        
        Api.post(`${config.apiTokenUrl}`,form,(res)=>{
          auth.setToken(res.access_token??res.token);
          this.$router.push('/home');
        });
        
      });
    }
  }
};

</script>