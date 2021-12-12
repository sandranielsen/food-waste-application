<?php
//require "fileUpload.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");

session_start();
include("mysql.php");
if (isset($_GET['action'])) {
if ($_GET['action'] == 'getListings') {
    $jsonInput = file_get_contents('php://input');
    
    $filter = json_decode($jsonInput);
    $searchString = $filter->searchString;
    $searchString = "%".$searchString."%";
    $sql = "SELECT * FROM listings WHERE listing_title LIKE '$searchString'";
    $result = $mySQL->query($sql);


    $listingSelected = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            array_push($listingSelected,$row);
        }
      } else {
        
      }
        
    echo json_encode($listingSelected);
}

if ($_GET['action'] == 'getListing') {
    // Declare the listingSelected variable - used to save the object of the listing that was clicked on previous page
    
} 
if ($_GET['action'] == 'createListing') {
    $jsonInput = file_get_contents('php://input');
    $newListing = json_decode($jsonInput);
    $sql = "CALL CreateListing('$newListing->title', '$newListing->user_id')";
    if ($mySQL->query($sql) === TRUE) {
        $response['success'] = TRUE;
        echo json_encode($response);
    } else {
        $response['success'] = FALSE;
        $response['error'] = "CreateListing failed. Please try again.".$mySQL->error.$mysqli->connect_error;
        echo json_encode($response);
    }
}

if ($_GET['action'] == 'updateListing') {
    $listingToupdate = json_decode(file_get_contents("php://input"));

    foreach ($listings as $listing) {
        if ($listing->id == $listingToupdate->id) {
            $listing->title = $listingToupdate->title;
            $listing->price = $listingToupdate->price;
            $listing->description = $listingToupdate->description;
            $listing->expirationDate = $listingToupdate->expirationDate;
            $listing->location = $listingToupdate->location;
            $listing->image = $listingToupdate->image;
        }
    }
    $encoded = json_encode($listings);
    $fp = fopen('listing.json', 'w');
    fwrite($fp, $encoded);
    fclose($fp);
    echo $encoded;
} 
 if ($_GET['action'] == 'deleteListing') {
    $newListingsArray = [];
    foreach ($listings as $listing) {
        if ($listing->id != $_GET['listingId']) {
            array_push($newListingsArray, $listing);
        }
    }
    $encoded = json_encode($newListingsArray);
    $fp = fopen('listing.json', 'w');
    fwrite($fp, $encoded);
    fclose($fp);
    echo $encoded;
} 
if ($_GET['action'] == "uploadImage") {
    // Creates a new instance of the FileUpload class
    $newUpload = new FileUpload($_FILES['fileToUpload']);

    // Check if file type is an accepted image file format
    $acceptedFileTypes = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'];
    if (in_array($newUpload->GetFileType(), $acceptedFileTypes)) {

        // Renaming the file before uploading
        $newUpload->RenameFile(date('Ymd_His'));

        // Creates thumbnails in three different sizes
        $newUpload->ResizeAndUpload("files/small", 200);
        $newUpload->ResizeAndUpload("files/medium", 500);
        $newUpload->ResizeAndUpload("files/large", 1000);

        // Uploads the original file, and saves the JSON response in a session 
        echo $newUpload->UploadFile("files/original");
    } else {
        $data['status'] = "failed";
        $data['error'] = "Wrong file type";
        echo json_encode($data);
    }
}


/*
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


} */
}
?>

