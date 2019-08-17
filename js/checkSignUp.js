
 $(document).ready(function () {
    $("#btnDangKy").click(function() {
       var user = $("#signup-email").val();
       var pass = $("#signup-password").val();
       var cofim = $("#signup-password-confirm").val();
       var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(user =='' || pass == '' || cofim == ''){
           alert('vui lòng nhập đầy đủ dữ liệu')
           return false;
       }      
	    else if (emailPattern.test(String(user).toLowerCase()) == false) {
		alert("Email không hợp lệ");
		$("#Email").focus();
        return;        
	}
       else if( cofim != pass){
           alert('Nhập lại mật khẩu không giống với mật khẩu của bạn. Vui lòng nhập lại!')
           return false
       }
       else {
           alert('Đăng ký tài khoản thành công!')
           
       }
    });
});