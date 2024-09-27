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

.modal-backdrop.fade.show {
  display: none !important;
}
</style>
<template>

  <body class="layout-top-nav light-skin theme-primary rtl">

    <div class="wrapper" style="height: 100vh !important;width: 100vw;overflow: hidden;">
      <div style="height: 5vh;" v-if="section == 'apps'"></div>
      <header class="main-header blurred-box " v-if="section == 'run'"
        style="border-radius:0 ;border-bottom-right-radius: 0.5rem;border-bottom-left-radius: 0.5rem;">


        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top pl-10 " style="margin-right: 0 !important">

          <!-- Sidebar toggle button-->
          <div class="app-menu">

          </div>

          <div>
            APP NAME
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
                          <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
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
                    <a class="dropdown-item" href="#" @click="logout()"><i class="ti-lock text-muted mr-2"></i>
                      Logout</a>
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
          <section  id="collapseSection" style="background: none !important;height: 90vh;">
            <transition name="fade">
              <div v-if="section == 'apps'" class="blurred-box  p-3" style="width: 100%;height: 100%;">
                <div class="row justify-content-center" >
                    <div class="col-xl-3 col-md-4 col-sm-12">
                      <FormsSearchInput v-model="runSearch"></FormsSearchInput>
                    </div>
                  
                </div>
                <br>
                <div>
                  <ul class="nav nav-pills transparent-box justify-content-center mb-20 rounded p-1" >
                    <li class=" nav-item pull-up" v-for="r in apps" :key="r.id" @click="selected_app = r"> <a href="#" :class="['nav-link',{'active': (selected_app?.id) == r.id}]" data-toggle="tab" aria-expanded="false">{{ r.name }}</a> </li>
                  </ul>
                </div>
                <div class="row " >
                  <div class="col-xl-3 col-sm-6 mb-5 overflow-auto"  style="max-height: 30vh;">
                    <div class="vtabs customvtab">
                      <ul class="nav nav-tabs tabs-vertical" role="tablist">
                        <li class="nav-item animated fadeInRight " v-for="r in modules" :key="r.id"  @click="selected_module = r"> <a :class="['nav-link text-light',{'active': (selected_module?.id) == r.id}]" data-toggle="tab" href="#home3" role="tab" aria-expanded="true" aria-selected="true"><span >{{ r.name }}</span> </a> </li>
                      </ul>
                    </div>
                 
                  </div>
                  <div class="col overflow-auto"  style="max-height: 30vh;">
                      <div class="row text-center">
                        <div class="col-3 animated  fadeInUp mb-5" v-for="r in runs" :key="r.id">
                            <div style="cursor: pointer">
                              <div class="card p-3 transparent-box pull-up" style="height: 75px !important;width: 75px !important;">
                                <AppsLogo height="40px" width="40px"></AppsLogo>
                              </div>
                              <span >{{ r.name }} </span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="justify-content-center  d-flex position-absolute " style="width: 100%;bottom: 0" >
                  <ul class="nav nav-pills transparent-box justify-content-center mb-20 rounded p-1 " style="width: fit-content" >
                    <li class=" nav-item pull-up" v-for="r in categories" :key="r.id" @click="selected_category = r"> <a href="#" :class="['nav-link',{'active': (selected_category?.id) == r.id}]" data-toggle="tab" aria-expanded="false">{{ r.name }}</a> </li>
                  </ul>
                </div>
					
              </div>
            </transition>
            <transition name="fade">
              <div v-if="section == 'run'">
                run
              </div>
            </transition>
          </section>
          <!-- /.content -->
        </div>
      </div>
      <!-- /.content-wrapper -->
      <footer class="text-center justify-content-center"
        style="position: fixed;bottom: 0.5rem;width: 100vw;display: flex;" @mouseenter="footerShow()"
        @mouseleave="footerHide()">
        <div style="width: fit-content;">
          <div style="width: 100%;position: absolute;bottom: 3.5rem;right: 0">
            <transition name="fade">

              <ul :class="favoritesClass + ' header-megamenu nav blurred-box p-2'" style="width: fit-content;"
                v-if="showFavorites">
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
          <ul class="header-megamenu nav">
            <li>
              <div :class="'blurred-box p-5 ' + sectionBtnActive">
                <a href="#" @click="sectionController()" class="waves-effect waves-light nav-link rounded svg-bt-icon"
                  title="">
                  <AppsLogo></AppsLogo>
                </a>
              </div>
            </li>
          </ul>
        </div>

      </footer>


    </div>


    <!-- ./wrapper -->
  </body>
</template>
<script>
import FormsSearchInput from '@/components/forms/FormsSearchInput.vue';
import FormsInput from '@/components/forms/FormsInput.vue';

import config from '@/config/app';
import auth from '@/models/auth';
import Api from '@/plugins/Api';
import AppsLogo from '@/components/system/AppsLogo.vue';


var home = {
  components:{
    FormsInput,
    FormsSearchInput,
    AppsLogo
  },
  data() {
    return {
      showFavorites: null,
      favoritesClass: 'animated fadeOut',
      section: 'apps',
      apps: [],
      categories: [],
      user: {},
      runSearch:'',
      runs:[],
      modules:[],
      selected_app:null,
      selected_module:null,
      selected_category: {
        'id':'1'
      },
      selected_run:null,
    }
  },
  watch:{
    runSearch(newVal){
      console.log(newVal);
      
    },
    selected_app(){
      this.runs=[];
      this.showModlues();
    },
    selected_module(){
      this.showRuns();
    }
  },
  mounted() {

    Api.get(config.apiHome, {}, (res) => {
      console.log(this.apps);
      this.apps = res.apps;
      this.categories = res.category;
      this.user = res.user;
    });
  },
  computed: {
    sectionBtnActive() {
      return this.section === 'apps' ? 'bg-light' : '';
    }
  },
  methods: {
    showModlues(){
     
      
      this.modules=this.selected_app.modules;
      console.log(this.modules);
    },
    showRuns(){
      this.runs=this.selected_module.runs;
    },
    sectionController() {
      if (this.section == 'apps') {
        this.section = 'run';
      } else {
        this.section = 'apps';
      }
    },
    footerShow() {
      this.showFavorites = 'K';
      this.favoritesClass = 'animated fadeInRight';
    },
    footerHide() {
      this.favoritesClass = 'animated fadeOutRight';
      this.$nextTick(function () {
        this.showFavorites = null;
      });

    },

    logout() {
      auth.setToken('');// remove token
      this.$router.push('/login');
    }
  }
};

export default home;
</script>
