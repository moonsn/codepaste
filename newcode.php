<?php


include "header.php";

?>
<div id="msg"></div>
<div class="container">
	<div id="content">
		<div name="newcodeinfo" class="compose">

			<div class="input-field">
				<label for="xlInput3">代码标题</label>
				<input name="title" type="text" id="title" class="span7" />
			</div>
			<div class="input-field">
				<select name="lang" id="lang">
					<option value="c++">c++</option>
					<option value="php">php</option>
					<option value="css">css</option>
					<option value="java">java</option>
					<option value="python">python</option>
				</select>
			</div>
			<div class="input-field">
				<textarea id="code" name="code" class="materialize-textarea"></textarea>
				<label for="textarea1">代码</label>
			</div>
			<div class="input-field">
				<textarea id="info" name="info" class="materialize-textarea"></textarea>
				<label for="textarea1">一些说明(可选)</label>
			</div>
			<div class="input-field">
<button class="btn waves-effect waves-light" type="submit" name="action" onClick="saveUserInfo()">提交代码
    <i class="mdi-content-send right"></i>
  </button>				<a href="/"><button type="reset" class="waves-effect waves-light btn">放弃提交</button></a>
			</div>	
		</div>
	</div>
</div>



<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/materialize.min.js"></script>
	<script type="text/javascript" src="js/post.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	$('select').material_select();
});
</script>
</body>
</html>
