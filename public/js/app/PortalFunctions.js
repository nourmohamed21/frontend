

function api(url,data,callback){
  response='';
  // appLoad();
  lock();

  $.ajax({
    "url":`/api/${url}`,
    "data":data,
    "type":"get",
    "dataType":"json",
    success:function (response) {
          callback(response);
          activeRequests = $.active;
          if ( activeRequests==0 || activeRequests==1) {
            unlock();
          }
          
    },
    error: function(xhr, status, error) {
      if (xhr.status==401) {
        Alert('سيتم تحويلك  لتسجيل الدخول لاستكمال الاجراء','w');
        // console.log('Error! Status code: ' + );
        setTimeout(() => {
          var currentIPAddress = window.location.hostname;
          var currentPort = window.location.port;

          // Specify the link you want to open
          var linkToOpen = 'http://' + currentIPAddress +':'+currentPort+'/login?close_after_login=Y';
          // Open the link in a new tab
          window.open(linkToOpen, '_blank');
        }, 1500);
      }
      else{
        if(url!="/post/System/Api/Log/error"){
          ResponseModal({
            'error':'<span class="text-danger">!حدث خطأ اثناء إستقبال البيانات</span>',
          });
          if (Array.isArray(xhr['responseText']??null)) {
            errorText=JSON.parse(xhr['responseText']??[]);
          }else{
            errorText=JSON.stringify(xhr);
          }
          post('/post/System/Api/Log/error',{
            'route':url,
            'error':errorText,
            'description':data,
          });
        }
   
      }
      appUnLoad();
      unlock();
      
    }
  });
  
}

function reSelect(form){
  $('[form="'+form+'"]').each(function(){

    var selected=$(this).attr('reselect');
      if (selected!=undefined) {
        var id=$(this).attr('id');
        var name=$(this).attr('name');
        
        $(this).find('option[value="'+selected+'"]').prop('selected', true);
      }
  
  });
}
 
function formCheck(form,callback,cilent=false){
  
  $('.vaildationerrorspan').remove();
  function invalidForm(btn){
    
    $(btn).removeClass('formcheck-invalid shake animated');
    // $(btn).removeClass('formcheck-valid');
    setTimeout(() => {
      $(btn).addClass('formcheck-invalid shake animated');
    }, 500);
    // $(`<span class="text-danger vaildationerrorspan" style='font-size:smaller'>❌</span>`).insertAfter(btn);
    // new tab  method 

    if ($(btn).attr('tab')!=undefined) {

      var tab=$( "#"+$(btn).attr('tab') );  
      // $(tab).insertAfter(`<span class="text-danger vaildationerrorspan" style='font-size:smaller'>❌</span>`);

      // $(tab).removeClass('border border-danger');
      // $(tab).addClass('border border-danger');
      $(tab).removeClass('formcheck-invalid shake animated');
      $(tab).removeClass('formcheck-valid');
      setTimeout(() => {
        $(tab).addClass('formcheck-invalid shake animated');
      }, 500);

    }

    if ($(btn).hasClass('select2')) {
        $(btn).nextAll('span').first().removeClass('formcheck-invalid shake animated');
        $(btn).nextAll('span').first().removeClass('formcheck-valid');
        setTimeout(() => {
          $(btn).nextAll('span').first().addClass('formcheck-invalid shake animated');
        }, 500);
    }
 
  }
  function validForm(btn){

    // $(btn).removeClass('border border-danger');
    // $(btn).addClass('border border-success');
    $(btn).removeClass('formcheck-invalid shake animated');
    // $(btn).removeClass('formcheck-valid');
    $(btn).addClass('formcheck-valid');


    if ($(btn).attr('tab')!=undefined) {
      var tab=$( "#"+$(btn).attr('tab') );

      // $(tab).removeClass('border border-danger');
      $(tab).removeClass('formcheck-invalid shake animated');
      // $(tab).removeClass('formcheck-valid');
      $(tab).addClass('formcheck-valid');
    }

    if ($(btn).hasClass('select2')) {
      $(btn).nextAll('span').first().removeClass('formcheck-invalid shake animated');
      $(btn).nextAll('span').first().removeClass('formcheck-valid');
      $(btn).nextAll('span').first().addClass('formcheck-valid');
    }
  }

  function validate(e){
    if ($(e).attr('required')!=undefined&&$(e).prop('disabled')==false) {
            
        if ($(e).val()==""||$(e).val()==null) {
          
            invalidForm(e);
            ok=false;
        }else{
          // check number input
          if ($(e).attr('type')=="number"&&( (+ $(e).attr('min')) > (+$(e).val()) ||  (+$(e).attr('max')) < (+$(e).val()) )  ) {
            invalidForm(e);
            ok=false;
            
          }else{
            validForm(e);
          }
    
        }
    }
  }
  var ok=true;
  if ((typeof form)== 'string') {
    $('[form="'+form+'"]').each(function (){
      validate(this);
    });
  }
  else{
    validate(form);
  }

 
  if (callback==undefined) {
    return ok;
  }else{
    if (ok==true) {
        callback();
    }else{
    
        if (cilent==false) {
          Alert('برجاء التأكد من البيانات المدخلة!','w',3000);
        }
       
    }
  }

}

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

function postData(route,form,callback){
  lock();
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
          // fix response
            if ((typeof response)!='object') {
                response=JSON.parse(response);
            }

      
          ResponseModal(response);
          if(callback!=undefined){
            callback(response);
          }
          unlock();
        },
        error: function(xhr, status, error) {
          if(url!="/post/System/Api/Log/error"){
            ResponseModal({
              'error':'<span class="text-danger">!حدث خطأ اثناء إستقبال البيانات</span>',
            });
            if (Array.isArray(xhr['responseText']??null)) {
              errorText=JSON.parse(xhr['responseText']??[]);
            }else{
              errorText=JSON.stringify(xhr);
            }
            post('/post/System/Api/Log/error',{
              'route':url,
              'error':errorText,
              'description':data,
            });
          }
          appUnLoad();
          unlock();
        }
    });
}
function lock(){
  $(".btn").each(function(){
      $(this).attr('disabled',true);
  });
  $("#page-loader").show(200);
}
function unlock(){
$(".btn").each(function(){
    $(this).attr('disabled',false);
});
$("#page-loader").hide(400);
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

// function LoadThis(toLoad,route){
//   var width=$(toLoad).width();
//   var height=$(toLoad).height();
//   $(toLoad).html($("#page-loader").html());
//   $(toLoad).css({
//     "min-width": width,
//     "min-height": height
//   });
//   if (route!=undefined) {
//       get('/app/'+route,{},function callback(response){
//         $(toLoad).html($(response).find(toLoad).html());
   
//       });
//   }

// }

function LoadClass(toLoad,route,isResponse,fromLoad,callback2){
  $(toLoad).each(()=>{
    LoadThis(this,route,isResponse,fromLoad,callback2);
  });
}

function LoadThis(toLoad,route,isResponse,fromLoad,callback2){


  //new method
  var singlaName=toLoad.replace('.','#');
  if (route==undefined) {
    route=$("#reload-btn").attr('route');
  }
  if (isResponse=="form") {
    //means its a form make route as parametrs oraginal is serialize
    route=$("#reload-btn").attr('route')+"?"+route;
    isResponse=undefined;
  }

  // if (isResponse=="?") {
  //  //means its a array make route as serialize then convrt as prametr oraginal is array
  //   route=$(route).serializeArray();
  //   route=$("#reload-btn").attr('route')+"?"+route;
  //   isResponse=undefined;
  // }
  //if type table 

  if (toLoad.includes('.')) {
    $(toLoad).each((id)=>{
      LoopLoad($(singlaName+id));
    });
  }
  else{
    // if (!$(toLoad).is('table')) {
      LoopLoad(toLoad);
    // }
  }
  

  if (route!=undefined&&(isResponse==undefined || isResponse==false)) {
      get('/app/'+route,{},function callback(response){
  
        if (fromLoad!=undefined) {

          if (toLoad.includes('.')) {
            $(toLoad).each((id)=>{
              $(singlaName+id).html($(response).find(singlaName+id).html());
            });
          }
          else{
            $(toLoad).html($(response).find(fromLoad).html());
          }
        }else{
          if (toLoad.includes('.')) {
            $(toLoad).each((id)=>{
              $(singlaName+id).html($(response).find(singlaName+id).html());
            });
          }
          else{
            // if (!$(toLoad).is('table')) {
              $(toLoad).html($(response).find(toLoad).html());
              // tableUpdate(toLoad,response);
            // }
            // else{
              //mean its a table
              // tableUpdate(toLoad,response);
            // }
          }
        }
      
        $(toLoad).css({
          "min-width": "",
          "min-height": ""
        });
        setEasein();
        if(callback2!=undefined){
          callback2(response);
   
        }
      });
  }
  if (route!=undefined&&isResponse==true) {
    
      response=route;
      
      if (fromLoad!=undefined) {
        if (toLoad.includes('.')) {
          $(toLoad).each(()=>{
            $(this).html($(response).find(fromLoad).html());
          });
        }
        else{
          $(toLoad).html($(response).find(fromLoad).html());
        }
      }else{
        if (toLoad.includes('.')) {
          $(toLoad).each(()=>{
            $(this).html($(response).find(toLoad).html());
          });
        }
        else{
          $(toLoad).html($(response).find(toLoad).html());
        }
        
      }
      setEasein();
    $(toLoad).css({
      "min-width": "",
      "min-height": ""
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
      setEasein();
      callback(response);
    },
   
    error: function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.status==401) {
          Alert('سيتم تحويلك  لتسجيل الدخول لاستكمال الاجراء','w');
          // console.log('Error! Status code: ' + );
          setTimeout(() => {
            var currentIPAddress = window.location.hostname;
            var currentPort = window.location.port;

            // Specify the link you want to open
            var linkToOpen = 'http://' + currentIPAddress +':'+currentPort+'/login?close_after_login=Y';
            // Open the link in a new tab
            window.open(linkToOpen, '_blank');
          }, 1500);
        }
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

// function ResponseModal(response){
//   success="";
//   error="";
//   debug="";
//   if (response.success!="") {
//     success=`<div class="alert alert-success" role="alert"><span class="fe fe-cpu fe-16 mr-2"></span> `+response.success+` </div>`;
//   }
//   if (response.error!="") {
//     error=`<div class="alert alert-danger" role="alert"><span class="fe fe-minus-circle fe-16 mr-2"></span> `+response.error+`</div>`;
//   }
//   if (response.debug!="") {
//     debug=`<div class="alert alert-warning" role="alert"><span class="fe fe-minus-circle fe-16 mr-2"></span> `+response.debug+`</div>`;
//   }
//   if (response.error!=""||response.success!=""||response.debug!="") {
//     if (response.success==1) {
//         $('#modalDiv').html(`
//         <div class="modal fade" id="ResponseModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
//         <div class="modal-dialog modal-dialog-centered text-center" role="document">
//               <div class="modal-content" style="background: none;border: none;">
//                   <span class="fe fe-check-circle text-success text-center" style="font-size:1000%"></span>
//               </div>
//         </div>
//     </div>
//         `);
//         $('#ResponseModal').modal('show');
//         setTimeout(function(){
//           $('#ResponseModal').modal('hide');
//         }, 1000);
//     }
//     else {
//       $('#modalDiv').html(`
//       <div class="modal fade" id="ResponseModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
//           <div class="modal-dialog modal-dialog-centered" role="document">
//             <div class="modal-content">
//               <div class="modal-header text-center">
//                 <h5 class="modal-title" id="verticalModalTitle">استجابة العملية</h5>
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div class="modal-body text-left">
//                   `+success+`
//                   <br>
//                   `+error+`
//                   <br>
//                   `+debug+`
//               </div>
//               <div class="modal-footer">
//               <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal" >تم</button>
//               </div>
//             </div>
//           </div>
//       </div>`);
//       $('#ResponseModal').modal('show');
//     }   
//   }
// }

// function AlertModal(msg){
//   $('#modalDiv').html(`
//   <div class="modal fade" id="dataAlertModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
//       <div class="modal-dialog modal-dialog-centered" role="document">
//         <div class="modal-content">
//           <div class="modal-header text-center">
//             <h5 class="modal-title" id="verticalModalTitle">تنبية</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body text-center"> 
//               `+msg+`
//            </div>
//         </div>
//       </div>
//   </div>`);
//   $('#dataAlertModal').modal('show');
// }
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
