$(document).ready(function(){
    function hora(){
        $.ajax({
          type:'GET',
          url:'hora.php',
          success:function($hora){
            $('#hora').html($hora);
            setTimeout(hora(),1000);
          }
        });
    }
    setTimeout(hora(),1000); //actualiza cada 1 segundo
});
