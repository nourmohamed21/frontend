<template>

    <div class="wrapper bg-gradient-info-dark" style="height: 100vh !important;width: 100vw !important;">

<header class="main-header">
  <div class="inside-header">
  <div class="d-flex align-items-center logo-box justify-content-between">	
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- logo-->
      <div class="logo-lg">
        <!-- <img src="!/images/System/logo-clear.png"  style="height: 7vh" alt="logo">  -->
        <img src="!/images/System/logo-text.png" style="height: 7vh" alt="logo">
        <!-- <span class="dark-logo"><img src="../images/logo-light-text.png" alt="logo"></span> -->
      </div>
    </a>	
  </div>  
  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top pl-10">
    <!-- Sidebar toggle button-->
    <div class="app-menu">
    <ul class="header-megamenu nav">
    
    </ul> 
    </div>

    <div class="navbar-custom-menu r-side">
    <ul class="nav navbar-nav">	
      <li class="btn-group nav-item d-lg-inline-flex d-none">
        <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link rounded full-screen" title="Full Screen">
          <i class="icon-Expand-arrows"><span class="path1"></span><span class="path2"></span></i>
        </a>
      </li>	  
      <li class="btn-group d-lg-inline-flex d-none">
        <div class="app-menu">
          <div class="search-bx mx-5">
            <form>
              <div class="input-group">
                <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
                <div class="input-group-append">
                <button class="btn" type="button" id="button-addon3"><i class="ti-search"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </li>
      <!-- Notifications -->
      <li class="dropdown notifications-menu">
      <a href="#" class="waves-effect waves-light dropdown-toggle" data-toggle="dropdown" title="Notifications">
        <i class="icon-Notifications"><span class="path1"></span><span class="path2"></span></i>
      </a>

      </li>	

      <!-- User Account-->
      <li class="dropdown user user-menu">
      <a href="#" class="waves-effect waves-light dropdown-toggle" data-toggle="dropdown" title="User">
        <i class="icon-User"><span class="path1"></span><span class="path2"></span></i>
      </a>
      <ul class="dropdown-menu animated flipInX">
        <li class="user-body">
         <a class="dropdown-item" href="#"><i class="ti-user text-muted mr-2"></i> Profile</a>
         <a class="dropdown-item" href="#"><i class="ti-wallet text-muted mr-2"></i> My Wallet</a>
         <a class="dropdown-item" href="#"><i class="ti-settings text-muted mr-2"></i> Settings</a>
         <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#"><i class="ti-lock text-muted mr-2"></i> Logout</a>
        </li>
      </ul>
      </li>	

      <!-- Control Sidebar Toggle Button -->
      <li>
        <a href="#" data-toggle="control-sidebar" title="Setting" class="waves-effect waves-light">
        <i class="icon-Settings"><span class="path1"></span><span class="path2"></span></i>
        </a>
      </li>

    </ul>
    </div>
  </nav>
  </div>
</header>

<nav class="main-nav" role="navigation">



  <!-- Sample menu definition -->
  <ul id="main-menu" class="sm sm-blue sm-rtl">
    <li><a href="email_index.html"><i class="icon-Mail-notification"><span class="path1"></span><span class="path2"></span></i>Emails</a></li>
  </ul>
</nav>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper"  style="background: #ECEEF7;">
  <div class="content-wrapper-before"></div>
  <div class="container-full">
  <!-- Main content -->
  <section class="content" >

  </section>
  <!-- /.content -->
  </div>
</div>
<!-- /.content-wrapper -->
<footer class="main-footer">
    <CopyRight></CopyRight>
</footer>


<!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
<div class="control-sidebar-bg"></div>

</div>


</template>

<script>
import CopyRight from '@/components/system/CopyRight.vue';
import config from '@/config/app';
import auth from '@/models/auth';
import Api from '@/plugins/Api';


export default {
  components(){
    CopyRight
  },
  setup(){
   
    Api.get(config.apiHome,{},(res)=>{
      console.log(res);
      
    });
  },
  methods: {
    logout() {
      auth.setToken('');
      this.$router.push('/login');
    }
  }
};
</script>
