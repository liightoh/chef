<?php

$data = json_decode(file_get_contents("php://input"));
$log = mysql_real_escape_string($data->log);
$pass = mysql_real_escape_string($data->pass);
mysqli::__construct("localhost","root","");
mysql_select_db("company");
mysql_query("INSERT INTO membres(`login`, `password`)VALUES('".$log."','".$pass."')");