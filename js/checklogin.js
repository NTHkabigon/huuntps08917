
 $(document).ready(function () {
     $("#btnDangNhap").click(function() {
        var username = $("#login-email").val();
        var password = $("#login-password").val();
        if(username =='' || password == ''){
            alert('vui lòng nhập đầy đủ dữ liệu')
            return false;
        }

        else if(username != "jos.nguyen56@gmail.com"){
            alert('Bạn nhập sai tên đăng nhập');
            return false;
        }
        else if(password != "ps08917"){
            alert('Bạn nhập sai mật khẩu');
        }
        else{
            alert('Đăng nhập thành công!');
            return true;
        }
     });
 });