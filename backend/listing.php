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
    $id = $_GET['listingId'];
    
    $filter = json_decode($jsonInput);
    $searchString = $filter->searchString;
    $searchString = "%".$searchString."%";
    $sql = "SELECT * FROM listings WHERE listing_id = $id";
    $result = $mySQL->query($sql);


    $listingSelected;
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $listingSelected = $row;
        }
      } else {
        
      }
        
    echo json_encode($listingSelected);
    
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
    // id,
    // title,
    // price,
    // expirationDate,
    // description,
    // location,
    // image,
    $jsonInput = file_get_contents('php://input');
    $listing = json_decode($jsonInput);
    $listingId = $listing->id;
    $title = $listing->title;
    $price = $listing->price;
    $sql = "UPDATE listings SET listing_title = '$title', listing_price = '$price'   WHERE listing_id=$listingId ";
    if ($mySQL->query($sql) === TRUE) {
        $response['success'] = TRUE;
        echo json_encode($response);
    } else {
        $response['success'] = FALSE;
        $response['error'] = "DELETE failed. Please try again.".$mySQL->error.$mysqli->connect_error;
        echo json_encode($response);
    }

} 
 if ($_GET['action'] == 'deleteListing') {

    $jsonInput = file_get_contents('php://input');
    $listing = json_decode($jsonInput);
    $listingId = $listing->listing_id;
    $sql = "DELETE FROM listings WHERE listing_id='$listingId' ";
    if ($mySQL->query($sql) === TRUE) {
        $response['success'] = TRUE;
        echo json_encode($response);
    } else {
        $response['success'] = FALSE;
        $response['error'] = "DELETE failed. Please try again.".$mySQL->error.$mysqli->connect_error;
        echo json_encode($response);
    }
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
}
?>

