<?php

//Tên CSDL cần làm việc
$dbName = 'diadiemanuong';
//if ($_SERVER['REQUEST_METHOD'] != 'GET')
   // die('Invalid HTTP method!');
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
    $rest = $objCollection->remove(array('_id' => new MongoId("$id_quan")));
	print_r($rest);
	echo "Đã xoa";
	$adminURL = '/thucpham/NiceAdmin/index.php';
	header('Location: '.$adminURL);
  
}
