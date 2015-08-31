<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>RunJS</title>
	<script class="jquery library" src="script/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="http://static.oschina.net/js/syntax-highlighter-2.1.382/scripts/brush.js"></script>
	<link type="text/css" rel="stylesheet" href="http://static.oschina.net/js/syntax-highlighter-2.1.382/styles/shCore.css"/>
	<link type="text/css" rel="stylesheet" href="http://static.oschina.net/js/syntax-highlighter-2.1.382/styles/shThemeDefault.css"/>
	<script type="text/javascript">
	$(document).ready(function(){
		SyntaxHighlighter.config.clipboardSwf = 'script/clipboard.swf';
		SyntaxHighlighter.all();
	});
	</script>
</head>
<body>
	<h1>
		代码高亮演示 SyntaxHighlighter
	</h1>
	<pre class='brush: java'>
		@Override
		public void init(FilterConfig cfg) throws ServletException {
		super.init(cfg);
		OnlineUserManager.init();
		//this._dataInit();
	}

</pre>
</body>
</html>