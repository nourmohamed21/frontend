
function post(url,data,callback){
    // lock();
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
  
        //   unlock();
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
  

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});