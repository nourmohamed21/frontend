function Alert(msg,type,timeout){
    AlertModal(msg,type,timeout);
}
function AlertModal(msg,type=null,timeout=7000){
    response={};
    if(type==null||type=='d'){
      response.debug=msg;
    }
    else if(type=="s"){
      response.success=msg;
    }
    else if(type=="e"){
      response.error=msg;
    }
    ResponseModal(response,timeout);
    // rand=Rand();
    // var alert=`<div class="alert alert-warning system-massage" id="msg${rand}" role="alert"> ${msg} |<span class="fe fe-cpu fe-16 mr-2"></span></div>`;
    // system_msg(alert,rand);
}


function ResponseModal(response,timeout=0){
    success="";
    error="";
    debug="";
    Y_or_C="";
    Y_or_N="";
  
    if (response.success!=""&&response.success!=undefined) {
        if (response.success==1) {
 
        }else{
          rand=Rand();
          var msg=`<div class="alert alert-success system-massage " id="msg${rand}" role="alert" ondblclick="system_msg_close('${rand}');">
            <button class="btn btn-sm float-left" type="button" onclick="system_msg_close('${rand}');"><span class="fe fe-x fe-16 mr-2"></span></button>
           `+response.success+`<span class="system-massage-span"> | ✅ </span></div>`;
          system_msg(msg,rand,timeout);
        }
    }
    if (response.error!=""&&response.error!=undefined) {
      rand=Rand();
      var msg=`<div class="alert alert-danger system-massage  shake" id="msg${rand}" role="alert" ondblclick="system_msg_close('${rand}');">
      <button class="btn btn-sm float-left" type="button" onclick="system_msg_close('${rand}');"><span class="fe fe-x fe-16 mr-2"></span></button>
       `+response.error+` <span class="system-massage-span">| 🚫 </span></div>`;
      system_msg(msg,rand,timeout);
    }
    if (response.debug!=""&&response.debug!=undefined) {
      rand=Rand();
      var msg=`<div class="alert alert-warning system-massage shake" id="msg${rand}" role="alert" ondblclick="system_msg_close('${rand}');">
      <button class="btn btn-sm float-left " type="button" onclick="system_msg_close('${rand}');"><span class="fe fe-x fe-16 mr-2"></span></button>
       `+response.debug+` <span class="system-massage-span">| ✉️ </span></div>`;
      system_msg(msg,rand);
    }
  /* 15/6/2023 update
    for resend post after Confirm with more prameters or call aNother method after
  */
  
  }


function system_msg(msg,rand,type){
    $("#system-msg-div").append(msg);
  
    if(type==undefined){
      setTimeout(() => {
          system_msg_close(rand);
      }, 10000);
    }
    else if(type!=0){
      setTimeout(() => {
        system_msg_close(rand);
      }, type);
    }
   
  }
  function system_msg_close(rand){
     
        $("#msg"+rand).hide(500);
        setTimeout(() => {
          $("#msg"+rand).remove();
        }, 3000);
   
  }
  function Rand(){
    var rand=Math.floor(Math.random() * 1000000);
    return rand;
}