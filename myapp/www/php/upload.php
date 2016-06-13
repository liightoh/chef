<?php
//Affiche les erreurs en lien dur
error_reporting(E_ALL);
ini_set('display_errors',1);

//Autorise l'envoie sur un serveur externe 
header("Access-Control-Allow-Headers: *");


//Connexion BDD
define('SQL_HOST',       'localhost');
define('SQL_USERNAME',   'root');
define('SQL_PASSWORD',   '');
define('SQL_DBNAME',     'chefdb');

try {
    $db = new PDO('mysql:chefdb='.SQL_DBNAME.';host='.SQL_HOST, SQL_USERNAME, SQL_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}

catch(Exception $e) {
    exit('Erreur : ' . $e->getMessage());
}


/*

1) ICI, RECUPERATION GET OU POST
2) SOTCKAGE EN VARIABLES


*/


//Requete SQL 

    $sql = "INSERT INTO NOMDETATABLE(colonne1, colonne2, colonne3) VALUES ('$variable1', '$variable2', '$variable3')";
    $req = $db->prepare($sql);
    $result = $req->execute();
    

    //Compatible IONIC
    echo $json_response = json_encode($result);

?>
