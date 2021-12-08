<?php

session_start();
include("mysql.php");

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    // ADD LISTING
    if ($action == "add-listing") {
        $listingObject = json_decode(file_get_contents('php://input'));
        $listing_id = $listingObject->listing_id;
        $listing_title = $listingObject->listing_title;
        $listing_description = $listingObject->listing_description;

        // Get listing
        $sql = "SELECT * FROM listings WHERE listing_title = '$listing_title'";
        $result = $mySQL->query($sql);

       
    }


        while ($row = mysql_fetch_array($result))  
    {
        echo $row["listing_id"].", listing_title ".$row["listing_description "].", listing_description  ".$row["listing_description "] ;
    }


}

?>

