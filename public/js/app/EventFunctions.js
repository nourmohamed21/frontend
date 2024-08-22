function eventTable(data,callback) {
    data.each(function(key){
        callback(this);
    });
}