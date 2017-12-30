<?php

//Tên CSDL cần làm việc
$dbName = 'diadiemanuong';
try {
	//Khởi tạo đối tượng PHP Client
  //THAY ĐỔI
	$objClient = new Mongo();
	//Chọn CSDL
	$objDB = $objClient->$dbName;
} catch (Exception $ex) {
	//Trường hợp lỗi, thông báo kết nối không thành công
	die('Kết nối không thành công!');
}

if(isset($_POST['action']) && $_POST['action']=='add'){
    
        $gridFS = $objDB->getGridFS();
        
        $filename = $_FILES['image']['name'];
        $filetype = $_FILES['image']['type'];
        $filepath = $_FILES['image']['tmp_name'];
        $idImg = $gridFS->storeFile($filepath,array('filename' => $filename,'filetype' => $filetype));

        $objCollection = new MongoCollection($objDB, 'monan');
          $id_quan=$_REQUEST['id_quan'];
          $result2 = $objCollection->insert( [ 
              
               'id_quan' => new MongoId("$id_quan"),
               'ten' => $_REQUEST['ten'], 
               'gia' => $_REQUEST['gia'],
               'hinhanh' => $idImg
        ] );
     
   
}

// if(isset($_REQUEST["id_quan"]) and isset($_REQUEST["action"])){
//   if($_REQUEST["action"]="add"){
//     $objCollection = new MongoCollection($objDB, 'monan');
//     $id_quan=$_REQUEST['id_quan'];
//     $result2 = $objCollection->insert( [ 
        
//          'id_quan' => new MongoId("$id_quan"),
//          'ten' => $_REQUEST['ten'], 
//          'gia' => $_REQUEST['gia'],
//   ] );
// echo "Đã thêm thành công một document";
//   }
// }

?>

<!DOCTYPE html>
<html>
<head>
  <title>Tìm món ăn </title>
<link rel="stylesheet" type="text/css" href="../css.css">
<meta charset="utf-8">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body >
<div class="header">
  </div>
  <div class = "menu_pub">
    <div class="menu">
    <ul>
      <!--THAY ĐỔI-->
      <li> <a href="../index.php">Trang chủ</a></li>
      <li><a href="../quan.php">Địa điểm</a></li>
      <li ><a href="#">Địa điểm gần bạn</a></li>
      <li><a href="#">Tìm kiếm</a></li>
    </ul>
    </div>
  </div>
 <div class="toan_cuc">
  <div class="content">
  <!--Địa điểm nỗi bật-->
    <div class="main_content">
    <div class="form" style="width: 500px;margin: auto;">

      <!--THAY ĐỔI-->
      <form class="w3-container w3-card-4" action="../monan/them.php" method="post" accept-charset="utf-8" enctype="multipart/form-data">

        <input type="hidden" name="id_quan" value="<?php if(isset($_REQUEST["id_quan"])) echo  $_REQUEST["id_quan"]; ?>">
        <p>      
        <label class="w3-text-blue"><b>Tên Món</b></label>
        <input class="w3-input w3-border" name="ten" type="text">
        </p>
        <p>      
        <label class="w3-text-blue"><b>Giá</b></label>
        <input class="w3-input w3-border" name="gia" type="text"></p>

        <p><!--THAY ĐỔI-->
          <label for="exampleInputFile">Chọn ảnh</label>                
          <input type="file" name="image">
        </p>


        <p>
        <center><input class="w3-btn w3-blue" type="submit" name="action" value="add" width="200px" height="20px" ></center>      
        </p>

      </form>
    </div>
    <br>
    <table class="table_quan">
    <th>STT</th>
    <th>Tên món ăn</th>
    <th>Giá</th>
    <th>Hình ảnh</th>
    <th>Thêm, Xóa, Sửa</th>
    <?php $objCollection = new MongoCollection($objDB, 'monan');
          //Thực hiện truy vấn theo field _id và gán kết quả vào biến $userData
          $id_quan=$_REQUEST['id_quan'];
          $ds_monan = $objCollection->find(["id_quan"=>new MongoId("$id_quan")]);
          $i=0;
          foreach($ds_monan as $monan){ $i=$i+1;?>
    <tr>
      <td><?php echo $i; ?></td>
      <td><?php echo $monan ["ten"] ?></td>
      <td><?php echo $monan["gia"] ?></td>
      <td>
        <!--THAY ĐỔI-->

        <?php 
            $idImg_monan=$monan["hinhanh"];
            echo "<img src='../showimg.php?id=".$idImg_monan."' width=100px height=100px>"  
        ?>


      </td>
      <td>
        <!--THAY ĐỔI-->
        <?php 
              echo "<a href='../Sua.php?flag=0&code=".$id_quan."'><img src='' alt='Sửa'></a>";
              echo "<a href='../Xoa.php?code=".$id_quan."'><img src='' alt='Xóa'></a>";
        ?>


      </td>
    </tr>
    <?php } ?>
  </table>

    </div>
 
  </div>
     <div class="footer">
    
  </div>

<script>
var x = document.getElementById("map");

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.watchPosition(showPosition);
} else {
x.innerHTML = "Geolocation is not supported by this browser.";}
}
var tam="https://www.google.com/maps/@"+ position.coords.latitude +","+position.coords.longitude+",15z/data=!4m2!10m1!1e4"

function showPosition(position) {
$('iframe').attr('src',tam);
}
</script>
</body>
</html>
