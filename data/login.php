<?php
header('content-type:application/json;charset=utf8');
$uName=$_REQUEST['uName'];
$pwd=$_REQUEST['pwd'];
require('init.php');
  $sql = "SELECT * FROM user_list WHERE uName='$uName' and pwd='$pwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row===null){
      echo json_encode(0);
  }else{
  	  echo json_encode($row);
  }
?>