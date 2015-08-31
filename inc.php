<?php
//配置文件
define("DBHOST", "localhost", true);
define("DBNAME", "code", true);
define("DBUSERNAME", "root", true);
define("DBPWD", "root", true);

$db = mysql_connect(DBHOST, DBUSERNAME, DBPWD);
if(!$db)
{
	die('Could not connect: ' . mysql_error());
}


//创建数据库

// if (mysql_query("CREATE DATABASE code",$db))
// {
// 	echo "Database created";
// }
// else
// {
// 	echo "Error creating database: " . mysql_error();
// }



//选择数据库
$db_selected = mysql_select_db(DBNAME, $db);

if (!$db_selected)
{
	die ("Can\'t use test_db : " . mysql_error());
}
mysql_query("set names utf8");
//创建表

// $sql = "CREATE TABLE code 
// (
// codeid int NOT NULL AUTO_INCREMENT,
// title varchar(50),
// lang varchar(50),
// content longtext,
// disc longtext,
// pwd int,
// addtime int,
// )";
// mysql_query($sql,$db);

//mysql_close($db_selected);

?>
