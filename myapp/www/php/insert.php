<?php

$data = json_decode(file_get_contents("php://input"));

$db_host = "localhost";
$db_user = "localhost";
$db_password = "localhost";
$db_ = "localhost";

$log = mysql_real_escape_string($data->log);
$pass = mysql_real_escape_string($data->pass);
mysql_connect("localhost","root","");
mysql_select_db("chefdb");
mysql_query("INSERT INTO membres(`login`, `password`)VALUES('".$log."','".$pass."')");