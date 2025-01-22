function newDate() {
    var time = new Date();
    var date_now =  new Date();
    date_now.setDate(date_now.getDate() + 1);
    $(".day").text(date_now.toLocaleString('us-en', {
      month: 'long', 
      day: 'numeric'
      
    }).split(' ')[0]);
    $(".month").text(date_now.toLocaleString('en-uk', {
      day: 'numeric',
      month: 'long' 
    }).split(' ')[1]);
  }
  setTimeout(newDate, 100);
  
  var myDate = new Date();
  function returnEndDate(d,h,m){
    myDate.setDate(myDate.getDate()+d);
    myDate.setHours(myDate.getHours()+h);
    myDate.setMinutes(myDate.getMinutes()+m);
    return myDate;
  }