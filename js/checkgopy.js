$(document).ready(function () {
    $("#gui").click(function() {
       var username = $("#email").val();
       var password = $("#hoten").val();
       var noidung =$("#noidung").val();
       if(username =='' || password == '' || noidung ==''){
           alert('vui lòng nhập đầy đủ dữ liệu')
           return false;
       }
       else{
           alert('Góp ý của bạn đã được gửi. Chân Thành Cảm ơn!')
           
       }

    });
});