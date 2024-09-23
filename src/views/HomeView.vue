<style>
.blurred-box {

  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  /* Apply blur effect to background */
  /* border: 1px solid rgba(255, 255, 255, 0.3);  */
  border-radius: 15px;
  /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Subtle shadow */
  margin: 0 auto;
  /* Center the box */
  color: #fff;
  /* Text color */
}

.transparent-box {
  background-color: rgba(255, 255, 255, 0.7);
  /* Semi-transparent white */
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* Light border */
  border-radius: 15px;
  /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Subtle shadow */
  margin: 0 auto;
  /* Center the box */
}
</style>
<template>

  <body class="layout-top-nav light-skin theme-primary rtl">

    <div class="wrapper" style="height: 100vh !important;width: 100vw;overflow: hidden;">

      <header class="main-header blurred-box"
        style="border-radius:0 ;border-bottom-right-radius: 0.5rem;border-bottom-left-radius: 0.5rem;">


        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top pl-10 "  style="margin-right: 0 !important">

          <!-- Sidebar toggle button-->
          <div class="app-menu">
            
          </div>
  
          <div>
            APP  NAME
          </div>

          <div class="navbar-custom-menu r-side">
            <ul class="nav navbar-nav">
              <li class="btn-group nav-item d-lg-inline-flex d-none">
                <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link rounded full-screen"
                  title="Full Screen">
                  <i class="icon-Expand-arrows"><span class="path1"></span><span class="path2"></span></i>
                </a>
              </li>

              <!-- Notifications -->
              <li class="dropdown notifications-menu">
                <a href="#" class="waves-effect waves-light dropdown-toggle" data-toggle="dropdown"
                  title="Notifications">
                  <i class="icon-Notifications"><span class="path1"></span><span class="path2"></span></i>
                </a>
                <ul class="dropdown-menu animated fadeInDown">

                  <li class="header">
                    <div class="p-20">
                      <div class="flexbox">
                        <div>
                          <h4 class="mb-0 mt-0">Notifications</h4>
                        </div>
                        <div>
                          <a href="#" class="text-danger">Clear All</a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu sm-scrol">
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper
                          diam posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor
                          pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-primary"></i> Nunc fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque
                          ipsum imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>

              <!-- User Account-->
              <li class="dropdown user user-menu">
                <a href="#" class="waves-effect waves-light dropdown-toggle" data-toggle="dropdown" title="User">
                  <i class="icon-User"><span class="path1"></span><span class="path2"></span></i>
                </a>
                <ul class="dropdown-menu animated fadeInDown">
                  <li class="user-body">
                    <a class="dropdown-item" href="#"><i class="ti-user text-muted mr-2"></i> Profile</a>
                    <a class="dropdown-item" href="#"><i class="ti-wallet text-muted mr-2"></i> My Wallet</a>
                    <a class="dropdown-item" href="#"><i class="ti-settings text-muted mr-2"></i> Settings</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click="logout()"><i class="ti-lock text-muted mr-2"></i> Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

      </header>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <div class="content-wrapper-before"></div>
        <div class="container-full">
          <!-- Main content -->
          <section class="content" style="background: none !important">
            
          </section>
          <!-- /.content -->
        </div>
      </div>
      <!-- /.content-wrapper -->
      <footer class="text-center justify-content-center" style="position: fixed;bottom: 0.5rem;width: 100vw;display: flex;" @mouseenter="footerShow()"  @mouseleave="footerHide()" >
        <div style="width: fit-content;display: flex;">
          <div :class=" ' blurred-box p-2 d-flex'">
              <ul class="header-megamenu nav">
                <li>
                  <div class="blurred-box p-5">
                    <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                      <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502 502" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#ffffff;" d="M176.062,222.224h-121.1C30.13,222.224,10,202.093,10,177.261v-121.1 c0-24.832,20.13-44.963,44.963-44.963h121.1c24.832,0,44.963,20.13,44.963,44.963v121.1 C221.025,202.093,200.894,222.224,176.062,222.224z"></path> <path d="M176.062,232.224H54.963C24.656,232.224,0,207.567,0,177.261V56.162C0,25.855,24.656,1.199,54.963,1.199h121.099 c30.307,0,54.963,24.656,54.963,54.963v121.099C231.025,207.567,206.369,232.224,176.062,232.224z M54.963,21.199 C35.684,21.199,20,36.884,20,56.162v121.099c0,19.278,15.684,34.963,34.963,34.963h121.099c19.279,0,34.963-15.685,34.963-34.963 V56.162c0-19.278-15.684-34.963-34.963-34.963C176.062,21.199,54.963,21.199,54.963,21.199z"></path> </g> <g> <path d="M46.9,182c-5.523,0-10-4.478-10-10v-23c0-5.522,4.477-10,10-10s10,4.478,10,10v23C56.9,177.522,52.423,182,46.9,182z"></path> </g> <g> <path d="M46.9,122c-5.523,0-10-4.478-10-10V65.1c0-14.888,12.112-27,27-27H86c5.523,0,10,4.478,10,10s-4.477,10-10,10H63.9 c-3.86,0-7,3.141-7,7V112C56.9,117.522,52.423,122,46.9,122z"></path> </g> <g> <path style="fill:#77767b;" d="M447.037,222.224h-121.1c-24.832,0-44.963-20.13-44.963-44.963v-121.1 c0-24.832,20.13-44.963,44.963-44.963h121.1c24.832,0,44.963,20.13,44.963,44.963v121.1 C492,202.093,471.87,222.224,447.037,222.224z"></path> <path d="M447.037,232.224H325.938c-30.307,0-54.963-24.656-54.963-54.963V56.162c0-30.307,24.656-54.963,54.963-54.963h121.099 C477.344,1.199,502,25.855,502,56.162v121.099C502,207.567,477.344,232.224,447.037,232.224z M325.938,21.199 c-19.279,0-34.963,15.685-34.963,34.963v121.099c0,19.278,15.684,34.963,34.963,34.963h121.099 c19.279,0,34.963-15.685,34.963-34.963V56.162c0-19.278-15.684-34.963-34.963-34.963 C447.037,21.199,325.938,21.199,325.938,21.199z"></path> </g> <g> <path style="fill:#77767b;" d="M176.062,490.801h-121.1C30.13,490.801,10,470.671,10,445.838v-121.1 c0-24.832,20.13-44.963,44.963-44.963h121.1c24.832,0,44.963,20.13,44.963,44.963v121.1 C221.025,470.671,200.894,490.801,176.062,490.801z"></path> <path d="M176.062,500.801H54.963C24.656,500.801,0,476.145,0,445.838V324.739c0-30.307,24.656-54.963,54.963-54.963h121.099 c30.307,0,54.963,24.656,54.963,54.963v121.099C231.025,476.145,206.369,500.801,176.062,500.801z M54.963,289.776 C35.684,289.776,20,305.461,20,324.739v121.099c0,19.278,15.684,34.963,34.963,34.963h121.099 c19.279,0,34.963-15.685,34.963-34.963V324.739c0-19.278-15.684-34.963-34.963-34.963H54.963z"></path> </g> <g> <path style="fill:#77767b;" d="M447.037,490.801h-121.1c-24.832,0-44.963-20.13-44.963-44.963v-121.1 c0-24.832,20.13-44.963,44.963-44.963h121.1c24.832,0,44.963,20.13,44.963,44.963v121.1 C492,470.671,471.87,490.801,447.037,490.801z"></path> <path d="M447.037,500.801H325.938c-30.307,0-54.963-24.656-54.963-54.963V324.739c0-30.307,24.656-54.963,54.963-54.963h121.099 c30.307,0,54.963,24.656,54.963,54.963v121.099C502,476.145,477.344,500.801,447.037,500.801z M325.938,289.776 c-19.279,0-34.963,15.685-34.963,34.963v121.099c0,19.278,15.684,34.963,34.963,34.963h121.099 c19.279,0,34.963-15.685,34.963-34.963V324.739c0-19.278-15.684-34.963-34.963-34.963H325.938z"></path> </g> </g> </g></svg>
                    </a>
                  </div>
                </li>
            </ul>
          <transition name="fade" >
 
              <ul :class="favoritesClass + ' header-megamenu nav'"  v-if="showFavorites" >
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <i class="icon-Chat"><span class="path1"></span><span class="path2"></span></i>
                  </a>
                </li>
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <i class="icon-Chat"><span class="path1"></span><span class="path2"></span></i>
                  </a>
                </li>
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <i class="icon-Chat"><span class="path1"></span><span class="path2"></span></i>
                  </a>
                </li>
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <i class="icon-Chat"><span class="path1"></span><span class="path2"></span></i>
                  </a>
                </li>
              </ul>
            
          </transition>
          
        </div>
        </div>

      </footer>
      <TextField label="ASd" 
      />


      <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>

    </div>
    <!-- ./wrapper -->
  </body>
</template>
<script>
import TextField from '@/components/forms/TextField.vue';
import config from '@/config/app';
import auth from '@/models/auth';
import Api from '@/plugins/Api';


export default {
  components() {
    // CopyRight
    TextField
  },
  data() {
      return {
        showFavorites:null,
        favoritesClass: 'animated fadeOut'
      }
  },
  setup() {

    Api.get(config.apiHome, {}, (res) => {
      console.log(res);

    });
  },
  methods: {
    footerShow(){
      this.showFavorites='K';
      this.favoritesClass='animated fadeInRight';
    },
    footerHide(){
      this.favoritesClass='animated fadeOutRight';
      this.$nextTick(function(){
        this.showFavorites=null;
      });

    },

    logout() {
      auth.setToken('');// remove token
      this.$router.push('/login');
    }
  }
};
</script>
