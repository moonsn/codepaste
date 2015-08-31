
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
    encode: function(b) {
        var k = "",
        h, m, g, p, q, s, t = 0;
        for (b = Base64._utf8_encode(b); t < b.length;) h = b.charCodeAt(t++),
        m = b.charCodeAt(t++),
        g = b.charCodeAt(t++),
        p = h >> 2,
        h = (h & 3) << 4 | m >> 4,
        q = (m & 15) << 2 | g >> 6,
        s = g & 63,
        isNaN(m) ? q = s = 64 : isNaN(g) && (s = 64),
        k = k + this._keyStr.charAt(p) + this._keyStr.charAt(h) + this._keyStr.charAt(q) + this._keyStr.charAt(s);
        return k
    },
    decode: function(b) {
        var k = "",
        h, m, g, p, q, s = 0;
        for (b = b.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < b.length;) h = this._keyStr.indexOf(b.charAt(s++)),
        m = this._keyStr.indexOf(b.charAt(s++)),
        p = this._keyStr.indexOf(b.charAt(s++)),
        q = this._keyStr.indexOf(b.charAt(s++)),
        h = h << 2 | m >> 4,
        m = (m & 15) << 4 | p >> 2,
        g = (p & 3) << 6 | q,
        k += String.fromCharCode(h),
        64 != p && (k += String.fromCharCode(m)),
        64 != q && (k += String.fromCharCode(g));
        return k = Base64._utf8_decode(k)
    },
    _utf8_encode: function(b) {
        b = b.replace(/\r\n/g, "\n");
        for (var k = "",
        h = 0; h < b.length; h++) {
            var m = b.charCodeAt(h);
            128 > m ? k += String.fromCharCode(m) : (127 < m && 2048 > m ? k += String.fromCharCode(m >> 6 | 192) : (k += String.fromCharCode(m >> 12 | 224), k += String.fromCharCode(m >> 6 & 63 | 128)), k += String.fromCharCode(m & 63 | 128))
        }
        return k
    },
    _utf8_decode: function(b) {
        for (var k = "",
        h = 0,
        m = c1 = c2 = 0; h < b.length;) m = b.charCodeAt(h),
        128 > m ? (k += String.fromCharCode(m), h++) : 191 < m && 224 > m ? (c2 = b.charCodeAt(h + 1), k += String.fromCharCode((m & 31) << 6 | c2 & 63), h += 2) : (c2 = b.charCodeAt(h + 1), c3 = b.charCodeAt(h + 2), k += String.fromCharCode((m & 15) << 12 | (c2 & 63) << 6 | c3 & 63), h += 3);
        return k
    }
};


function saveUserInfo(){
    //获取接受返回信息层
    var msg = document.getElementById("msg");

    // Base64中的加号和反斜杠编码，后台记得解码哦
    function URLencode(sStr){
        console.log(sStr);
        return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
        console.log(sStr);
    }
    //decode !!!!
    function URLdecode(sStr){
        return escape(sStr).replace(/%2B/g, '\+').replace(/%22/g,'\"').replace(/%27/g, '\'').replace(/%2F/g,'\/');        
    }


    //注意编码顺序
    var codeTitle  = URLencode(Base64.encode(eval(document.getElementById('title')).value));
    var codeLang   = URLencode(Base64.encode(eval(document.getElementById('lang')).value));
    var codeCode   = URLencode(Base64.encode(eval(document.getElementById('code')).value));
    var codeInfo   = URLencode(Base64.encode(eval(document.getElementById('info')).value));

   


    //接收表单的URL地址
    var url = "./post.php";
    
    
    //需要POST的值，把每个变量都通过&来联接
    var postStr   = "title="+ codeTitle +"&lang="+ codeLang +"&code="+ codeCode + "&info=" + codeInfo;
    
    //实例化Ajax
    //var ajax = InitAjax();
    
    
    var ajax = false;
    //开始初始化XMLHttpRequest对象
    if(window.XMLHttpRequest) { //Mozilla 浏览器
        ajax = new XMLHttpRequest();
            if (ajax.overrideMimeType) {//设置MiME类别
                ajax.overrideMimeType("text/xml");
            }
        }
    else if (window.ActiveXObject) { // IE浏览器
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!ajax) { // 异常，创建对象实例失败
        window.alert("不能创建XMLHttpRequest对象实例.");
        return false;
    }
    
    //通过Post方式打开连接
    ajax.open("POST", url, true);
    
    //定义传输的文件HTTP头信息
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    
    //发送POST数据
    ajax.send(postStr);
    
    //获取执行状态
    ajax.onreadystatechange = function() { 
       //如果执行状态成功，那么就把返回信息写到指定的层里
        if (ajax.readyState == 4 && ajax.status == 200) { 
            //msg.innerHTML = ajax.responseText;
            var t = ajax.responseText;

            //解析json
            var jsonobj=eval('('+t+')');

            //返回提示信息
            if(jsonobj.error == 0) {
                Materialize.toast(jsonobj.msg, 4000);
                console.log("提交成功");
                //提交跳转到首页
                window.location.href="./index.php"; 
            }else{
                Materialize.toast(jsonobj.msg, 4000);
                console.log(jsonobj.error);
            }

        } 
    } 
}
