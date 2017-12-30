<?php
//Tên CSDL cần làm việc
$dbName = 'diadiemanuong';
try {
        //Khởi tạo đối tượng PHP Client
        $objClient = new MongoClient();
        //Chọn CSDL
        $objDB = $objClient->$dbName;
} catch (Exception $ex) {
        //Trường hợp lỗi, thông báo kết nối không thành công
        die('Kết nối không thành công!');
}
if(isset($_REQUEST["code"])){
    $objCollection = new MongoCollection($objDB, 'quan');
     $id_quan=$_REQUEST['code'];
    $rest = $objCollection->findOne(array('_id' => new MongoId("$id_quan")));
    //print_r($rest['giomocua']);
    if($_REQUEST["flag"]){
	
	$document = array('diachi' => $_POST['diachi'],
		'glmapcode' => $_POST['map'],
         'loaithucan' => $_POST['loai'],
         'giomocua' => [['gio'=>$_POST['gio_m'],'phut'=>$_POST['phut_m']]],
         'giodongcua' => [['gio'=>$_POST['gio_d'],'phut'=>$_POST['phut_d']]]
	);
	$filter = array('tenquan' => $_REQUEST['code']);
	$update = array('$set' => $document); 
        //echo $_POST['diachi']; 
	$ret = $objCollection->update($filter, $update );
        print_r($rest['diachi']);
	$adminURL = 'quan.php';
        header('Location: '.$adminURL);
    }
} ?>
<html>
<head>
  <title>Tìm món ăn </title>
<link rel="stylesheet" type="text/css" href="css.css">
<meta charset="utf-8">
</head>
<body >
  <div class="toan_cuc">
  <div class="content">
  <!--Địa điểm nỗi bật-->
    <div class="main_content">
    <div class="form" style="width: 500px;margin: auto;">
      <form action="Sua.php?flag=1&code=<?=$_REQUEST["code"]?>" method="post">
      <table class="table" border="1">
        <tr>
          <td>Tên quán</td>
          <td><input type="text" name="tenquan" value='<?php echo $rest['tenquan'];?>'></td>
        </tr>
        <tr>
          <td>Địa chỉ</td>
          <td><input type="text" name="diachi" value='<?php echo $rest['diachi'];?>'></td>
        </tr>
        <tr>
          <td>Loại</td>
          <td><input type="text" name="loai" value=<?php echo $rest['loaithucan'];?>></td>
          </tr>
        <tr>
          <td>giờ mở cửa</td>
          <td><input type="text" name="gio_m" value='<?php echo $rest['giomocua'][0]['gio'];?>'>:<input type="text" name="phut_m" value='<?php echo $rest['giomocua'][0]['phut'];?>'></td>
        </tr>
        <tr>
          <td>giờ đóng cửa</td>
          <td><input type="text" name="gio_d" value='<?php echo $rest['giodongcua'][0]['gio'];?>'>:<input type="text" name="phut_d" value='<?php echo $rest['giodongcua'][0]['phut'];?>'></td>
        </tr>
        <tr>
          <td>Món ăn của quán</td>

          <!--THAY ĐỔI-->
          <?php 
              foreach ($rest['tenmon'] as $keys) {
                # code...
              
                echo "<td>Tên: <input type='text' name='monan' value='".$keys['ten']."'>Giá:<input type='text' name='gia' value='".$keys['gia']."'></td>";
              }
        
          ?>

        </tr>
        <tr>
          <td>map</td>
          <td><input type="text" name="map" value='<?php echo $rest['glmapcode'];?>'></td>
           </tr>
        <tr>
          <td colspan="2"><center><input type="submit" name="action" value="Lưu" width="200px" height="20px"></center></td>
        </tr>
      </table>
      </form>
    </div>
  </div>
</div>
</div>
