
function eventTable(vueApp,eventData,tableId){
    //   replace if have # id
    tableId = tableId.replace('#',"");
    var table = $(`#${tableId}`);
    $(eventData).each(function(){
        //check if not exist to add new tr
        if ($("#"+tableId+this.id).length) {
            var cUpdate=$("#"+tableId+this.id).attr('updated_at');
            if (this.updated_at!=cUpdate) {
                //means its a updated row
                $("#"+tableId+this.id).remove();
                vueApp.dagnos.push(this);
                Vue.nextTick(()=>{
                    flashThis(`#`+tableId+this.id);                
                })
            }

        }
        else{
            vueApp.dagnos.push(this);
            Vue.nextTick(()=>{
                flashThis(`#`+tableId+this.id);                
            })
        }
    });
    //now check old tr and remove
    table.find('tbody tr').each(function() {
        trId=$(this).attr('id');
        cId = trId.replace(tableId,"");
        // if (!resTable.find(`#${cId}`).length) {
        //    
        // }
        var result = $.grep(eventData, function(e){ return e.id == cId; });
        if (!result.length > 0) {
            $(`#${trId}`).hide(400);
            setTimeout(() => {
                $(`#${trId}`).remove();
            }, 1000);
        } 
    });
}
function Search(array){
    var data=array.data;
    var Api=array.Api;
    var form=array.form??'search_form';
    //make a loader
    lock();
    data.splice(0, data.length);
    // call api and get data
    api(Api,$('#'+form).serialize(),(res)=>{
        unlock();
        $(res).each(function(){
            data.push(this);
        });
    });
   
}
function Append(array){
    var data=array.data;
    var table=array.table;
    var key=array.key;
    var id=array.id??'id';

    if (!table.find(key => key[id] === data[id])) {
        table.push(data);
    }
}

function Remove(array) {
    var remove=array.remove;
    var table=array.table;
    table.splice(remove,1);
}