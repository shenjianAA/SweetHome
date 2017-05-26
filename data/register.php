<?php
header('content-type:application/json;charset=utf8');
$mobile=$_REQUEST['mobile'];
$uName=$_REQUEST['uName'];
$pwd=$_REQUEST['pwd'];
require('init.php');
  $sql = "SELECT * FROM user_list WHERE uName='$uName'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row===null){
    $sql="insert into user_list values(null,'$mobile','$uName','$pwd')";
    $resulti=mysqli_query($conn,$sql);
  }else{
	$resulti = 0;
  }
  echo json_encode($resulti);
?>