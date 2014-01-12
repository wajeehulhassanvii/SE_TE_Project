$(document).ready(function(){
  $('#btn').on("click",function(){
      var inputdata = $('#userName').val();
      $.ajax({
          url:'/login',
          type:'post',
          data:{inputdata:inputdata},
          success:function(){
              alert("Profile Succcesfuly created ");
          },
          error:function(){
              alert("Error");
          }
      })
  });

});
