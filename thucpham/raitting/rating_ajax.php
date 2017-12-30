<?php

//include "config.php";
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

$userid = 4;
$postid = $_POST['postid'];
$rating = $_POST['rating'];



    $objCollection = new MongoCollection($objDB, 'raiting');
    $result2 = $objCollection->insert( [ 
        
         'id_quan' => new MongoId($postid),
         'diem' => $rating
        
  ] );
$objCollection_ratting = new MongoCollection($objDB, 'raiting');
                            $ds_raitting = $objCollection_ratting->find(["id_quan"=>new MongoId("$postid")]);
                            $i=0;$tong=0;$trungbinh=0;
                            foreach ($ds_raitting as $rating_quan ) {
                                $i=$i+1;
                                $tong=$tong+$rating_quan["diem"];
                                $trungbinh=($tong/$i);
                            }
$return_arr = array("averageRating"=>$trungbinh);

echo json_encode($return_arr);