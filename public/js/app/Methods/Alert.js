function Alert(msg,type='i',timeout=4000){

  if (type=="e") {
    type="error";
  }
  else if(type=="s"){
    type="success";
  }
  else if(type=="w"){

    type="warning";
  }
  else{
    type="info";
  }
  
  $.toast({
      heading: msg,
      text: '',
      position: 'top-right',
      loaderBg: '#ff6849',
      icon: type,
      hideAfter: timeout,
      onclick:null,
      // stack: 1,
  });
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

}

function ResponseModal(response,timeout=12000){
  success="";
  error="";
  debug="";
  Y_or_C="";
  Y_or_N="";

  if (response.success!=""&&response.success!=undefined) {
      if (response.success==1) {

        swal({
          title:"Done!",
          timer:1100,
          type: "success",   
        })
      }else{
        var msg=response.success;
        Alert(msg,'s',timeout);
      }
  }
  if (response.error!=""&&response.error!=undefined) {
    var msg=response.error;
    Alert(msg,'e',timeout);
  }
  if (response.debug!=""&&response.debug!=undefined) {
    var msg=response.debug;
    Alert(msg,'d',timeout);
  }
/* 15/6/2023 update
  for resend post after Confirm with more prameters or call aNother method after
*/
  if (response.Y_or_N!=""&&response.Y_or_N!=undefined) {
    ResponseY_or_N(response);
  }
  if (response.Y_or_C!=""&&response.Y_or_C!=undefined) {
    ResponseY_or_C(response);
  }
}
