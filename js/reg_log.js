//register
function MobileTips(){
    var tip=`<span class="tip">请输入11位手机号码</span>`;
    $('#mobileTips').html(tip);
}
function checkMobile(){
    var mobileNo=$('#mobileNo').val();
    if(!mobileNo){
        var tip=`<span class="wrong"></span><span class="warning">手机号不能为空！</span>`;
    }else{
        var reg=/^(\+86|0086)?\s*1[34578]\d{9}$/ ;
        if(reg.test(mobileNo)){
            var tip=`<span class="right"></span>`;
        }else if(!reg.test(mobileNo)){
            var tip=`<span class="wrong"></span><span class="warning">手机号格式不正确</span>`;
        }
    }
    $('#mobileTips').html(tip);
}
function UsernameTips(){
    var tip=`<span class="tip">8-16个字母、数字、下划线</span>`;
    $('#unameTips').html(tip);
}
function checkUsername(){
    var Username=$('#userName').val();
    if(!Username){
        var tip=`<span class="wrong"></span><span class="warning">用户名不能为空！</span>`;
    }else{
        var reg=/^\w{8,16}$/ ;
        if(reg.test(Username)){
            var tip=`<span class="right"></span>`;
        }else if(!reg.test(Username)){
            var tip=`<span class="wrong"></span><span class="warning">用户名格式不正确</span>`;
        }
    }
    $('#unameTips').html(tip);
}
function pwdTips(){
    var tip=`<span class="tip">8-16个字母、数字</span>`;
    $('#pwdTips').html(tip);
}
function checkPwd(){
    var pwd=$('#pwd').val();
    if(!pwd){
        var tip=`<span class="wrong"></span><span class="warning">密码不能为空！</span>`;
        console.log(tip);
    }else{
        var reg=/^[A-Za-z0-9]{8,16}$/ ;
        if(reg.test(pwd)){
            var tip=`<span class="right"></span>`;
        }else if(!reg.test(pwd)){
            var tip=`<span class="wrong"></span><span class="warning">密码格式不正确</span>`;
        }
    }
    $('#pwdTips').html(tip);
}
function PwdConfirm(){
    var tip=`<span class="tip">请再次输入密码</span>`;
    $('#pwdConfirm').html(tip);
}
function checkConfirm(){
    var pwd=$('#pwd').val();
    var pwdagain=$('#pwdagain').val();
    if(!pwdagain){
        var tip=`<span class="wrong"></span><span class="warning">请确认密码！</span>`;
    }else{
        if(pwd==pwdagain){
            var tip=`<span class="right"></span>`;
        }else{
            var tip=`<span class="wrong"></span><span class="warning">密码不一致</span>`;
        }
    }
    $('#pwdConfirm').html(tip);
}
function submitReg(){
    var result=$('#mobileTips span').hasClass('right')&&$('#unameTips span').hasClass('right')&&$('#pwdTips span').hasClass('right')&&$('#pwdConfirm span').hasClass('right');
    var mobile=$('#mobileNo').val();
    var uName=$('#userName').val();
    var pwd=$('#pwd').val();
    if(result){
        $.ajax({
            type:"post",
            url:"data/register.php",
            data:{mobile:mobile,uName:uName,pwd:pwd},
            success:function(list){
                console.log(list);
                if(list){
                    var str=`<h1>注册成功！</h1><h1>5秒后跳转至登录页面 <a href="login.html">登录</a></h1>`;
                    $('.register').html(str);
                    setTimeout(function(){
                        location.href='login.html';
                    },5000)
                }else if(list==0){
                    var str=`<h1>用户名已被使用！注册失败！</h1><h1>5秒后请重新注册 <a href="register.html">注册</a></h1>`;
                    $('.register').html(str);
                    setTimeout(function(){
                        location.href='register.html';
                    },5000)
                }
            }
        })
    }
}
//login
function login(){
    var result=$('#unameTips span').hasClass('right')&&$('#pwdTips span').hasClass('right');
    var uName=$('#userName').val();
    var pwd=$('#pwd').val();
    if(result){
        $.ajax({
            type:"post",
            url:"data/login.php",
            data:{uName:uName,pwd:pwd},
            success:function(list){
                if(list){
                    var str=`<h1>登录成功！</h1><h1>5秒后跳转主页</h1>`;
                    $('.register').html(str);
                    setTimeout(function(){
                        location.href='index.html';
                    },5000)
                    sessionStorage['uid']=list.uid;
                    sessionStorage['uName']=list.uName;
                }else if(list===0){
                    var str=`<h1>用户名或密码错误！登录失败！</h1><h1>5秒后请重新登录 <a href="login.html">登录</a></h1>`;
                    $('.register').html(str);
                    setTimeout(function(){
                        location.href='login.html';
                    },5000)
                }
            }
        })
    }
}