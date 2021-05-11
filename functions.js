function geturl(){
    $.ajax({

        url : 'http://10.1.4.168:8000/url',
        type : 'get',
        dataType:'json',
        async: false,
    success : function(data) {              
       alert('Data: '+JSON.stringify(data));
    },
    error : function(request,error){
        alert("Request: "+JSON.stringify(error));
    }
    });}


    function getassign(){
    $.ajax({

        url : 'http://10.1.4.168:8000',
        type : 'get',
        dataType:'json',
        async: false,
    success : function(data) {              
       alert('Data: '+JSON.stringify(data));
       document.getElementById(ass).innerHTML = data;
    },
    error : function(request,error){
        alert("Request: "+JSON.stringify(error));
    }
    });}
    



function printText(){
var x = document.getElementById('input').value;
$.ajax({ 
        url: 'http://10.1.4.168:8000/post-test',
        type: "POST",
    dataType: "json",
    data: x,
    success: () => {
        alert('sent');
      },
    error: ()=> {
        alert('post failed')
    }

})

alert(userInput)}

