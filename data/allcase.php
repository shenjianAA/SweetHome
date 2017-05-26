<?php
  header("content-type:application/json;charset=utf8");
  $pageNo=$_REQUEST['pageNo'];
  $offset = ($pageNo-1)*6;
  require("init.php");
  $sql="select * from des_case limit $offset,6";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($rows);
?>