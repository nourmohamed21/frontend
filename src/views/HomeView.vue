<template>

  <body :class="'layout-top-nav rtl '+selected_theme">

    <div class="wrapper" style="height: 100vh !important;width: 100vw;overflow: hidden;">
      <div style="height: 5vh;" v-if="section == 'apps'"></div>
      <header class="main-header blurred-box2 " v-if="section == 'run'"
        style="border-radius:0 ;border-bottom-right-radius: 0.5rem;border-bottom-left-radius: 0.5rem;">


        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top pl-10 " style="margin-right: 0 !important">

          <!-- Sidebar toggle button-->
          <div class="app-menu d-lg-block d-none">
            <img src="/public/images/System/logo-text.png" height="50px" alt="">
          </div>

          <div>
            <span class="text-light h3" v-html="selected_run?.name"></span>
          </div>

          <div class="navbar-custom-menu r-side">
            <ul class="nav navbar-nav">
              <li class="dropdown user2 user2-menu">
                <a href="#" class="waves-effect waves-light dropdown-toggle" data-target="#asdasd" data-toggle="dropdown" title="Themes">
                  <i class="icon-Settings"><span class="path1"></span><span class="path2"></span></i>
                </a>
                <ul id="asdasd" class="dropdown-menu animated fadeInDown">
                  <li class="user-body">
                    <a class="dropdown-item text-center" href="#"><i class="ti-settings text-muted mr-2"></i> Themes</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='light-skin theme-primary theme-sky'"><i class="ti-pencil text-muted mr-2"></i> Light Sky</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='dark-skin theme-primary theme-stars'"><i class="ti-pencil text-muted mr-2"></i> Dark Stars</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='light-skin theme-primary'"><i class="ti-pencil text-muted mr-2"></i> Light Primary</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='dark-skin theme-primary'"><i class="ti-pencil text-muted mr-2"></i> Dark Primary</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='light-skin theme-success'"><i class="ti-pencil text-muted mr-2"></i> Light Success</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='light-skin theme-danger'"><i class="ti-pencil text-muted mr-2"></i> Light Danger</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='light-skin theme-info'"><i class="ti-pencil text-muted mr-2"></i> Light Info</a>
                    <a class="dropdown-item text-left" href="#" @click="selected_theme='light-skin theme-warning'"><i class="ti-pencil text-muted mr-2"></i> Light Warning</a>
                  </li>
                </ul>
              </li>
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
          <section  id="collapseSection" style="background: none !important;height: 90vh;" @click="footerHide()">
            <transition name="fade">
              <div v-if="section == 'apps'" class="  p-3" style="width: 100%;height: 100%;">
                <div class="row justify-content-center" >
                    <div class="col-xl-3 col-md-4 col-sm-12">
                      <FormsSearchInput :modelValue="runSearch"></FormsSearchInput>
                    </div>
                  
                </div>
                <br>
                <div class="mb-5">
                  <ul class="nav nav-pills blurred-box justify-content-center mb-20 rounded shadow-none" style="width: fit-content;">
                    <li class=" nav-item pull-up" v-for="r in apps" :key="r.id" @click="selected_app = r"> <a href="#" :class="['nav-link text-light',{'transparent-box': (selected_app?.id) == r.id}]" data-toggle="tab" aria-expanded="false">{{ r.name }}</a> </li>
                    <li class=" nav-item pull-up"   @click="selected_app = null"> <a href="#" :class="['nav-link text-light',{'transparent-box': (selected_app?.id) == null}]" data-toggle="tab" aria-expanded="false">All</a> </li>
                  </ul>
                </div>
                <div class="row "  style="height: 60vh;overflow-x: hidden !important;overflow-y: auto !important;" >
                  <div class="col-xl-2 col-md-3 col-sm-6 mb-5 overflow-auto"  v-if="modules?.length > 0">
                    <div class="vtabs customvtab blurred-box shadow-none " style="width: 100%;height: 100%;">
                      <ul class="nav nav-tabs  tabs-vertical " role="tablist">
                        <li class="nav-item animated fadeInRight border-right" v-for="r in modules" :key="r.id"  @click="selected_module = r"> <a :class="['nav-link text-light',{'transparent-box': (selected_module?.id) == r.id}]" data-toggle="tab" href="#home3" role="tab" aria-expanded="true" aria-selected="true"><span >{{ r.name }}</span> </a> </li>
                      </ul>
                    </div>
                 
                  </div>
                  <div class="col overflow-auto"  >
                      <div class="row text-center">
                        <div class="col-3 animated   fadeInUp mb-5" v-for="r in runs" :key="r.id">
                            <div class="blurred-box pull-up" style="cursor: pointer;display: grid;justify-content: center;justify-items: center;" @click="selected_run = r">
                              <AppsLogo :image="r.image" height="60px" width="60px"></AppsLogo>
                              <span class="text-light">{{ r.name }} </span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="justify-content-center  d-flex position-absolute " style="width: 100%;bottom:10vh" v-if="showFavorites == null" >
                  <ul class="nav nav-pills blurred-box justify-content-center mb-20 rounded shadow-none" style="width: fit-content" >
                    <li class=" nav-item pull-up" v-for="r in categories" :key="r.id" @click="selected_category = r"> <a href="#" :class="['nav-link text-light',{'transparent-box': (selected_category?.id) == r.id}]" data-toggle="tab" aria-expanded="false">{{ r.name }}</a> </li>
                  </ul>
                </div>
					
              </div>
            </transition>
            <transition name="fade">
              <div v-if="section == 'run'" class="p-10"> 
                    <!-- Display dynamic component based on route name -->
                    <!-- <Suspense> -->
                      <!-- <template #default> -->
                        <component :is="dynamicComponent" />
                      <!-- </template> -->
                      <!-- <template #fallback> -->
                        <!-- <div>Loading...</div> -->
                      <!-- </template> -->
                    <!-- </Suspense> -->
              </div>
            </transition>
          </section>
          <!-- /.content -->
        </div>
      </div>
      <!-- /.content-wrapper -->
      <footer class="text-center justify-content-center"
        style="position: fixed;bottom: 0.5rem;width: 100vw;display: flex;" >
        <div style="width: fit-content;">

          <div :class="'blurred-box p-5 pull-up' + sectionBtnActive"  style="width: 75px;" v-if="showFavorites == null">
              <a href="#" @click="sectionController()" class="waves-effect waves-light nav-link rounded svg-bt-icon"
                title="">
                <AppsLogo></AppsLogo>
              </a>
          </div>
          
          <div style="width: 100%;">
            <!-- <transition name="fade"> -->

              <ul :class="favoritesClass + ' header-megamenu nav transparent-box p-2'" style="width: fit-content;"
                v-if="showFavorites">
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <AppsLogo image="qua.png" height="40px" width="40px"></AppsLogo>
                  </a>
                </li>
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <AppsLogo image="files.png" height="40px" width="40px"></AppsLogo>
                  </a>
                </li>
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <AppsLogo image="course.png" height="40px" width="40px"></AppsLogo>
                  </a>
                </li>
                <li class="btn-group nav-item ">
                  <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
                    <AppsLogo image="persone.png" height="40px" width="40px"></AppsLogo>
                  </a>
                </li>
              </ul>

            <!-- </transition> -->
          </div>
        </div>
        <div style="position: fixed;bottom: 0;right: 0">
          <button class="btn fa fa-star text-warning" @mouseenter="footerShow()" ></button>
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
import StatusCode404 from '@/components/system/statusCode404.vue';
import { markRaw } from 'vue';

export default {
  components: {
    FormsInput,
    FormsSearchInput,
    AppsLogo,
    StatusCode404,
  },
  props: {
    toApp: String,
    toModule: String,
    toRun: String
  },
  data() {
    
    return {
      selected_theme:'light-skin theme-primary theme-sky',
      showFavorites: true,
      favoritesClass: 'animated fadeIn',
      section: 'apps',
      apps: [],
      categories: [],
      user: {},
      runSearch: '',
      runs: [],
      modules: [],
      selected_app: null,
      selected_module: null,
      selected_category: {
        id: '1'
      },
      selected_run: null,
      dynamicComponent:null,
      allRuns:[]
    };
  },
  watch: {
    runSearch() {
      this.showRuns();
    },
    selected_app() {
      this.runs = [];
      this.selected_module = null;
      this.showModules();
      this.showRuns();
    },
    selected_module() {
      this.showRuns();
    },
    selected_category() {
      this.showRuns();
    },
    selected_run() {
      // first need to attach run's data to add selected app and module
      this.selected_app=this.apps.find(k=>k.id == this.selected_run.app_id); // set to make modules showen
      this.$nextTick(()=>{
        this.selected_module=this.modules.find(k=>k.id == this.selected_run.module_id);
        this.$nextTick(()=>{
          var route=`/${this.selected_app.code}/${this.selected_module.code}/${this.selected_run.code}`;
          this.$router.push(route).then(() => {
            this.$nextTick(() => {
              this.run();
            });
          });

        });
      });
    
      // Handle when a run is selected
      this.sectionController();
    }
  },
  mounted() {
    Api.get(config.apiHome, {}, (res) => {
      this.apps = res.apps;
      this.categories = res.category;
      this.user = res.user;
      
      this.showAllRuns();
    });
    this.run();
  },
  computed: {
    sectionBtnActive() {
      return this.section === 'apps' ? 'bg-light' : '';
    }
  },
  methods: {
    async run(){
        var asyncComponent;
        if(this.toRun!=null){
          this.section='run';
          try {
            var componentPath=`${this.toApp}/${this.toModule}/${this.toRun}`;
            // const component = await import(`./eduPlat/setupData/lecturersMainData.vue`);
            const component = await import(/* @vite-ignore */ `./${componentPath}.vue`);
            asyncComponent = markRaw(component.default);
          } catch (error) {
            asyncComponent=markRaw(StatusCode404);
          }
          this.dynamicComponent=asyncComponent;
        }
    },
    showAllRuns(){
      this.apps.forEach((e)=>{
        e.modules.forEach((m)=>{
          this.runs = this.runs.concat(m.runs); // Flatten the array by concatenating
        });
      });
      this.allRuns=[...this.runs];
    },
    showModules() {
      this.modules = this.selected_app?.modules;

    },
    showRuns() {
      if (this.runSearch=='') {
        if (this.selected_app!=null) {
          var phase1= this.allRuns.filter(k => k.app_id == this.selected_app.id);
          if (this.selected_module != null) {
             phase1 = this.selected_module?.runs;
          }
        }else{
          phase1 = this.allRuns;
        }
     
      }else{
        phase1 = this.allRuns.filter(k => k.name.toLowerCase().includes(this.runSearch.toLowerCase()));
      }

      let phase2 = phase1?.filter(k => k.category_id == this.selected_category.id);
      this.runs = phase2;
    },
    sectionController() {
      this.section = this.section === 'apps' ? 'run' : 'apps';
    },
    footerShow() {
      this.showFavorites = 'K';
      this.favoritesClass = 'animated fadeInUp';
    },
    footerHide() {
      // this.favoritesClass = 'animated fadeOutDown';
      // this.$nextTick(() => {
        this.showFavorites = null;
      // });
    },
    logout() {
      auth.setToken(''); // Remove token
      this.$router.push('/login');
    },
  }
};
</script>

