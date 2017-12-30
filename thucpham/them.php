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


if(isset($_REQUEST['action'])){
	//THAY ĐỔI
	$gridFS = $objDB->getGridFS();
    $objCollection = new MongoCollection($objDB, 'quan');
    $filename = $_FILES['image']['name'];
    $filetype = $_FILES['image']['type'];
    $filepath = $_FILES['image']['tmp_name'];
    $idImg = $gridFS->storeFile($filepath,array('filename' => $filename,'filetype' => $filetype));
    //echo $namefile;
    $result2 = $objCollection->insert( [ 
        
         'tenquan' => $_REQUEST['tenquan'],
         'diachi' => $_REQUEST['diachi'], 
         'glmapcode' => $_REQUEST['map'],
         'loaithucan' => $_REQUEST['loai'], 
         'giomocua' => [['gio'=>$_REQUEST['gio_m'],'phut'=>$_REQUEST['phut_m']]],
         'giodongcua' => [['gio'=>$_REQUEST['gio_d'],'phut'=>$_REQUEST['phut_d']]],
         'hinhanh' => $idImg//THAY ĐỔI
  ] );
echo "Đã thêm thành công một document";
  header("Location:localhost:81/thucpham/NiceAdmin/index.php");
}
