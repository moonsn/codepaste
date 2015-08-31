<?php


/* file: post.php
 * author: Moonsn
 * mail: moonsn1994@gmail.com
 * disc: 提交处理页。
 *
*/

require 'inc.php';
date_default_timezone_set("Asia/Hong_Kong");



# 对Base64中的加号和反斜杠解码
function m_urldecode($str) {
	$str = str_replace("%2B", "+", $str);
	$str = str_replace("%2F", "\/", $str);
	return $str;
}

$biaoti = base64_decode(m_urldecode($_POST['title']));
$daima = addslashes(base64_decode(m_urldecode($_POST['code'])));
$lang = base64_decode(m_urldecode($_POST['lang']));
$info = base64_decode(m_urldecode($_POST['info']));
$times = time();


function response($eid, $msg){
	$info = array(
	"error" => $eid,
	"msg" => $msg
	);

	$res = json_encode($info);
	echo $res;
}


?>
<?php
if($biaoti=="")  {
	response("1", "同学，要填标题的哦！！！");
	exit();
}
if($daima=="") {
	response("1", "同学，你的代码没填吧？");
	exit();
}

$result = mysql_query("INSERT INTO code (title, content, lang, disc, addtime) 
	VALUES ('$biaoti', '$daima', '$lang', '$info', '$times')");

if(!$result){
	response("SQL ERROR : ".mysql_error(), "请联系管理员!");
	//echo "SQL ERROR : ".mysql_error();
	exit();
}
else{
	response("0", "<span>提交成功^_^</span><a class=&quot;btn-flat green-text&quot; href=./>首页<a>");
}
?>