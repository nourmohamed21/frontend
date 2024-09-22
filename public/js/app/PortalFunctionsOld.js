
function formCheck(form){
  var ok=true;
  $('[form="'+form+'"]').each(function (){
    if ($(this).attr('required')!=undefined) {
      
        if ($(this).val()==""||$(this).val()==null) {
          
            $(this).addClass('border border-danger');
            ok=false;
        }else{
          $(this).removeClass('border border-danger');
          $(this).addClass('border border-success');
        }
    }
  });
  return ok;
}

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
function postData(route,form,callback){

  var data = new FormData();  
    $("[form='"+form+"']").each(function (){
        // check if has name
        if ($(this).attr('name')!=undefined) {
          if ($(this).attr('type')=="file") {
          
            data.append($(this).attr('name') ,$(this)[0].files[0]);
          }else{
            data.append($(this).attr('name') ,$(this).val());
          }
         
        }
    });

    $.ajax({
        
        'data': data,
        'url': route,
        'type':'POST',
        'cache': false,
        'contentType': false,
        'processData': false,
        success:function (response) {
          ResponseModal(response);
          if(callback!=undefined){
            callback(response);
          }
          
        },
        error: function(xhr, status, error) {
          AlertModal('<span class="text-danger">!حدث خطأ اثناء إرسال البيانات</span>');
          var win=window.open('/blank', '_blank');
          win.document.write(JSON.stringify(xhr));
        
        }
    });
}

function ConfirmPassword(btn){

  var action=$(btn).attr('action');
  var form=$(btn).attr('form');

  $('#modalDiv').html(`
      <div class="modal fade" id="ConfirmPasswordModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <center>
                  <h5 class="modal-title" id="verticalModalTitle">تأكيد الهوية</h5>
                </center>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-center">
                <center>
                  <div class="form-group" id="testasd">
                    <label for="inputPassword5"> برجاء كتابة كلمة السر الخاصة بالحساب</label>
                    <input type="password"  class="form-control" name="ConfirmPassword" form="`+form+`" id="inputPassword5">
                  </div>
                </center>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn mb-2 btn-success text-light"  onclick="$('#ConfirmPasswordModal').modal('hide');`+action+`" >Confirm</button>
              </div>
            </div>
          </div>
      </div>`);
    $("#ConfirmPasswordModal").modal('show');
}

function LoadThis(toLoad,route){
  var width=$(toLoad).width();
  var height=$(toLoad).height();
  $(toLoad).html($("#page-loader").html());
  $(toLoad).css({
    "min-width": width,
    "min-height": height
  });
  if (route!=undefined) {
      get('/app/'+route,{},function callback(response){
        $(toLoad).html($(response).find(toLoad).html());
   
      });
  }

}


function get(url,data,callback){
  // appLoad();
  $.ajax({
    "url":url,
    "data":data,
    "type":"GET",
    success:function (response) {
    
        appUnLoad();
    },
    failure: function (data, success, failure) {
      // response.success="";
      // response.error=failure;
      // ResponseModal(response);

    },
    error: function(xhr, status, error) {
      // AlertModal('<span class="text-danger">!حدث خطأ اثناء التحميل</span>');
      // appUnLoad();
    }
  });
};

function post(url,data,callback){
  response='';
  // appLoad();
  $.ajax({
    "url":url,
    "data":data,
    "type":"post",
    "dataType":"json",
    success:function (response) {
        ResponseModal(response);
        if(callback!=undefined){
          callback(response);
        }
    },
    error: function(xhr, status, error) {
      // AlertModal('<span class="text-danger">!حدث خطأ اثناء إرسال البيانات</span>');
      // var win=window.open('/blank', '_blank');
      // var err = eval("(" + xhr.Response + ")");
      // alert(JSON.stringify(xhr));
      // win.document.write(JSON.stringify(xhr));
      // appUnLoad();
    }
  });
  
}

function ResponseModal(response){
  success="";
  error="";
  debug="";
  if (response.success!="") {
    success=`<div class="alert alert-success" role="alert"><span class="fe fe-cpu fe-16 mr-2"></span> `+response.success+` </div>`;
  }
  if (response.error!="") {
    error=`<div class="alert alert-danger" role="alert"><span class="fe fe-minus-circle fe-16 mr-2"></span> `+response.error+`</div>`;
  }
  if (response.debug!="") {
    debug=`<div class="alert alert-warning" role="alert"><span class="fe fe-minus-circle fe-16 mr-2"></span> `+response.debug+`</div>`;
  }
  if (response.error!=""||response.success!=""||response.debug!="") {
    if (response.success==1) {
        $('#modalDiv').html(`
        <div class="modal fade" id="ResponseModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
        <div class="modal-dialog modal-dialog-centered text-center" role="document">
              <div class="modal-content" style="background: none;border: none;">
                  <span class="fe fe-check-circle text-success text-center" style="font-size:1000%"></span>
              </div>
        </div>
    </div>
        `);
        $('#ResponseModal').modal('show');
        setTimeout(function(){
          $('#ResponseModal').modal('hide');
        }, 1000);
    }
    else {
      $('#modalDiv').html(`
      <div class="modal fade" id="ResponseModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h5 class="modal-title" id="verticalModalTitle">استجابة العملية</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-left">
                  `+success+`
                  <br>
                  `+error+`
                  <br>
                  `+debug+`
              </div>
              <div class="modal-footer">
              <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal" >تم</button>
              </div>
            </div>
          </div>
      </div>`);
      $('#ResponseModal').modal('show');
    }   
  }
}

function AlertModal(msg){
  $('#modalDiv').html(`
  <div class="modal fade" id="dataAlertModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title" id="verticalModalTitle">تنبية</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center"> 
              `+msg+`
           </div>
        </div>
      </div>
  </div>`);
  $('#dataAlertModal').modal('show');
}
function ConfirmModal(btn){
  var title=$(btn).attr('data-modal-title');
  var body=$(btn).attr('data-modal-body');
  var action=$(btn).attr('data-modal-action');
  $('#modalDiv').html(`
  <div class="modal fade" id="dataConfirmModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verticalModalTitle">`+title+`</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center"> 
            `+body+`
           </div>
          <div class="modal-footer">
            <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal">إلغاء</button>
            <button type="button" class="btn mb-2 btn-success text-light" style="padding:0px"><a class="btn btn-success text-light" `+action+`>تأكيد</a></button>
          </div>
        </div>
      </div>
  </div>`);
  $('#dataConfirmModal').modal('show');
}
///       Load
$("#page").ready(function(){
  $("#page").show();
  $('#page-loader').hide(100);
});
function pageLoad() {
  $('body').removeClass('collapsed');
  $("#page").hide();
  $('#page-loader').show(100);
}
function pageUnLoad() {
  $("#page").show(400);
  $('#page-loader').hide(800);
}

$("#app").ready(function(){   
    $("#app").show();
    $('#app-loader').hide(800);
});
function appLoad() {
    $('body').removeClass('collapsed');
    $("#app").hide();
    $('#app-loader').show(100);
}
function appUnLoad() {
    $("#app").show(400);
    $('#app-loader').hide(800);
}

//      Load end

function PortalRun(route){
    appLoad();
    $.ajax({
        url:"/portal/"+route,
        type:"GET",
        data:{

        },
        error:function () {
            AlertModal('<span class="text-danger">!حدث خطأ اثناء التحميل</span>');
            appUnLoad();
        },
        success:function (response) {
          
            $('#app').html($(response).find('#app').html());
            appUnLoad();
        }
    });
   $("#reload-btn").attr("route",route);   
}
function SetApp(app) {
  data={
    "app":app
  };
  post('post/System/Services/ServicesApps/SetApp',data);
  $('.close').click();
  pageLoad();
  RunApp('');
  $('#ApplicationsModal').load('/app #ApplicationsModal');
  $('#leftSidebar').load('/app #leftSidebar',function(){
    pageUnLoad();
  });

}
