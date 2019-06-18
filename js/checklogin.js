function checkLogin() {
    var username = $("#ten").val();
    var password = $("#matkhau").val();
    if(username != "nguyentinhuu"){
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
}

//  $(document).ready(function () {
//      $("#btnDangNhap").click(function() {
//         var username = $("#ten").val();
//         var password = $("#matkhau").val();
//         if(username != "nguyentinhuu"){
//             alert('Bạn nhập sai tên đăng nhập');
//             return false;
//         }
//         else if(password != "ps08917"){
//             alert('Bạn nhập sai mật khẩu');
//         }
//         else{
//             alert('Đăng nhập thành công!');
//             return true;
//         }
//      });
//  });