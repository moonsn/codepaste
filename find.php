<?php


/* file: find.php
 * author: Moonsn
 * mail: moonsn1994@gmail.com
 * disc: 代码显示界面兼查找代码。
 *
 */

require 'inc.php';
include_once 'geshi/geshi.php';
date_default_timezone_set("Asia/Hong_Kong");

$id = isset($_GET['id'])?$_GET['id']:1;

?>

<?php
if(isset($_GET['id'])){
	$id = $_GET['id'];
	$lineset = isset($_GET['line'])?$_GET['line']:1;
	$sql = "select * from code WHERE codeid = ".$id.";";
	$result = mysql_query($sql, $db);

	$arr = mysql_fetch_array($result);	
	$arr['content'] = htmlspecialchars($arr['content']);
	//选择需要加载的高亮包
	switch ($arr['lang']) {
		case 'c++':
			$lang = "cpp";
			$shimport = "shBrushCpp";
			break;
		case 'php':
			$lang = "php";
			$shimport = "shBrushPhp";
			break;
		case 'css':
			$lang = "css";
			$shimport = "shBrushCss";
			break;
		case 'java':
			$lang = "java";
			$shimport = "shBrushJava";
			break;
		case 'python':
			$lang = "python";
			$shimport  = "shBrushPython";
			break;
		default:
			$lang = "cpp";
			$shimport = "shBrushCpp";
			break;
	}
}



?>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title> iCode 代码粘贴服务</title>

	<script type="text/javascript" src="sh/scripts/shCore.js"></script>
	<script type="text/javascript" src='sh/scripts/<?php echo $shimport; ?>.js'></script>
	<link type="text/css" rel="stylesheet" href="sh/styles/shCore.css"/>
	<link type="text/css" rel="stylesheet" href="sh/styles/shThemeDefault.css"/>
	<script type="text/javascript">
		SyntaxHighlighter.config.clipboardSwf = 'sh/scripts/clipboard.swf';
		SyntaxHighlighter.all();
	</script>
	<!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</head>
<body>
<header>
	<nav>
    <div class="nav-wrapper #00b0ff light-blue accent-3">
      <a href="/index.php" class="brand-logo">iCode 代码粘贴服务</a>
    </div>
  </nav>
</header>
  <div class="fixed-action-btn" style="top: 25px; right: 24px;">
    <a class="btn-floating btn-large lighten-2" href="./newcode.php">
      <i class="large mdi-editor-mode-edit"></i>
    </a>
  </div>
<div class="container">
<div class="row">
		<div id="col s12 offset-s1">
			<div class="entry">
				<div class="codeinfo clearfix">
					<div class="title">
						<h2>#<?php echo $_GET['id'];?>：<a href="/find.php?id=<?php echo $arr['codeid']; ?>"><?php echo $arr['title']; ?></a>[<?php echo $arr['lang'];?>]</h2>
					</div>
				</div>
			</div>
			<div class="ibody"><pre class="brush: <?php echo $lang; ?>;">
<?php echo $arr["content"];?>
					</pre>
			</div>
			<div class="info">
				<span class="label notice">Code info</span>
				<blockquote>
					<p><p><?php echo $arr['disc']; ?></p>
					<p>
						<small><?php echo date('Y-m-d H:i:s', $arr['addtime']);?></small>
					</blockquote>

			</div>
		</div>
	</div>
</div>
</div>
</body>
</html>
