$("#btnclick").click(function(){
    var txtvalue = $("#txtbox").val();
    var ha = $("#WEB").val();
    
    
    (function myLoop(i) {
      setTimeout(function() {
       
    $.ajax({
      method: "POST",
      url: ""+ha+"",
      contentType: "application/json",
      data: JSON.stringify({
      content: ""+txtvalue+""
    
      })
    })
         
        if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
      }, 1000)
    })(Infinity);
    $("#de").click(function(){
    $.ajax({
      method: "DELETE",
      url: ""+ha+"",
      contentType: "application/json",
      data: JSON.stringify({})
    })
    })
    })
    