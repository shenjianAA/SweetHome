<?php
  header("content-type:application/json;charset=utf8");
  $tab=$_REQUEST['tab'];
  require("init.php");
  $sql="select * from des_case where tabs like '%$tab%'";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($rows);
?>