<?php

/* file: index.php
 * author: Moonsn
 * mail: moonsn1994@gmail.com
 * disc: 首页，列表显示代码标题。
 *
*/

require 'inc.php';

//GET 的当前页数
$pages = isset($_GET['pages'])?$_GET['pages']:1;


$_rows = 10;//每页显示数

//获取数据库记录数计算分页
$sql = "SELECT * FROM code;";
$result = mysql_query($sql, $db);
$sum = mysql_num_rows($result);
$_pages = ceil($sum/$_rows);
$start = ($pages>0?$pages-1:0)*$_rows;

$sql = "SELECT * FROM code WHERE codeid>=0 ORDER BY codeid DESC limit $start,$_rows;";
$result = mysql_query($sql, $db);

include "header.php";
?>





<main>
  <div class="fixed-action-btn" style="top: 25px; right: 24px;">
    <a class="btn-floating btn-large lighten-2" href="./newcode.php">
      <i class="large mdi-editor-mode-edit"></i>
    </a>
  </div>
	<div class="offcontainer">
		<div class="row">
			<div class="col s10 offset-s1">
				<div id="content">
					<table class="bordered hoverable striped">
				<thead>
					<tr>
						<th>序号</th>
						<th>标题</th>
						<th>介绍</th>
					</tr>
				</thead>
				<tbody>

					<?php
						while($arr = mysql_fetch_array($result)){
							echo "<tr>";
							echo "<td>#".$arr['codeid']."</td>";
							echo "<td><a href=\"/find.php?id=".$arr['codeid']."\">".$arr['title']."</a></td>";
							echo "<td><p>".$arr['disc']."</p>";
							echo "</td>";
							echo "</tr>";
						}
					?>
				</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="pagination col s10 offset-s1">
				<ul>
					<li class="prev"><?php echo "<a href=\"/index.php?pages=".(($pages-1)<=1?1:$pages-1)."\">"; ?><i class="mdi-navigation-chevron-left"></i></a></li>
					<?php 
						for($i = 1; $i <= $_pages; $i++){
							if($pages==$i){
								echo "<li class=\"active #0097a7 cyan darken-2\">";
							}
							else{
								echo "<li class=\"waves-effect\">";
							}
							echo "<a href=\"/index.php?pages=".$i."\">".$i."</a></li>";
						}
					?>
					<li class="next"><?php echo "<a href=\"/index.php?pages=".(($pages+1)>$_pages?$_pages:$pages+1)."\">"; ?><i class="mdi-navigation-chevron-right"></i></a></a></li>
				</ul>
			</div>
		</div>
	</div>
</main>

	<footer class="page-footer">
            <div class="container">
            <a href="http://m.moonsn.com/click.php?852"><img src="http://m.moonsn.com/image.php?852,small" alt="m.moonsn.com" /></a>&copy; iCode	
            © 2014 Copyright iCode
            <a class="grey-text text-lighten-4 right" href="#!">By moonsn</a>
            </div>

        </footer>
	      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>

</body>
</html>
