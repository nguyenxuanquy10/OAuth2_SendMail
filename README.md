# OAuth2_SendMail
<h1>Config email</h1>
<h2>1.Tạo ứng dụng trên Google CLoud Console cho Developer</h2>
Truy cập vào https://console.cloud.google.com và đăng nhập tài khoản google của các bạn
Chọn Select a project và add New Project 
Trở lại trang Dashboard và mở menu , chọn APIs & Services > Credentials
Chọn Create CreDentials > OAuth client Id ( sau đó nhập thông tin ) , User type là External 
Chọn Create Oauth client Id và điền link https://developers.google.com/oauthplayground vào mục Authorized Redirect URIs
Truy cập trang https://developers.google.com/oauthplayground cấu hình 
Nhập  https://mail.google.com  vào Input your own scopes 
Back trở APIs & Service chọn OAuth consent screen , sau đó add user là được 
Sau đó trở lại trang https://developers.google.com/oauthplayground lấy refesh token 
