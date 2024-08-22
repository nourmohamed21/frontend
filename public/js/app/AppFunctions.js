function addForm(classs,form){
  $('.'+classs).each(function(){
      $(this).attr('form',form);
  });
}
function tempForm(){
    $('.tempForm').each(function(){
        $(this).removeAttr('form');
    });
}

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

function lock2(){
  $(".btn").each(function(){
      $(this).attr('disabled',true);
  });
}


function lockBtn(btn){
    $(btn).attr('disabled',true);
    setTimeout(() => {
      $(btn).attr('disabled',false);
    }, 1500);
}
function Rand(){
    var rand=Math.floor(Math.random() * 1000000);
    return rand;
}
function reScript(type,name,option={}){
  if (type=="table") {
    $.getScript("js/dataTables/jquery.dataTables.min.js").done(function(){
      $.getScript('js/dataTables/dataTables.bootstrap4.min.js').done(function(){
        $(name).DataTable(option);
      //   {
      //     autoWidth: true,
      //     "lengthMenu": [
      //       [16, 32, 64, -1],
      //       [16, 32, 64, "All"]
      //     ]
      // }
      });
    });
  }
  if (type=="select") {
    
  }
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

function ConfirmPassword(btn){
 

      var actionaa=$(btn).attr('action');
      var formName=$(btn).attr('form');

      Pass(formName,actionaa);
}

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
  
  lock2();
  data['noloadmain']="Y";
  $.ajax({
    "url":url,
    "data":data,
    async: true,
    "type":"GET",
    success:function (response) {
      if (response === ''||response==''||response==null) {
        console.log('Response is empty'+response);
        setTimeout(() => {
            get(url,data,(res)=>{
              callback(res);
            });
        }, 1000);
      } else {
        unlock();
        setEasein();
        callback(response);
        Notifications(response); 
      }
        
      
    },
    error: function(xhr, status, error) {
   
        // response=JSON.parse(xhr['responseText']??xhr??['null']);
        // if (response.error) {
        //   ResponseModal({
        //     'error':response.error,
        //   });
        // }
        // else{
          ResponseModal({
            'error':'<span>!حدث خطأ اثناء التحميل</span>',
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
        // }
        
      unlock();
      appUnLoad();
    }
  });
};

function post(url,data,callback){
  lock();
  response='';
  $.ajax({
    "url":url,
    "data":data,
    async: true,
    "type":"post",
    "dataType":"json",
    success:function (response) {
        response['url']=url;
        response['data']=data;
        response['callback']=callback;
        ResponseModal(response);
        if(callback!=undefined){
          callback(response);
        }

        unlock();
    },
    error: function(xhr, status, error) {

      if(url!="/post/System/Api/Log/error"){
        ResponseModal({
          'error':'<span>!حدث خطأ اثناء إرسال البيانات</span>',
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

function ResponseModalOld(response){
  success="";
  error="";
  debug="";
  if (response.success!=""&&response.success!=undefined) {
    success=`<div class="alert alert-success" role="alert"><span class="fe fe-cpu fe-16 mr-2"></span> `+response.success+` </div>`;
  }
  if (response.error!=""&&response.error!=undefined) {
    error=`<div class="alert alert-danger" role="alert"><span class="fe fe-minus-circle fe-16 mr-2"></span> `+response.error+`</div>`;
  }
  if (response.debug!=""&&response.debug!=undefined) {
    debug=`<div class="alert alert-warning" role="alert"><span class="fe fe-minus-circle fe-16 mr-2"></span> `+response.debug+`</div>`;
  }
  if (response.error!=""||response.success!=""||response.debug!="") {
    if (response.success==1) {
        $('#modalDiv').html(`
        <div class="modal fade" easein="whirlln" id="ResponseModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
        <div class="modal-dialog modal-dialog-centered text-center" role="document">
              <div class="modal-content" style="background: none;border: none;">
                  <span class="fe fe-check-circle text-success text-center" style="font-size:1000%"></span>
              </div>
        </div>
    </div>
        `);
        setEasein();
        $('#ResponseModal').modal('show');
        setTimeout(function(){
          $('#ResponseModal').modal('hide');
          $(".modal-backdrop").remove();
        }, 1000);
    }
    else if(response.success!=undefined||response.error!=undefined||response.debug!=undefined) {
      $('#modalDiv').html(`
      <div class="modal fade" easein="whirlln" id="ResponseModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
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
      setEasein();
      $('#ResponseModal').modal('show');
    }   
  }
}

// function AlertModal(msg,type=null,timeout=7000){
//   response={};
//   if(type==null||type=='d'){
//     response.debug=msg;
//   }
//   else if(type=="s"){
//     response.success=msg;
//   }
//   else if(type=="e"){
//     response.error=msg;
//   }
//   ResponseModal(response,timeout);
//   // rand=Rand();
//   // var alert=`<div class="alert alert-warning system-massage" id="msg${rand}" role="alert"> ${msg} |<span class="fe fe-cpu fe-16 mr-2"></span></div>`;
//   // system_msg(alert,rand);
// }
function ConfirmModal(btn,notBtn){
  if (notBtn==undefined) {
    var title=$(btn).attr('data-modal-title');
    var body=$(btn).attr('data-modal-body');
    var action=$(btn).attr('data-modal-action');
  }else{
    var title=notBtn.title;
    var body=notBtn.body;
    var action=notBtn.action;
  }
  $('#modalDiv').html(`
  <div class="modal fade" easein="bounceIn" id="dataConfirmModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verticalModalTitle">`+title+`</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center text-dark"> 
            `+body+`
           </div>
          <div class="modal-footer">
            <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal">إلغاء</button>
            <button type="button" class="btn mb-2 btn-success text-light" style="padding:0px"><a class="btn btn-success text-light" `+action+`>تأكيد</a></button>
          </div>
        </div>
      </div>
  </div>`);
  setEasein();
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

$("body").ready(function(){

  Ready(()=>{
    setTimeout(() => {
      // $("#anvaix-body").velocity("fadeOut", { duration: 1000 });
      $("#anvaix-body").addClass('animated zoomOut');
      // $("#app").collapse('show');
    }, 2000);
  })
});
function appLoad() {
    // $('body').removeClass('collapsed');??

    // $("#app").collapse('hide');
    $("#app").removeClass('animated fadeInRight');
    $("#app").addClass('animated fadeOutRight');
    $('#page-loader').show(100);
}
function appUnLoad() {
    $("#app").collapse('show');
    $("#app").removeClass('animated fadeOutRight');
    $("#app").addClass('animated fadeInRight');
    $('#page-loader').hide(800);
    $(".modal-backdrop").hide();
}

//      Load end

function RunApp(route,name){
    appLoad();
    
    $.ajax({
        url:"/app/"+route,
        type:"GET",
        data:{
          'noloadmain':'Y'
        },
        error: function(xhr, status, error) {
          response=JSON.parse(xhr['responseText']);
          if (response.error) {
            ResponseModal({
              'error':response.error,
            });
          }
          else{
            AlertModal('!حدث خطأ اثناء التحميل','e');
          }
          appUnLoad();
        },
        success:function (response) {
            var newURL = `/app?redir=${route}&redir_name=${name}`; // The new URL you want to set
            history.pushState({}, undefined, newURL);


            $('#app').html($(response).find('#app').html());
            // $("#app").addClass('animated fadeInRight');
            $("#reload-btn").attr("route",route);
            $("#reload-btn").attr("route-name",name);
            if(name!=undefined){
              $(document).prop('title',name);
              $("#title").html(name);
            }
            Notifications(response);
            appUnLoad();
            setEasein();
           setTimeout(() => {
            $("#app").removeClass('animated fadeInRight');
            // $("#app").addClass('show');
           }, 2000);
        }
    });
    
}
