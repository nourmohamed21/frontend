function Radio(btn,radioAttr){
  var current=$(btn).prop('checked');
  $('input[radio="' + radioAttr + '"]').prop('checked', false);
  if (current) {
    $(btn).prop('checked',true);
  }
};
function ResponseY_or_C(response){
  msg=response.Y_or_C.msg;
  parameter=response.Y_or_C.parameter;
  value=response.Y_or_C.value;
  method=response.Y_or_C.method;
  form=response.Y_or_C.form;

  $('#tempDiv').html(`
    <input type="hidden" form="${form}" name="${parameter}" value="${value}">
    <div id="reposne_reyuabt2h62g3u2bcfra882b31" class="modal fade"  easein="shake" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
                
              </div>
              <div class="modal-body text-center">
                  <p>${msg}</p>
              </div>
              <div class="modal-footer">
                  <button class="btn btn-danger" onclick="$('#reposne_reyuabt2h62g3u2bcfra882b31').modal('hide')" aria-hidden="true">
                      إلغاء الامر
                  </button>
                  <button class="btn btn-primary" onclick="${method}();$('#reposne_reyuabt2h62g3u2bcfra882b31').modal('hide')">
                      إستكمال العملية
                  </button>
              </div>
          </div>
      </div>
    </div>
  `);
  setEasein();
  $('#reposne_reyuabt2h62g3u2bcfra882b31').modal('show');
}
function autoValidate(btn){
    var form=$(btn).attr('form');
    formCheck(btn,()=>{},true);
}
function Active(btn,to_act) {
    if ($(btn).prop('checked')==true) {
        $(to_act).prop('disabled',false);
    }
    else{
      $(to_act).prop('disabled',true);
    }
}
function selectOption(selectTag, reselectValue) {
  // Find the option with the matching value and mark it as selected
  $(selectTag).find('option[value="' + reselectValue + '"]').prop('selected', true);
  $(selectTag).removeAttr('reselect');
}
function scaleThis(div, scaleX, scaleY) {
  if (div.includes('.')) {
    $(div).each(function(){
      var myDiv = $(this);
      myDiv.style.transform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    });
  }
  else{
    var myDiv = document.getElementById(div);
    myDiv.style.transform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
  }

}
function loopThis(callback,timeout=1000,route=$("#reload-btn").attr('route')){
  if (route==$("#reload-btn").attr('route')) {
    if($.active == 0) {
      callback();
      setTimeout(() => {
        loopThis(callback,route,timeout);
      }, timeout);
    }else{
      // Alert('else');
      setTimeout(() => {
        loopThis(callback,route,timeout);
      }, timeout);
    }
  }
}

function flashThis(btn,timeout=4000) {
  $(btn).removeClass('flash');
  $(btn).addClass('flash');
  setTimeout(() => {
    $(btn).removeClass('flash');
  }, timeout);
}

function serializeArray(myArray){
  //clear old temp
  $('#tempDiv').html('');
// create a new form element
const $form = $('<form id="temp_form">');
  // create an input field for each element in the array
  $.each(myArray, function(index, value) {
    const $input = $('<input>').attr({
      type: 'hidden',
      name: index,
      value: value,
      form:'temp_form'
    });
    $form.append($input);
  });
  // add the form to the DOM
  $('#tempDiv').html($form);
  return $("#temp_form").serialize();
}

function Ready(callback){
  $(document).ready(
    callback
  );
}
function LoopLoad(toLoad){
  
  var width=$(toLoad).width();
  var height=$(toLoad).height();
  var size=(+height) / parseFloat($("body").css("font-size"));
 
  //loader
  if (size>5) {
    size=5;
  }else if(size<2){
    size=2;
  }
  $("#atom").css({
    '--atom-size':size+"em",
    "position":'absolute'
  });
  $("#loader-body").css({
    "max-width": width,
    "max-height": height,
    "position":'absolute'
  });
  $(toLoad).html($("#page-loader").html());


  $(toLoad).css({
    "min-width": width,
    "min-height": height
  });
  $("#atom").css({
    '--atom-size':"",
    "position":''
  });


  //Finish
  $("#loader-body").css({
    "max-width": '',
    "max-height": '',
    "position":''
  });
}
function canvasChart(div,chartType,jsonData){
    // filter php array
    var chart = new CanvasJS.Chart(div, {
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      width: '',
      hight: '',

      data: [{
          type: chartType,
          showInLegend: "true",
          // legendText: "{label}",
          // indexLabelFontSize: 16,
        
          indexLabel: "{label} - {y}",
          // yValueFormatString: "฿#,##0",
          // dataPoints: [
          //     { y: 51.08, label: "Chrome"  },
          //     { y: 27.34, label: "Internet Explorer" },
          //     { y: 10.62, label: "Firefox" },
          //     { y: 5.02, label: "Microsoft Edge" },
          //     { y: 4.07, label: "Safari" },
          //     { y: 1.22, label: "Opera" },
          //     { y: 0.44, label: "Others" }
          // ]
          dataPoints:jsonData
      }]
  });
  chart.render();

  $('.canvasjs-chart-container').css({
      'position':'unset',
      'height': '400px',
  });
  $('.canvasjs-chart-tooltip').css({
    'position':'relative',
  });
  $('.canvasjs-chart-credit').remove();
}
function LoopThis(method,timeout,route=$("#reload-btn").attr('route')){
  setTimeout(() => {
    method;
  }, timeout);
  setInterval(() => {
    
  }, interval);
}

function Notifications(response){

    $(response).find('.notification').each(function(){
        id=$(this).attr('id');
        if($("#"+id).val()==undefined){
          $("#notifications_body").prepend($(response).find("#"+id).prop('outerHTML'));
        }
    });
    
// //
    if (response!=null) {
      $("#notifications_count").val($(response).find('#notifications_count').val());
    }
   
    if ($('#notifications_count').val()>0) {
      $("#notifications_dot").addClass('bg-success');
    }
    else{
      $("#notifications_dot").removeClass('bg-success');
    }
// //

    $('.notification_new').each(function(){
      if ($(this).attr('readed')=="N") {
        id=$(this).val();
          if ($("#notification_alert_"+id).val()==undefined) {
            title=$('#notification_title_'+id).html();
            message=$('#notification_massage_'+id).html();
            response=`${message}  <span  style="color:black;font-wight:bold">${title}</span>`;
            rand=id;
            var msg=`<div class="alert alert-primary system-massage shadow-lg"  id="msg${rand}" role="alert" ondblclick="system_msg_close('${rand}');">
              <button class="btn btn-sm float-left" type="button" onclick="system_msgmsg_close('${rand}');"><span class="fe fe-x fe-16 mr-2"></span></button>
            `+response+`<span class="system-massage-span"> | 🔔 </span></div>`;
            system_msg(msg,rand,0);
            $(this).attr('readed','Y');
            post('/post/System/Api/Nav/Seen',{'id':id});
            document.getElementById('notification_sound').play();
          }
      }
    });
}
function Print(div,callback=undefined){
  lock();
  $('.removeOnPrint').hide(1);
  var wasHidden=false;
  if ($(`#${div}`).is(':hidden')) {
    $(`#${div}`).show(1);
    var wasHidden=true;
  }
  $(`#${div}`).printThis({
    'afterPrint':function(){
      unlock();
      $('.removeOnPrint').show(1);
      // if (wasHidden) {
        $(`#${div}`).hide(1);
      // }
      if (callback!=undefined) {
        callback;
      }
    }
  });


}

function CheckAll(btn,check){
    var state=$(btn).prop('checked');
    if (state==false) {
        $(`.`+check).prop('checked',false);
    }
    else{
        $(`.`+check).prop('checked',false);
        $(`.`+check+":visible").prop('checked',true);
    }
}


function InfoTab(tab,id,info){

  $("#"+tab).find('#'+id).remove();
  $("#"+tab).append(`<li class="text-success" style="font-size:small" id="${id}">${info}</li>`);

}

function Pass(header,action){

    var brackets="()";
    if (action.includes('(')) {
      brackets='';
    }
    $('#AppTempDiv').html(`

    <div class="modal fade" easein="swoopIn" id="PassModal" tabindex="-10" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true" style="z-index: 999999;">
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
                  <input type="password"  class="form-control" name="ConfirmPassword" onkeydown="EnterPress(event,()=>{
                    $('#asdohibwqdvuausvbjagasdashuba').click()
                  })"  id="inputPassword5" form="${header}"/>
                </div>
              </center>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn mb-2 btn-success text-light" id="asdohibwqdvuausvbjagasdashuba"
              onclick="$('#PassModal').modal('hide');${action}${brackets};$('.modal-backdrop').remove();">تأكيد</button>
            </div>
          </div>
        </div>
    </div>`);

    setEasein();
    $("#PassModal").modal('show');
}
function Conf(btn){
    var cancel="";

    var title=$(btn).attr('title');
    if (title==undefined) {
      title=btn['title'];
    }
    var body=$(btn).attr('body');
    if (body==undefined) {
      body=btn['body'];
    }
    var action=$(btn).attr('action');
    if (action==undefined) {
      action=btn['action'];
    }

    //new method for return 
    if (action=="?") {
      // var def = $.Deferred();

      action='return true';
      // cancel=def.reject();
      cancel='return false';
      // return def.resolve();
    }
  
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
              <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal" onclick="${cancel}">إلغاء</button>
              <button type="button" class="btn mb-2 btn-success text-light" style="padding:0px"><a class="btn btn-success text-light" onclick="${action};$('#dataConfirmModal').modal('hide')">تأكيد</a></button>
            </div>
          </div>
        </div>
    </div>`);
    $('#dataConfirmModal').modal('show');
  }