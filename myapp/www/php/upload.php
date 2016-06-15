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

    if (isset($_POST['title']) && !empty($_POST['title'])
        && isset($_POST['content']) && !empty($_POST['content'])){

        $titre = $_POST['title'];
        $content = $_POST['content'];

        //Requete SQL

        $sql = "INSERT INTO article SET title = :title, content = :content ";
        $request = $db->prepare($sql);
        $request->execute(array(
            ':title' => $_POST["title"],
            ':content' => $_POST["content"],
        ));

        echo "Article ajouté avec succès";
    }


    //Compatible IONIC
    echo $json_response = json_encode($result);

?>
